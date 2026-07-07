import { Request, Response } from "express";
import factureService from "../services/factureService";

class FactureController {
  async generer(req: Request, res: Response): Promise<Response | void> {
    try {
      const commandeId = Number(req.params.id);
      const type = (req.query.type as string) === "proforma" ? "proforma" : "facture";

      await factureService.genererPDF(commandeId, type, res);
      return; // ← chemin de succès explicite
    } catch (error: any) {
      if (!res.headersSent) {
        return res.status(400).json({ message: error.message });
      }
      return; // ← chemin d'erreur après envoi des headers, explicite aussi
    }
  }
}

export default new FactureController();