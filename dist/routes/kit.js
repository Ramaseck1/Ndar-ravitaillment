"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const kitController_1 = __importDefault(require("../controllers/kitController"));
const auth_1 = require("../middleware/auth");
const router = (0, express_1.Router)();
router.post("/", auth_1.authenticate, kitController_1.default.create);
router.get("/", kitController_1.default.findAll);
router.get("/:id", kitController_1.default.findById);
router.put("/:id", auth_1.authenticate, kitController_1.default.update);
router.delete("/:id", auth_1.authenticate, kitController_1.default.delete);
router.post("/details", auth_1.authenticate, kitController_1.default.addDetail);
router.put("/details/:id", auth_1.authenticate, kitController_1.default.updateDetail);
router.delete("/details/:id", auth_1.authenticate, kitController_1.default.deleteDetail);
exports.default = router;
//# sourceMappingURL=kit.js.map