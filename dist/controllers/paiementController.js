"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const paiementService_1 = __importDefault(require("../services/paiementService"));
class PaiementController {
    async enregistrer(req, res) {
        try {
            const commandeId = Number(req.params.id);
            const { montant, methode, note } = req.body;
            const commande = await paiementService_1.default.enregistrerPaiement({
                commandeId,
                montant: Number(montant),
                methode,
                note,
            });
            return res.status(201).json(commande);
        }
        catch (error) {
            return res.status(400).json({ message: error.message });
        }
    }
    async getDette(req, res) {
        try {
            const dette = await paiementService_1.default.getDette(Number(req.params.id));
            return res.json(dette);
        }
        catch (error) {
            return res.status(404).json({ message: error.message });
        }
    }
    async getDettesClient(req, res) {
        try {
            const dettes = await paiementService_1.default.getDettesClient(req.params.telephone);
            return res.json(dettes);
        }
        catch (error) {
            return res.status(500).json({ message: error.message });
        }
    }
    async getToutesLesDettes(req, res) {
        try {
            const dettes = await paiementService_1.default.getToutesLesDettes();
            return res.json(dettes);
        }
        catch (error) {
            return res.status(500).json({ message: error.message });
        }
    }
}
exports.default = new PaiementController();
//# sourceMappingURL=paiementController.js.map