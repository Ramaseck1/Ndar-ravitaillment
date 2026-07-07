"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.EmailService = void 0;
const nodemailer_1 = __importDefault(require("nodemailer"));
const transporter = nodemailer_1.default.createTransport({
    service: 'gmail',
    auth: {
        user: process.env.GMAIL_USER,
        pass: process.env.GMAIL_APP_PASSWORD,
    },
});
exports.EmailService = {
    async sendResetCode(to, nomGIE, code) {
        await transporter.sendMail({
            from: `"Support GIE" <${process.env.GMAIL_USER}>`,
            to,
            subject: 'Code de réinitialisation de mot de passe',
            html: `
        <div style="font-family: Arial, sans-serif; max-width: 480px; margin: auto; border: 1px solid #e5e7eb; border-radius: 8px; overflow: hidden;">
          <div style="background: #16a34a; padding: 24px; text-align: center;">
            <h1 style="color: white; margin: 0; font-size: 20px;">Réinitialisation du mot de passe</h1>
          </div>
          <div style="padding: 32px;">
            <p style="color: #374151;">Bonjour <strong>${nomGIE}</strong>,</p>
            <p style="color: #374151;">Voici votre code de vérification :</p>
            <div style="text-align: center; margin: 32px 0;">
              <span style="
                display: inline-block;
                font-size: 36px;
                font-weight: bold;
                letter-spacing: 10px;
                color: #16a34a;
                background: #f0fdf4;
                border: 2px dashed #16a34a;
                padding: 16px 32px;
                border-radius: 8px;
              ">${code}</span>
            </div>
            <p style="color: #6b7280; font-size: 14px;">⏱️ Ce code expire dans <strong>10 minutes</strong>.</p>
            <p style="color: #6b7280; font-size: 14px;">Si vous n'êtes pas à l'origine de cette demande, ignorez cet email.</p>
          </div>
        </div>
      `,
        });
    },
};
//# sourceMappingURL=emailService.js.map