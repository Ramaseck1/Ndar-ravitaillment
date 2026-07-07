"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const categorieService_1 = __importDefault(require("../services/categorieService"));
class CategorieController {
    async create(req, res) {
        try {
            const libelle = req.body.libelle;
            if (!libelle) {
                return res.status(400).json({ message: "libelle manquant" });
            }
            const imageBuffer = req.file?.buffer ||
                req.files?.image?.[0]?.buffer;
            const categorie = await categorieService_1.default.create({
                libelle,
                imageBuffer,
            });
            return res.status(201).json(categorie);
        }
        catch (error) {
            return res.status(400).json({
                message: error.message,
            });
        }
    }
    async findAll(req, res) {
        const categories = await categorieService_1.default.findAll();
        return res.json(categories);
    }
    async update(req, res) {
        try {
            const libelle = req.body.libelle;
            const imageBuffer = req.file?.buffer ||
                req.files?.image?.[0]?.buffer;
            const categorie = await categorieService_1.default.update(Number(req.params.id), { libelle, imageBuffer });
            return res.json(categorie);
        }
        catch (error) {
            return res.status(400).json({ message: error.message });
        }
    }
    async delete(req, res) {
        try {
            await categorieService_1.default.delete(Number(req.params.id));
            return res.json({
                message: "Catégorie supprimée",
            });
        }
        catch (error) {
            return res.status(400).json({
                message: error.message,
            });
        }
    }
}
exports.default = new CategorieController();
//# sourceMappingURL=categorieController.js.map