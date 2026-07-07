"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const factureService_1 = __importDefault(require("../services/factureService"));
class FactureController {
    async generer(req, res) {
        try {
            const commandeId = Number(req.params.id);
            const type = req.query.type === "proforma" ? "proforma" : "facture";
            await factureService_1.default.genererPDF(commandeId, type, res);
            return;
        }
        catch (error) {
            if (!res.headersSent) {
                return res.status(400).json({ message: error.message });
            }
            return;
        }
    }
}
exports.default = new FactureController();
//# sourceMappingURL=factureController.js.map