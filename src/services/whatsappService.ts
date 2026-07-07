import { Client, LocalAuth } from "whatsapp-web.js";
import qrcode from "qrcode-terminal";

class WhatsappService {
  private client: Client;
  private isReady = false;

  constructor() {
   this.client = new Client({
  authStrategy: new LocalAuth({ clientId: "commandes-bot" }),
  puppeteer: {
    headless: true,
    executablePath: "/usr/bin/chromium-browser", // remplace par le chemin exact trouvé avec "which"
    args: ["--no-sandbox", "--disable-setuid-sandbox"],
  },
});

    this.client.on("qr", (qr) => {
      console.log("📱 Scanne ce QR code avec WhatsApp > Appareils liés :");
      qrcode.generate(qr, { small: true });
    });

    this.client.on("ready", () => {
      this.isReady = true;
      console.log("✅ WhatsApp connecté et prêt à envoyer des messages");
    });

    this.client.on("disconnected", (reason) => {
      this.isReady = false;
      console.warn("⚠️ WhatsApp déconnecté :", reason);
    });

    this.client.initialize();
  }

  /** Convertit un numéro local/international en identifiant WhatsApp (ex: 221771234567@c.us) */
  private toWhatsappNumber(telephone: string): string {
    let digits = telephone.replace(/[^0-9]/g, "");
    if (!digits.startsWith("221")) {
      digits = `221${digits.replace(/^0+/, "")}`; // indicatif Sénégal par défaut
    }
  return telephone.replace(/^\+/, ""); // whatsapp-web.js attend "221771234567", sans le +
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