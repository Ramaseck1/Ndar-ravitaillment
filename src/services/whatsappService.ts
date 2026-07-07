import makeWASocket, {
  DisconnectReason,
  useMultiFileAuthState,
  WASocket,
} from "@whiskeysockets/baileys";
import { Boom } from "@hapi/boom";
import QRCode from "qrcode";
import path from "path";

class WhatsappService {
  private sock: WASocket | null = null;
  private isReady = false;
  private latestQr: string | null = null;
  private authFolder = path.join(process.cwd(), "auth_whatsapp");

  constructor() {
    this.connect();
  }

  private async connect() {
    const { state, saveCreds } = await useMultiFileAuthState(this.authFolder);

    this.sock = makeWASocket({
      auth: state,
      printQRInTerminal: false,
    });

    this.sock.ev.on("creds.update", saveCreds);

    this.sock.ev.on("connection.update", async (update) => {
      const { connection, lastDisconnect, qr } = update;

      if (qr) {
        try {
          this.latestQr = await QRCode.toDataURL(qr);
          console.log("📱 Nouveau QR code généré, disponible via /api/whatsapp/qr");
        } catch (err) {
          console.error("Erreur génération QR code:", err);
        }
      }

      if (connection === "open") {
        this.isReady = true;
        this.latestQr = null;
        console.log("✅ WhatsApp connecté et prêt à envoyer des messages");
      }

      if (connection === "close") {
        this.isReady = false;
        const shouldReconnect =
          (lastDisconnect?.error as Boom)?.output?.statusCode !== DisconnectReason.loggedOut;

        console.warn("⚠️ WhatsApp déconnecté :", lastDisconnect?.error);

        if (shouldReconnect) {
          this.connect(); // reconnexion automatique
        } else {
          console.error("❌ Déconnecté définitivement (logout). Rescanner le QR nécessaire.");
        }
      }
    });
  }

  /** QR code courant (data URL base64), à afficher côté admin tant que non connecté. */
  getQrCode(): string | null {
    return this.latestQr;
  }

  /** Statut de connexion, pour affichage côté admin. */
  getStatus(): { connected: boolean } {
    return { connected: this.isReady };
  }

  /** Convertit un numéro local/international en identifiant WhatsApp (ex: 221771234567@s.whatsapp.net) */
  private toWhatsappNumber(telephone: string): string {
    let digits = telephone.replace(/[^0-9]/g, "");
    if (!digits.startsWith("221")) {
      digits = `221${digits.replace(/^0+/, "")}`;
    }
    return `${digits}@s.whatsapp.net`; // format attendu par Baileys
  }

 async sendMessage(telephone: string, message: string): Promise<boolean> {
  if (!this.isReady || !this.sock) {
    console.warn("WhatsApp pas encore prêt (QR non scanné ou déconnecté) — message non envoyé");
    return false;
  }
  try {
    const jid = this.toWhatsappNumber(telephone);

    // Vérifie que le numéro existe sur WhatsApp
    const results = await this.sock.onWhatsApp(jid);
    const exists = results && results.length > 0 && results[0].exists;

    if (!exists) {
      console.warn(`Le numéro ${telephone} ne semble pas être sur WhatsApp`);
      return false;
    }

    await this.sock.sendMessage(jid, { text: message });
    return true;
  } catch (err) {
    console.error("Erreur envoi WhatsApp:", err);
    return false;
  }
}
}

export default new WhatsappService();