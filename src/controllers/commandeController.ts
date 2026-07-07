import { Request, Response } from "express";
import commandeService from "../services/commandeService";
import { prisma } from "../prisma";

class CommandeController {

  async create(req: Request, res: Response) {
    try {
      const commande = await commandeService.create(req.body);
      return res.status(201).json(commande);
    } catch (error: any) {
      return res.status(400).json({ message: error.message });
    }
  }

  async findAll(req: Request, res: Response) {
    try {
      const commandes = await commandeService.findAll();
      return res.json(commandes);
    } catch (error: any) {
      return res.status(500).json({ message: error.message });
    }
  }

  async findById(req: Request, res: Response) {
    try {
    const commande = await prisma.commande.findUnique({
  where: { id: Number(req.params.id) },
  include: {
    client: true,
    details: {
      include: {
        produit: true,
        kit: { include: { details: true } },
      },
    },
  },
});

      if (!commande) {
        return res.status(404).json({ message: "Commande introuvable" });
      }

      return res.json(commande);
    } catch (error: any) {
      return res.status(500).json({ message: error.message });
    }
  }

  async livrer(req: Request, res: Response) {
    try {
      const commande = await commandeService.livrer(Number(req.params.id));
      return res.json(commande);
    } catch (error: any) {
      return res.status(400).json({ message: error.message });
    }
  }

  /** Toutes les commandes d'un client identifié par son numéro de téléphone */
  async commandesClient(req: Request, res: Response) {
    try {
      const { telephone } = req.params;

     const commandes = await prisma.commande.findMany({
  where: { client: { telephone } },
  include: {
    client: true,
    details: {
      include: {
        produit: true,
        kit: { include: { details: true } },
      },
    },
  },
});

      return res.json(commandes);
    } catch (error: any) {
      return res.status(500).json({ message: error.message });
    }
  }
}

export default new CommandeController();