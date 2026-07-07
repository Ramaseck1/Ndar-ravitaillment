"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const prisma_1 = require("../prisma");
const cloudinary_1 = require("../lib/cloudinary");
class ProduitService {
    async create(data) {
        const { imageBuffer, ...rest } = data;
        const image = imageBuffer
            ? await (0, cloudinary_1.uploadImage)(imageBuffer, "produits")
            : undefined;
        return prisma_1.prisma.produit.create({ data: { ...rest, image } });
    }
    async findAll() {
        return prisma_1.prisma.produit.findMany({ include: { categorie: true } });
    }
    async findAllSorted(sortBy) {
        return prisma_1.prisma.produit.findMany({
            include: { categorie: true },
            orderBy: { prix: sortBy === "prix_asc" ? "asc" : "desc" },
        });
    }
    async meilleursVentes() {
        const ventesDirectes = await prisma_1.prisma.commandeItem.groupBy({
            by: ["produitId"],
            where: { produitId: { not: null } },
            _sum: { quantite: true },
        });
        if (!ventesDirectes.length)
            return [];
        const totaux = {};
        for (const v of ventesDirectes) {
            if (v.produitId)
                totaux[v.produitId] = v._sum.quantite ?? 0;
        }
        const produits = await prisma_1.prisma.produit.findMany({
            where: { id: { in: Object.keys(totaux).map(Number) } },
            include: { categorie: true },
        });
        return produits
            .map((p) => ({ ...p, totalVendu: totaux[p.id] ?? 0 }))
            .sort((a, b) => b.totalVendu - a.totalVendu);
    }
    async update(id, data) {
        const { imageBuffer, ...rest } = data;
        let image;
        if (imageBuffer) {
            const existing = await prisma_1.prisma.produit.findUnique({ where: { id } });
            if (existing?.image)
                await (0, cloudinary_1.deleteImage)(existing.image);
            image = await (0, cloudinary_1.uploadImage)(imageBuffer, "produits");
        }
        return prisma_1.prisma.produit.update({
            where: { id },
            data: { ...rest, ...(image !== undefined && { image }) },
        });
    }
    async delete(id) {
        const existing = await prisma_1.prisma.produit.findUnique({ where: { id } });
        if (existing?.image)
            await (0, cloudinary_1.deleteImage)(existing.image);
        return prisma_1.prisma.produit.delete({ where: { id } });
    }
}
exports.default = new ProduitService();
//# sourceMappingURL=produitService.js.map