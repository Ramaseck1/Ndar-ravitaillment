import { Router } from "express";
import KitController from "../controllers/kitController";
import { authenticate } from "../middleware/auth";

const router = Router();

// Kit lui-même
router.post("/", authenticate, KitController.create);
router.get("/", KitController.findAll);
router.get("/:id", KitController.findById);
router.put("/:id", authenticate, KitController.update);
router.delete("/:id", authenticate, KitController.delete);

// Composition du kit (KitProduitDetail)
router.post("/details", authenticate, KitController.addDetail);
router.put("/details/:id", authenticate, KitController.updateDetail);
router.delete("/details/:id", authenticate, KitController.deleteDetail);

export default router;