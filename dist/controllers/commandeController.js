"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const commandeService_1 = __importDefault(require("../services/commandeService"));
const prisma_1 = require("../prisma");
class CommandeController {
    async create(req, res) {
        try {
            const commande = await commandeService_1.default.create(req.body);
            return res.status(201).json(commande);
        }
        catch (error) {
            return res.status(400).json({ message: error.message });
        }
    }
    async findAll(req, res) {
        try {
            const commandes = await commandeService_1.default.findAll();
            return res.json(commandes);
        }
        catch (error) {
            return res.status(500).json({ message: error.message });
        }
    }
    async findById(req, res) {
        try {
            const commande = await prisma_1.prisma.commande.findUnique({
                where: { id: Number(req.params.id) },
                include: {
                    client: true,
                    details: {
                        include: {
                            produit: true,
                            kit: { include: { details: true } },
                        },
                    },
                },
            });
            if (!commande) {
                return res.status(404).json({ message: "Commande introuvable" });
            }
            return res.json(commande);
        }
        catch (error) {
            return res.status(500).json({ message: error.message });
        }
    }
    async livrer(req, res) {
        try {
            const commande = await commandeService_1.default.livrer(Number(req.params.id));
            return res.json(commande);
        }
        catch (error) {
            return res.status(400).json({ message: error.message });
        }
    }
    async commandesClient(req, res) {
        try {
            const { telephone } = req.params;
            const commandes = await prisma_1.prisma.commande.findMany({
                where: { client: { telephone } },
                include: {
                    client: true,
                    details: {
                        include: {
                            produit: true,
                            kit: { include: { details: true } },
                        },
                    },
                },
            });
            return res.json(commandes);
        }
        catch (error) {
            return res.status(500).json({ message: error.message });
        }
    }
}
exports.default = new CommandeController();
//# sourceMappingURL=commandeController.js.map