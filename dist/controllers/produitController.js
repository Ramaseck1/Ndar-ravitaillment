"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const produitService_1 = __importDefault(require("../services/produitService"));
class ProduitController {
    async create(req, res) {
        try {
            const { nom, description, categorieId } = req.body;
            const prix = parseFloat(req.body.prix);
            const quantite = parseInt(req.body.quantite);
            const imageBuffer = req.file?.buffer;
            const produit = await produitService_1.default.create({
                nom,
                description,
                prix,
                quantite,
                categorieId: parseInt(categorieId),
                imageBuffer,
            });
            return res.status(201).json(produit);
        }
        catch (error) {
            return res.status(400).json({ message: error.message });
        }
    }
    async findAll(req, res) {
        const produits = await produitService_1.default.findAll();
        return res.json(produits);
    }
    async update(req, res) {
        try {
            const imageBuffer = req.file?.buffer ||
                req.files?.image?.[0]?.buffer;
            const data = { ...req.body };
            if (data.prix)
                data.prix = parseFloat(data.prix);
            if (data.quantite)
                data.quantite = parseInt(data.quantite);
            if (data.categorieId)
                data.categorieId = parseInt(data.categorieId);
            const produit = await produitService_1.default.update(Number(req.params.id), { ...data, imageBuffer });
            return res.json(produit);
        }
        catch (error) {
            return res.status(400).json({ message: error.message });
        }
    }
    async delete(req, res) {
        try {
            await produitService_1.default.delete(Number(req.params.id));
            return res.json({
                message: "Produit supprimé",
            });
        }
        catch (error) {
            return res.status(400).json({
                message: error.message,
            });
        }
    }
    async findAllSorted(req, res) {
        try {
            const sort = req.query.sort === 'prix_desc' ? 'prix_desc' : 'prix_asc';
            const produits = await produitService_1.default.findAllSorted(sort);
            return res.json(produits);
        }
        catch (error) {
            return res.status(400).json({ message: error.message });
        }
    }
    async meilleursVentes(req, res) {
        try {
            const produits = await produitService_1.default.meilleursVentes();
            return res.json(produits);
        }
        catch (error) {
            return res.status(500).json({ message: error.message });
        }
    }
}
exports.default = new ProduitController();
//# sourceMappingURL=produitController.js.map