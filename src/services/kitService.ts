import { prisma } from "../prisma";
import { uploadImage, deleteImage } from "../lib/cloudinary";
import { TypeKit } from "@prisma/client"; // ← généré automatiquement par Prisma après la migration

interface CreateKitDto {
  nom: string;
  description?: string;
  prix: number;
  categorieId: number;
  quantite: number;
  type: TypeKit; // ← "COMPLET" | "DEMI" | "QUART"
  imageBuffer?: Buffer;
}

interface AddKitDetailDto {
  kitId: number;
  nom: string;
  description?: string;
  prix: number;
  quantite: number;
  imageBuffer?: Buffer;
}

class KitService {
  async create(data: CreateKitDto) {
    const { nom, description, quantite, categorieId, type, imageBuffer } = data;

    if (!Object.values(TypeKit).includes(type)) {
      throw new Error(
        `Type de kit invalide : "${type}". Valeurs acceptées : ${Object.values(TypeKit).join(", ")}`
      );
    }

    const image = imageBuffer
      ? await uploadImage(imageBuffer, "kits")
      : undefined;
    const categorie = await prisma.categorie.findUnique({ where: { id: categorieId } });
    if (!categorie) throw new Error("Catégorie introuvable");

    return prisma.kitProduit.create({
      data: {
        nom,
        description,
        prix: 0,
        quantite,
        categorieId,
        type,
        ...(image !== undefined && { image }),
      },
      include: { details: true },
    });
  }

  private async recalculatePrix(kitId: number) {
    const details = await prisma.kitProduitDetail.findMany({ where: { kitId } });
    const prixTotal = details.reduce((sum, d) => sum + d.prix * d.quantite, 0);
    await prisma.kitProduit.update({
      where: { id: kitId },
      data: { prix: prixTotal },
    });
  }

  async findAll() {
    return prisma.kitProduit.findMany({
      include: { details: true, categorie: true },
    });
  }

  async findById(id: number) {
    const kit = await prisma.kitProduit.findUnique({
      where: { id },
      include: { details: true, categorie: true },
    });
    if (!kit) throw new Error("Kit introuvable");
    return kit;
  }

  async delete(id: number) {
    const kit = await this.findById(id);
    if (kit.image) await deleteImage(kit.image);
    for (const d of kit.details) {
      if (d.image) await deleteImage(d.image);
    }
    return prisma.kitProduit.delete({ where: { id } });
  }

  async update(id: number, data: Partial<CreateKitDto>) {
    const existing = await this.findById(id);

    if (data.categorieId !== undefined) {
      const categorie = await prisma.categorie.findUnique({ where: { id: data.categorieId } });
      if (!categorie) throw new Error("Catégorie introuvable");
    }

    if (data.type !== undefined && !Object.values(TypeKit).includes(data.type)) {
      throw new Error(
        `Type de kit invalide : "${data.type}". Valeurs acceptées : ${Object.values(TypeKit).join(", ")}`
      );
    }

    let image: string | undefined;
    if ((data as any).imageBuffer) {
      if (existing.image) await deleteImage(existing.image);
      image = await uploadImage((data as any).imageBuffer, "kits");
    }

    return prisma.kitProduit.update({
      where: { id },
      data: {
        ...(data.nom !== undefined         && { nom: data.nom }),
        ...(data.description !== undefined && { description: data.description }),
        ...(data.quantite !== undefined    && { quantite: data.quantite }),
        ...(data.categorieId !== undefined && { categorieId: data.categorieId }),
        ...(data.type !== undefined        && { type: data.type }),
        ...(image !== undefined            && { image }),
      },
      include: { details: true, categorie: true },
    });
  }

  async addDetail(data: AddKitDetailDto) {
    const { kitId, nom, description, prix, quantite, imageBuffer } = data;

    const kit = await prisma.kitProduit.findUnique({ where: { id: kitId } });
    if (!kit) throw new Error("Kit introuvable");

    const image = imageBuffer
      ? await uploadImage(imageBuffer, "kits/details")
      : undefined;

    const detail = await prisma.kitProduitDetail.create({
      data: { kitId, nom, description, prix, quantite, ...(image !== undefined && { image }) },
    });

    await this.recalculatePrix(kitId);
    return detail;
  }

  async updateDetail(detailId: number, data: Partial<Omit<AddKitDetailDto, "kitId">>) {
    const existing = await prisma.kitProduitDetail.findUnique({ where: { id: detailId } });
    if (!existing) throw new Error("Élément de composition introuvable");

    let image: string | undefined;
    if (data.imageBuffer) {
      if (existing.image) await deleteImage(existing.image);
      image = await uploadImage(data.imageBuffer, "kits/details");
    }

    const detail = await prisma.kitProduitDetail.update({
      where: { id: detailId },
      data: {
        ...(data.nom !== undefined         && { nom: data.nom }),
        ...(data.description !== undefined && { description: data.description }),
        ...(data.prix !== undefined        && { prix: data.prix }),
        ...(data.quantite !== undefined    && { quantite: data.quantite }),
        ...(image !== undefined            && { image }),
      },
    });

    await this.recalculatePrix(existing.kitId);
    return detail;
  }

  async deleteDetail(detailId: number) {
    const existing = await prisma.kitProduitDetail.findUnique({ where: { id: detailId } });
    if (!existing) throw new Error("Élément de composition introuvable");
    if (existing.image) await deleteImage(existing.image);

    const deleted = await prisma.kitProduitDetail.delete({ where: { id: detailId } });
    await this.recalculatePrix(existing.kitId);

    return deleted;
  }
}

export default new KitService();