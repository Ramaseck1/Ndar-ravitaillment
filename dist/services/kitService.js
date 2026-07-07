"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const prisma_1 = require("../prisma");
const cloudinary_1 = require("../lib/cloudinary");
const client_1 = require("@prisma/client");
class KitService {
    async create(data) {
        const { nom, description, quantite, categorieId, type, imageBuffer } = data;
        if (!Object.values(client_1.TypeKit).includes(type)) {
            throw new Error(`Type de kit invalide : "${type}". Valeurs acceptées : ${Object.values(client_1.TypeKit).join(", ")}`);
        }
        const image = imageBuffer
            ? await (0, cloudinary_1.uploadImage)(imageBuffer, "kits")
            : undefined;
        const categorie = await prisma_1.prisma.categorie.findUnique({ where: { id: categorieId } });
        if (!categorie)
            throw new Error("Catégorie introuvable");
        return prisma_1.prisma.kitProduit.create({
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
    async recalculatePrix(kitId) {
        const details = await prisma_1.prisma.kitProduitDetail.findMany({ where: { kitId } });
        const prixTotal = details.reduce((sum, d) => sum + d.prix * d.quantite, 0);
        await prisma_1.prisma.kitProduit.update({
            where: { id: kitId },
            data: { prix: prixTotal },
        });
    }
    async findAll() {
        return prisma_1.prisma.kitProduit.findMany({
            include: { details: true, categorie: true },
        });
    }
    async findById(id) {
        const kit = await prisma_1.prisma.kitProduit.findUnique({
            where: { id },
            include: { details: true, categorie: true },
        });
        if (!kit)
            throw new Error("Kit introuvable");
        return kit;
    }
    async delete(id) {
        const kit = await this.findById(id);
        if (kit.image)
            await (0, cloudinary_1.deleteImage)(kit.image);
        for (const d of kit.details) {
            if (d.image)
                await (0, cloudinary_1.deleteImage)(d.image);
        }
        return prisma_1.prisma.kitProduit.delete({ where: { id } });
    }
    async update(id, data) {
        const existing = await this.findById(id);
        if (data.categorieId !== undefined) {
            const categorie = await prisma_1.prisma.categorie.findUnique({ where: { id: data.categorieId } });
            if (!categorie)
                throw new Error("Catégorie introuvable");
        }
        if (data.type !== undefined && !Object.values(client_1.TypeKit).includes(data.type)) {
            throw new Error(`Type de kit invalide : "${data.type}". Valeurs acceptées : ${Object.values(client_1.TypeKit).join(", ")}`);
        }
        let image;
        if (data.imageBuffer) {
            if (existing.image)
                await (0, cloudinary_1.deleteImage)(existing.image);
            image = await (0, cloudinary_1.uploadImage)(data.imageBuffer, "kits");
        }
        return prisma_1.prisma.kitProduit.update({
            where: { id },
            data: {
                ...(data.nom !== undefined && { nom: data.nom }),
                ...(data.description !== undefined && { description: data.description }),
                ...(data.quantite !== undefined && { quantite: data.quantite }),
                ...(data.categorieId !== undefined && { categorieId: data.categorieId }),
                ...(data.type !== undefined && { type: data.type }),
                ...(image !== undefined && { image }),
            },
            include: { details: true, categorie: true },
        });
    }
    async addDetail(data) {
        const { kitId, nom, description, prix, quantite, imageBuffer } = data;
        const kit = await prisma_1.prisma.kitProduit.findUnique({ where: { id: kitId } });
        if (!kit)
            throw new Error("Kit introuvable");
        const image = imageBuffer
            ? await (0, cloudinary_1.uploadImage)(imageBuffer, "kits/details")
            : undefined;
        const detail = await prisma_1.prisma.kitProduitDetail.create({
            data: { kitId, nom, description, prix, quantite, ...(image !== undefined && { image }) },
        });
        await this.recalculatePrix(kitId);
        return detail;
    }
    async updateDetail(detailId, data) {
        const existing = await prisma_1.prisma.kitProduitDetail.findUnique({ where: { id: detailId } });
        if (!existing)
            throw new Error("Élément de composition introuvable");
        let image;
        if (data.imageBuffer) {
            if (existing.image)
                await (0, cloudinary_1.deleteImage)(existing.image);
            image = await (0, cloudinary_1.uploadImage)(data.imageBuffer, "kits/details");
        }
        const detail = await prisma_1.prisma.kitProduitDetail.update({
            where: { id: detailId },
            data: {
                ...(data.nom !== undefined && { nom: data.nom }),
                ...(data.description !== undefined && { description: data.description }),
                ...(data.prix !== undefined && { prix: data.prix }),
                ...(data.quantite !== undefined && { quantite: data.quantite }),
                ...(image !== undefined && { image }),
            },
        });
        await this.recalculatePrix(existing.kitId);
        return detail;
    }
    async deleteDetail(detailId) {
        const existing = await prisma_1.prisma.kitProduitDetail.findUnique({ where: { id: detailId } });
        if (!existing)
            throw new Error("Élément de composition introuvable");
        if (existing.image)
            await (0, cloudinary_1.deleteImage)(existing.image);
        const deleted = await prisma_1.prisma.kitProduitDetail.delete({ where: { id: detailId } });
        await this.recalculatePrix(existing.kitId);
        return deleted;
    }
}
exports.default = new KitService();
//# sourceMappingURL=kitService.js.map