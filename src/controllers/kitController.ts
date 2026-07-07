import { Request, Response } from "express";
import kitService from "../services/kitService";
import multer from "multer";
import { TypeKit } from "@prisma/client";

const uploadSingleImage = multer({ storage: multer.memoryStorage() }).single("image");

class KitController {
  async create(req: Request, res: Response) {
    uploadSingleImage(req, res, async (err) => {
      if (err) return res.status(400).json({ message: err.message });

      try {
        if (!req.body.categorieId) {
          return res.status(400).json({ message: "categorieId est requis" });
        }
        if (!req.body.type) {
          return res.status(400).json({
            message: `type est requis. Valeurs acceptées : ${Object.values(TypeKit).join(", ")}`,
          });
        }

        const kit = await kitService.create({
          nom:         req.body.nom,
          description: req.body.description,
          prix:        Number(req.body.prix),
          quantite:    Number(req.body.quantite),
          categorieId: Number(req.body.categorieId),
          type:        req.body.type as TypeKit,
          imageBuffer: req.file?.buffer,
        });

        return res.status(201).json(kit);
      } catch (error: any) {
        return res.status(400).json({ message: error.message });
      }
    });
  }

  async update(req: Request, res: Response) {
    uploadSingleImage(req, res, async (err) => {
      if (err) return res.status(400).json({ message: err.message });

      try {
        const kit = await kitService.update(Number(req.params.id), {
          ...(req.body.nom !== undefined         && { nom: req.body.nom }),
          ...(req.body.description !== undefined && { description: req.body.description }),
          ...(req.body.prix !== undefined        && { prix: Number(req.body.prix) }),
          ...(req.body.quantite !== undefined    && { quantite: Number(req.body.quantite) }),
          ...(req.body.categorieId !== undefined && { categorieId: Number(req.body.categorieId) }),
          ...(req.body.type !== undefined        && { type: req.body.type as TypeKit }),
          ...(req.file?.buffer                   && { imageBuffer: req.file.buffer }),
        });

        return res.json(kit);
      } catch (error: any) {
        return res.status(400).json({ message: error.message });
      }
    });
  }

  async findAll(req: Request, res: Response) {
    try {
      const kits = await kitService.findAll();
      return res.json(kits);
    } catch (error: any) {
      return res.status(500).json({ message: error.message });
    }
  }

  async findById(req: Request, res: Response) {
    try {
      const kit = await kitService.findById(Number(req.params.id));
      return res.json(kit);
    } catch (error: any) {
      return res.status(404).json({ message: error.message });
    }
  }

  async delete(req: Request, res: Response) {
    try {
      await kitService.delete(Number(req.params.id));
      return res.json({ message: "Kit supprimé avec succès" });
    } catch (error: any) {
      return res.status(400).json({ message: error.message });
    }
  }

  async addDetail(req: Request, res: Response) {
    uploadSingleImage(req, res, async (err) => {
      if (err) return res.status(400).json({ message: err.message });
      try {
        const { kitId, nom, description, prix, quantite } = req.body;
        if (!kitId) return res.status(400).json({ message: "kitId est requis" });

        const detail = await kitService.addDetail({
          kitId: Number(kitId),
          nom, description,
          prix: Number(prix),
          quantite: Number(quantite),
          imageBuffer: req.file?.buffer,
        });

        return res.status(201).json(detail);
      } catch (error: any) {
        return res.status(400).json({ message: error.message });
      }
    });
  }

  async updateDetail(req: Request, res: Response) {
    uploadSingleImage(req, res, async (err) => {
      if (err) return res.status(400).json({ message: err.message });
      try {
        const { nom, description, prix, quantite } = req.body;
        const detail = await kitService.updateDetail(Number(req.params.id), {
          ...(nom !== undefined         && { nom }),
          ...(description !== undefined && { description }),
          ...(prix !== undefined        && { prix: Number(prix) }),
          ...(quantite !== undefined    && { quantite: Number(quantite) }),
          ...(req.file?.buffer          && { imageBuffer: req.file.buffer }),
        });
        return res.json(detail);
      } catch (error: any) {
        return res.status(400).json({ message: error.message });
      }
    });
  }

  async deleteDetail(req: Request, res: Response) {
    try {
      await kitService.deleteDetail(Number(req.params.id));
      return res.json({ message: "Élément supprimé avec succès" });
    } catch (error: any) {
      return res.status(400).json({ message: error.message });
    }
  }
}

export default new KitController();