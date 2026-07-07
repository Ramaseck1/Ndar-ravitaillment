import { Request, Response } from "express";
import paiementService from "../services/paiementService";

class PaiementController {

  async enregistrer(req: Request, res: Response) {
    try {
      const commandeId = Number(req.params.id);
      const { montant, methode, note } = req.body;

      const commande = await paiementService.enregistrerPaiement({
        commandeId,
        montant: Number(montant),
        methode,
        note,
      });

      return res.status(201).json(commande);
    } catch (error: any) {
      return res.status(400).json({ message: error.message });
    }
  }

  async getDette(req: Request, res: Response) {
    try {
      const dette = await paiementService.getDette(Number(req.params.id));
      return res.json(dette);
    } catch (error: any) {
      return res.status(404).json({ message: error.message });
    }
  }

  async getDettesClient(req: Request, res: Response) {
    try {
      const dettes = await paiementService.getDettesClient(req.params.telephone);
      return res.json(dettes);
    } catch (error: any) {
      return res.status(500).json({ message: error.message });
    }
  }

  async getToutesLesDettes(req: Request, res: Response) {
    try {
      const dettes = await paiementService.getToutesLesDettes();
      return res.json(dettes);
    } catch (error: any) {
      return res.status(500).json({ message: error.message });
    }
  }
}

export default new PaiementController();