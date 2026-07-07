import { Request, Response } from "express";
import categorieService from "../services/categorieService";

class CategorieController {

async create(req: Request, res: Response) {
  try {
    const libelle = req.body.libelle;

    if (!libelle) {
      return res.status(400).json({ message: "libelle manquant" });
    }

    // ✅ SAFE: support single + fields
    const imageBuffer =
      (req.file as Express.Multer.File)?.buffer ||
      (req.files as any)?.image?.[0]?.buffer;

    const categorie = await categorieService.create({
      libelle,
      imageBuffer,
    });

    return res.status(201).json(categorie);
  } catch (error: any) {
    return res.status(400).json({
      message: error.message,
    });
  }
}

  async findAll(
    req: Request,
    res: Response
  ) {
    const categories =
      await categorieService.findAll();

    return res.json(categories);
  }
async update(req: Request, res: Response) {
  try {
    const libelle = req.body.libelle;

    const imageBuffer =
      (req.file as Express.Multer.File)?.buffer ||
      (req.files as any)?.image?.[0]?.buffer;

    const categorie = await categorieService.update(
      Number(req.params.id),
      { libelle, imageBuffer }  // ← objet structuré, pas req.body brut
    );

    return res.json(categorie);
  } catch (error: any) {
    return res.status(400).json({ message: error.message });
  }
}
  async delete(
    req: Request,
    res: Response
  ) {
    try {

      await categorieService.delete(
        Number(req.params.id)
      );

      return res.json({
        message:
          "Catégorie supprimée",
      });

    } catch (error: any) {
      return res.status(400).json({
        message: error.message,
      });
    }
  }
}

export default new CategorieController();