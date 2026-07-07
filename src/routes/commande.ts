import { Router } from "express";
import CommandeController from "../controllers/commandeController";
import { authenticate } from "../middleware/auth";
import PaiementController from "../controllers/paiementController";
import FactureController from "../controllers/factureController";


const router = Router();

// Créer une commande (public — le client passe commande sans compte)
router.post("/",CommandeController.create);

// Liste toutes les commandes (admin et client )
router.get("/",authenticate, CommandeController.findAll);

// Détail d'une commande (admin)
router.get("/:id", authenticate, CommandeController.findById);

// Commandes d'un client via son téléphone (admin ou client)
router.get("/client/:telephone", CommandeController.commandesClient);

// Marquer une commande comme livrée (admin)
router.patch("/:id/livrer", authenticate, CommandeController.livrer);

// Paiements / dettes
router.post("/:id/paiements", authenticate, PaiementController.enregistrer);
router.get("/:id/dette", authenticate, PaiementController.getDette);
router.get("/dettes/toutes", authenticate, PaiementController.getToutesLesDettes);
router.get("/client/:telephone/dettes", authenticate, PaiementController.getDettesClient);

// Facture PDF
router.get("/:id/facture", authenticate, FactureController.generer);



export default router;