"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const prisma_1 = require("../prisma");
const cloudinary_1 = require("../lib/cloudinary");
class CategorieService {
    async create(data) {
        const { libelle, imageBuffer } = data;
        const image = imageBuffer
            ? await (0, cloudinary_1.uploadImage)(imageBuffer, "categories")
            : undefined;
        return prisma_1.prisma.categorie.create({ data: { libelle, image } });
    }
    async findAll() {
        return prisma_1.prisma.categorie.findMany();
    }
    async update(id, data) {
        const { libelle, imageBuffer } = data;
        let image;
        if (imageBuffer) {
            const existing = await prisma_1.prisma.categorie.findUnique({ where: { id } });
            if (existing?.image)
                await (0, cloudinary_1.deleteImage)(existing.image);
            image = await (0, cloudinary_1.uploadImage)(imageBuffer, "categories");
        }
        return prisma_1.prisma.categorie.update({
            where: { id },
            data: {
                ...(libelle !== undefined && { libelle }),
                ...(image !== undefined && { image }),
            },
        });
    }
    async delete(id) {
        const produits = await prisma_1.prisma.produit.count({ where: { categorieId: id } });
        if (produits > 0) {
            throw new Error("Impossible de supprimer : des produits sont liés à cette catégorie");
        }
        const existing = await prisma_1.prisma.categorie.findUnique({ where: { id } });
        if (existing?.image)
            await (0, cloudinary_1.deleteImage)(existing.image);
        return prisma_1.prisma.categorie.delete({ where: { id } });
    }
}
exports.default = new CategorieService();
//# sourceMappingURL=categorieService.js.map