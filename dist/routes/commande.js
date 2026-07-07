"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const commandeController_1 = __importDefault(require("../controllers/commandeController"));
const auth_1 = require("../middleware/auth");
const paiementController_1 = __importDefault(require("../controllers/paiementController"));
const factureController_1 = __importDefault(require("../controllers/factureController"));
const whatsappService_1 = __importDefault(require("../services/whatsappService"));
const router = (0, express_1.Router)();
router.post("/", commandeController_1.default.create);
router.get("/", auth_1.authenticate, commandeController_1.default.findAll);
router.get("/:id", auth_1.authenticate, commandeController_1.default.findById);
router.get("/client/:telephone", commandeController_1.default.commandesClient);
router.patch("/:id/livrer", auth_1.authenticate, commandeController_1.default.livrer);
router.post("/:id/paiements", auth_1.authenticate, paiementController_1.default.enregistrer);
router.get("/:id/dette", auth_1.authenticate, paiementController_1.default.getDette);
router.get("/dettes/toutes", auth_1.authenticate, paiementController_1.default.getToutesLesDettes);
router.get("/client/:telephone/dettes", auth_1.authenticate, paiementController_1.default.getDettesClient);
router.get("/:id/facture", auth_1.authenticate, factureController_1.default.generer);
router.get("/whatsapp/qr", auth_1.authenticate, (req, res) => {
    res.json({ qr: whatsappService_1.default.getQrCode() });
});
router.get("/whatsapp/status", auth_1.authenticate, (req, res) => {
    res.json(whatsappService_1.default.getStatus());
});
exports.default = router;
//# sourceMappingURL=commande.js.map