"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || (function () {
    var ownKeys = function(o) {
        ownKeys = Object.getOwnPropertyNames || function (o) {
            var ar = [];
            for (var k in o) if (Object.prototype.hasOwnProperty.call(o, k)) ar[ar.length] = k;
            return ar;
        };
        return ownKeys(o);
    };
    return function (mod) {
        if (mod && mod.__esModule) return mod;
        var result = {};
        if (mod != null) for (var k = ownKeys(mod), i = 0; i < k.length; i++) if (k[i] !== "default") __createBinding(result, mod, k[i]);
        __setModuleDefault(result, mod);
        return result;
    };
})();
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const baileys_1 = __importStar(require("@whiskeysockets/baileys"));
const qrcode_1 = __importDefault(require("qrcode"));
const path_1 = __importDefault(require("path"));
class WhatsappService {
    constructor() {
        this.sock = null;
        this.isReady = false;
        this.latestQr = null;
        this.authFolder = path_1.default.join(process.cwd(), "auth_whatsapp");
        this.connect();
    }
    async connect() {
        const { state, saveCreds } = await (0, baileys_1.useMultiFileAuthState)(this.authFolder);
        this.sock = (0, baileys_1.default)({
            auth: state,
            printQRInTerminal: false,
        });
        this.sock.ev.on("creds.update", saveCreds);
        this.sock.ev.on("connection.update", async (update) => {
            const { connection, lastDisconnect, qr } = update;
            if (qr) {
                try {
                    this.latestQr = await qrcode_1.default.toDataURL(qr);
                    console.log("📱 Nouveau QR code généré, disponible via /api/whatsapp/qr");
                }
                catch (err) {
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
                const shouldReconnect = lastDisconnect?.error?.output?.statusCode !== baileys_1.DisconnectReason.loggedOut;
                console.warn("⚠️ WhatsApp déconnecté :", lastDisconnect?.error);
                if (shouldReconnect) {
                    this.connect();
                }
                else {
                    console.error("❌ Déconnecté définitivement (logout). Rescanner le QR nécessaire.");
                }
            }
        });
    }
    getQrCode() {
        return this.latestQr;
    }
    getStatus() {
        return { connected: this.isReady };
    }
    toWhatsappNumber(telephone) {
        let digits = telephone.replace(/[^0-9]/g, "");
        if (!digits.startsWith("221")) {
            digits = `221${digits.replace(/^0+/, "")}`;
        }
        return `${digits}@s.whatsapp.net`;
    }
    async sendMessage(telephone, message) {
        if (!this.isReady || !this.sock) {
            console.warn("WhatsApp pas encore prêt (QR non scanné ou déconnecté) — message non envoyé");
            return false;
        }
        try {
            const jid = this.toWhatsappNumber(telephone);
            const results = await this.sock.onWhatsApp(jid);
            const exists = results && results.length > 0 && results[0].exists;
            if (!exists) {
                console.warn(`Le numéro ${telephone} ne semble pas être sur WhatsApp`);
                return false;
            }
            await this.sock.sendMessage(jid, { text: message });
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