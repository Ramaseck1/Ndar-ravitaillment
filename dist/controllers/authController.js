"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const authService_1 = __importDefault(require("../services/authService"));
class AuthController {
    async login(req, res) {
        try {
            const { email, password } = req.body;
            const result = await authService_1.default.login(email, password);
            return res.status(200).json(result);
        }
        catch (error) {
            return res.status(400).json({ message: error.message });
        }
    }
    async createAdmin(req, res) {
        try {
            const { nom, prenom, email, password } = req.body;
            if (!nom || !prenom || !email || !password) {
                return res.status(400).json({ message: "Tous les champs sont requis (nom, prenom, email, password)" });
            }
            const admin = await authService_1.default.createAdmin(nom, prenom, email, password);
            return res.status(201).json({
                message: "Compte admin créé avec succès",
                user: admin
            });
        }
        catch (error) {
            return res.status(400).json({ message: error.message });
        }
    }
}
exports.default = new AuthController();
//# sourceMappingURL=authController.js.map