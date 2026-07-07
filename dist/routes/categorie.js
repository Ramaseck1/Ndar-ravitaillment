"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const multer_1 = __importDefault(require("multer"));
const upload = (0, multer_1.default)({ storage: multer_1.default.memoryStorage() });
const categorieController_1 = __importDefault(require("../controllers/categorieController"));
const auth_1 = require("../middleware/auth");
const router = (0, express_1.Router)();
router.post("/", auth_1.authenticate, upload.single("image"), categorieController_1.default.create);
router.get("/", categorieController_1.default.findAll);
router.put("/:id", auth_1.authenticate, upload.single("image"), categorieController_1.default.update);
router.delete("/:id", auth_1.authenticate, categorieController_1.default.delete);
exports.default = router;
//# sourceMappingURL=categorie.js.map