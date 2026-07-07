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
exports.default = router;
//# sourceMappingURL=commande.js.map