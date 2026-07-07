import { Request, Response } from "express";
import produitService from "../services/produitService";

class ProduitController {

 async create(req: Request, res: Response) {
  try {
    const { nom, description, categorieId } = req.body;
    const prix = parseFloat(req.body.prix);        // ← conversion String → Float
    const quantite = parseInt(req.body.quantite);  // ← conversion String → Int
    const imageBuffer = (req.file as Express.Multer.File)?.buffer;

    const produit = await produitService.create({
      nom,
      description,
      prix,
      quantite,
      categorieId: parseInt(categorieId),  // ← aussi un String depuis multipart
      imageBuffer,
    });

    return res.status(201).json(produit);
  } catch (error: any) {
    return res.status(400).json({ message: error.message });
  }
}

  async findAll(
    req: Request,
    res: Response
  ) {
    const produits =
      await produitService.findAll();

    return res.json(produits);
  }

async update(req: Request, res: Response) {
  try {
    const imageBuffer =
      (req.file as Express.Multer.File)?.buffer ||
      (req.files as any)?.image?.[0]?.buffer;

    const data: any = { ...req.body };
    if (data.prix)       data.prix       = parseFloat(data.prix);
    if (data.quantite)   data.quantite   = parseInt(data.quantite);
    if (data.categorieId) data.categorieId = parseInt(data.categorieId);

    const produit = await produitService.update(
      Number(req.params.id),
      { ...data, imageBuffer }
    );

    return res.json(produit);
  } catch (error: any) {
    return res.status(400).json({ message: error.message });
  }
}

  async delete(
    req: Request,
    res: Response
  ) {
    try {

      await produitService.delete(
        Number(req.params.id)
      );

      return res.json({
        message:
          "Produit supprimé",
      });

    } catch (error: any) {
      return res.status(400).json({
        message: error.message,
      });
    }
  }


  async findAllSorted(req: Request, res: Response) {
  try {
    const sort = req.query.sort === 'prix_desc' ? 'prix_desc' : 'prix_asc';
    const produits = await produitService.findAllSorted(sort);
    return res.json(produits);
  } catch (error: any) {
    return res.status(400).json({ message: error.message });
  }
}

async meilleursVentes(req: Request, res: Response) {
  try {
    const produits = await produitService.meilleursVentes();
    return res.json(produits);
  } catch (error: any) {
    return res.status(500).json({ message: error.message });
  }
}
}

export default new ProduitController();