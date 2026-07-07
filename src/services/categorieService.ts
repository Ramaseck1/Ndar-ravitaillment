import { prisma } from "../prisma";
import { uploadImage, deleteImage } from "../lib/cloudinary";

class CategorieService {
  async create(data: { libelle: string; imageBuffer?: Buffer }) {
    const { libelle, imageBuffer } = data;

    const image = imageBuffer
      ? await uploadImage(imageBuffer, "categories")
      : undefined;

    return prisma.categorie.create({ data: { libelle, image } });
  }

  async findAll() {
    return prisma.categorie.findMany();
  }

  async update(
    id: number,
    data: { libelle?: string; imageBuffer?: Buffer }
  ) {
    const { libelle, imageBuffer } = data;

    let image: string | undefined;
    if (imageBuffer) {
      // Supprimer l'ancienne image si elle existe
      const existing = await prisma.categorie.findUnique({ where: { id } });
      if (existing?.image) await deleteImage(existing.image);

      image = await uploadImage(imageBuffer, "categories");
    }

    return prisma.categorie.update({
      where: { id },
      data: {
        ...(libelle !== undefined && { libelle }),
        ...(image   !== undefined && { image }),
      },
    });
  }

  async delete(id: number) {
    const produits = await prisma.produit.count({ where: { categorieId: id } });
    if (produits > 0) {
      throw new Error(
        "Impossible de supprimer : des produits sont liés à cette catégorie"
      );
    }

    const existing = await prisma.categorie.findUnique({ where: { id } });
    if (existing?.image) await deleteImage(existing.image);

    return prisma.categorie.delete({ where: { id } });
  }
}

export default new CategorieService();