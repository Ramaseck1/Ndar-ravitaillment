"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const prisma_1 = require("../prisma");
const bcrypt_1 = __importDefault(require("bcrypt"));
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const client_1 = require("@prisma/client");
class AuthService {
    async login(email, password) {
        const user = await prisma_1.prisma.user.findUnique({
            where: { email }
        });
        if (!user) {
            throw new Error("Utilisateur introuvable");
        }
        const isValid = await bcrypt_1.default.compare(password, user.password);
        if (!isValid) {
            throw new Error("Mot de passe incorrect");
        }
        const token = jsonwebtoken_1.default.sign({ id: user.id, role: user.role }, process.env.JWT_SECRET, { expiresIn: "7d" });
        const { password: _, ...userWithoutPassword } = user;
        return {
            token,
            user: userWithoutPassword
        };
    }
    async createAdmin(nom, prenom, email, password) {
        const existingUser = await prisma_1.prisma.user.findUnique({
            where: { email }
        });
        if (existingUser) {
            throw new Error("Un utilisateur avec cet email existe déjà");
        }
        const hashedPassword = await bcrypt_1.default.hash(password, 10);
        const newAdmin = await prisma_1.prisma.user.create({
            data: {
                nom,
                prenom,
                email,
                password: hashedPassword,
                role: client_1.Role.ADMIN
            }
        });
        const { password: _, ...adminWithoutPassword } = newAdmin;
        return adminWithoutPassword;
    }
}
exports.default = new AuthService();
//# sourceMappingURL=authService.js.map