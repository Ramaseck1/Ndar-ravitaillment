"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const authController_1 = __importDefault(require("../controllers/authController"));
const auth_1 = require("../middleware/auth");
const client_1 = require("@prisma/client");
const router = (0, express_1.Router)();
router.post("/login", authController_1.default.login);
router.post("/create-admin", auth_1.authenticate, (0, auth_1.requireRole)(client_1.Role.SUPERADMIN), authController_1.default.createAdmin);
exports.default = router;
//# sourceMappingURL=auth.js.map