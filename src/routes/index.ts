import { Router } from "express";

import authRoutes from "./auth";
 import categorieRoutes from "./categorie";
import produitRoutes from "./produit";
import kitRoutes from "./kit";
 import commandeRoutes from "./commande";
/*  import clientROutes from "./client"
 */const router = Router();

router.use("/auth", authRoutes);

router.use("/categories", categorieRoutes);
 
router.use("/produits", produitRoutes);

router.use("/kits", kitRoutes);

router.use("/commandes", commandeRoutes);
 
export default router;