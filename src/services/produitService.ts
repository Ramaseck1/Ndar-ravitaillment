import { prisma } from "../prisma";
import { uploadImage, deleteImage } from "../lib/cloudinary";

class ProduitService {
  async create(data: any & { imageBuffer?: Buffer }) {
    const { imageBuffer, ...rest } = data;

    const image = imageBuffer
      ? await uploadImage(imageBuffer, "produits")
      : undefined;

    return prisma.produit.create({ data: { ...rest, image } });
  }

  async findAll() {
    return prisma.produit.findMany({ include: { categorie: true } });
  }

  async findAllSorted(sortBy: "prix_asc" | "prix_desc") {
    return prisma.produit.findMany({
      include: { categorie: true },
      orderBy: { prix: sortBy === "prix_asc" ? "asc" : "desc" },
    });
  }

 async meilleursVentes() {
  const ventesDirectes = await prisma.commandeItem.groupBy({
    by: ["produitId"],
    where: { produitId: { not: null } },
    _sum: { quantite: true },
  });

  if (!ventesDirectes.length) return [];

  const totaux: Record<number, number> = {};
  for (const v of ventesDirectes) {
    if (v.produitId) totaux[v.produitId] = v._sum.quantite ?? 0;
  }

  const produits = await prisma.produit.findMany({
    where: { id: { in: Object.keys(totaux).map(Number) } },
    include: { categorie: true },
  });

  return produits
    .map((p) => ({ ...p, totalVendu: totaux[p.id] ?? 0 }))
    .sort((a, b) => b.totalVendu - a.totalVendu);
}
  async update(id: number, data: any & { imageBuffer?: Buffer }) {
    const { imageBuffer, ...rest } = data;

    let image: string | undefined;
    if (imageBuffer) {
      const existing = await prisma.produit.findUnique({ where: { id } });
      if (existing?.image) await deleteImage(existing.image);
      image = await uploadImage(imageBuffer, "produits");
    }

    return prisma.produit.update({
      where: { id },
      data: { ...rest, ...(image !== undefined && { image }) },
    });
  }

  async delete(id: number) {
    const existing = await prisma.produit.findUnique({ where: { id } });
    if (existing?.image) await deleteImage(existing.image);
    return prisma.produit.delete({ where: { id } });
  }
}

export default new ProduitService();