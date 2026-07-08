import { Router } from "express";
import multer from "multer";
const upload = multer({ storage: multer.memoryStorage() });


import ProduitController
from "../controllers/produitController";

import { authenticate } from "../middleware/auth";

const router = Router();
// ⚠️ Ces deux routes AVANT /:id sinon Express les intercepte comme paramètre
router.get('/meilleurs-ventes', ProduitController.meilleursVentes);
router.get('/tri', ProduitController.findAllSorted);

router.get('/', ProduitController.findAll);
router.post('/', authenticate, 
    upload.single("image"),
    ProduitController.create);
router.put('/:id', authenticate, upload.single("image"), ProduitController.update);
router.delete('/:id', authenticate, ProduitController.delete);
export default router;