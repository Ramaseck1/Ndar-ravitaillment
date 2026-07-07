"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const auth_1 = __importDefault(require("./auth"));
const categorie_1 = __importDefault(require("./categorie"));
const produit_1 = __importDefault(require("./produit"));
const kit_1 = __importDefault(require("./kit"));
const commande_1 = __importDefault(require("./commande"));
const router = (0, express_1.Router)();
router.use("/auth", auth_1.default);
router.use("/categories", categorie_1.default);
router.use("/produits", produit_1.default);
router.use("/kits", kit_1.default);
router.use("/commandes", commande_1.default);
exports.default = router;
//# sourceMappingURL=index.js.map