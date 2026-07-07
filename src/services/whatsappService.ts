import { Client, LocalAuth } from "whatsapp-web.js";
import QRCode from "qrcode";

class WhatsappService {
  private client: Client;
  private isReady = false;
  private latestQr: string | null = null; // data URL base64, exposée à l'admin

  constructor() {
    this.client = new Client({
      authStrategy: new LocalAuth({ clientId: "commandes-bot" }),
      puppeteer: {
        headless: true,
        executablePath: "/usr/bin/chromium-browser", // adapte selon le résultat de "which chromium-browser"
        args: ["--no-sandbox", "--disable-setuid-sandbox"],
      },
    });

    // Un seul listener "qr" : génère l'image base64 pour la page admin
    this.client.on("qr", async (qr) => {
      try {
        this.latestQr = await QRCode.toDataURL(qr);
        console.log("📱 Nouveau QR code généré, disponible via /api/whatsapp/qr");
      } catch (err) {
        console.error("Erreur génération QR code:", err);
      }
    });

    // Un seul listener "ready"
    this.client.on("ready", () => {
      this.isReady = true;
      this.latestQr = null; // plus besoin une fois connecté
      console.log("✅ WhatsApp connecté et prêt à envoyer des messages");
    });

    this.client.on("disconnected", (reason) => {
      this.isReady = false;
      console.warn("⚠️ WhatsApp déconnecté :", reason);
    });

    this.client.on("auth_failure", (msg) => {
      this.isReady = false;
      console.error("❌ Échec d'authentification WhatsApp :", msg);
    });

    this.client.initialize();
  }

  /** QR code courant (data URL base64), à afficher côté admin tant que non connecté. */
  getQrCode(): string | null {
    return this.latestQr;
  }

  /** Statut de connexion, pour affichage côté admin. */
  getStatus(): { connected: boolean } {
    return { connected: this.isReady };
  }

  /** Convertit un numéro local/international en identifiant WhatsApp (ex: 221771234567@c.us) */
  private toWhatsappNumber(telephone: string): string {
    let digits = telephone.replace(/[^0-9]/g, ""); // garde uniquement les chiffres
    if (!digits.startsWith("221")) {
      digits = `221${digits.replace(/^0+/, "")}`; // ajoute l'indicatif Sénégal par défaut
    }
    return digits; // ex: "221771234567", sans "+", tel qu'attendu par whatsapp-web.js
  }

  async sendMessage(telephone: string, message: string): Promise<boolean> {
    if (!this.isReady) {
      console.warn("WhatsApp pas encore prêt (QR non scanné ou déconnecté) — message non envoyé");
      return false;
    }
    try {
      const number = this.toWhatsappNumber(telephone);
      const numberId = await this.client.getNumberId(number);
      if (!numberId) {
        console.warn(`Le numéro ${telephone} ne semble pas être sur WhatsApp`);
        return false;
      }
      await this.client.sendMessage(numberId._serialized, message);
      return true;
    } catch (err) {
      console.error("Erreur envoi WhatsApp:", err);
      return false;
    }
  }
}

export default new WhatsappService();