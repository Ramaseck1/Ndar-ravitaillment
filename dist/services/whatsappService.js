"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const whatsapp_web_js_1 = require("whatsapp-web.js");
const qrcode_terminal_1 = __importDefault(require("qrcode-terminal"));
class WhatsappService {
    constructor() {
        this.isReady = false;
        this.client = new whatsapp_web_js_1.Client({
            authStrategy: new whatsapp_web_js_1.LocalAuth({ clientId: "commandes-bot" }),
            puppeteer: {
                headless: true,
                executablePath: "/usr/bin/chromium-browser",
                args: ["--no-sandbox", "--disable-setuid-sandbox"],
            },
        });
        this.client.on("qr", (qr) => {
            console.log("📱 Scanne ce QR code avec WhatsApp > Appareils liés :");
            qrcode_terminal_1.default.generate(qr, { small: true });
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
    toWhatsappNumber(telephone) {
        let digits = telephone.replace(/[^0-9]/g, "");
        if (!digits.startsWith("221")) {
            digits = `221${digits.replace(/^0+/, "")}`;
        }
        return telephone.replace(/^\+/, "");
    }
    async sendMessage(telephone, message) {
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
        }
        catch (err) {
            console.error("Erreur envoi WhatsApp:", err);
            return false;
        }
    }
}
exports.default = new WhatsappService();
//# sourceMappingURL=whatsappService.js.map