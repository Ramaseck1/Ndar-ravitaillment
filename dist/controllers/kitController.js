"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const kitService_1 = __importDefault(require("../services/kitService"));
const multer_1 = __importDefault(require("multer"));
const client_1 = require("@prisma/client");
const uploadSingleImage = (0, multer_1.default)({ storage: multer_1.default.memoryStorage() }).single("image");
class KitController {
    async create(req, res) {
        uploadSingleImage(req, res, async (err) => {
            if (err)
                return res.status(400).json({ message: err.message });
            try {
                if (!req.body.categorieId) {
                    return res.status(400).json({ message: "categorieId est requis" });
                }
                if (!req.body.type) {
                    return res.status(400).json({
                        message: `type est requis. Valeurs acceptées : ${Object.values(client_1.TypeKit).join(", ")}`,
                    });
                }
                const kit = await kitService_1.default.create({
                    nom: req.body.nom,
                    description: req.body.description,
                    prix: Number(req.body.prix),
                    quantite: Number(req.body.quantite),
                    categorieId: Number(req.body.categorieId),
                    type: req.body.type,
                    imageBuffer: req.file?.buffer,
                });
                return res.status(201).json(kit);
            }
            catch (error) {
                return res.status(400).json({ message: error.message });
            }
        });
    }
    async update(req, res) {
        uploadSingleImage(req, res, async (err) => {
            if (err)
                return res.status(400).json({ message: err.message });
            try {
                const kit = await kitService_1.default.update(Number(req.params.id), {
                    ...(req.body.nom !== undefined && { nom: req.body.nom }),
                    ...(req.body.description !== undefined && { description: req.body.description }),
                    ...(req.body.prix !== undefined && { prix: Number(req.body.prix) }),
                    ...(req.body.quantite !== undefined && { quantite: Number(req.body.quantite) }),
                    ...(req.body.categorieId !== undefined && { categorieId: Number(req.body.categorieId) }),
                    ...(req.body.type !== undefined && { type: req.body.type }),
                    ...(req.file?.buffer && { imageBuffer: req.file.buffer }),
                });
                return res.json(kit);
            }
            catch (error) {
                return res.status(400).json({ message: error.message });
            }
        });
    }
    async findAll(req, res) {
        try {
            const kits = await kitService_1.default.findAll();
            return res.json(kits);
        }
        catch (error) {
            return res.status(500).json({ message: error.message });
        }
    }
    async findById(req, res) {
        try {
            const kit = await kitService_1.default.findById(Number(req.params.id));
            return res.json(kit);
        }
        catch (error) {
            return res.status(404).json({ message: error.message });
        }
    }
    async delete(req, res) {
        try {
            await kitService_1.default.delete(Number(req.params.id));
            return res.json({ message: "Kit supprimé avec succès" });
        }
        catch (error) {
            return res.status(400).json({ message: error.message });
        }
    }
    async addDetail(req, res) {
        uploadSingleImage(req, res, async (err) => {
            if (err)
                return res.status(400).json({ message: err.message });
            try {
                const { kitId, nom, description, prix, quantite } = req.body;
                if (!kitId)
                    return res.status(400).json({ message: "kitId est requis" });
                const detail = await kitService_1.default.addDetail({
                    kitId: Number(kitId),
                    nom, description,
                    prix: Number(prix),
                    quantite: Number(quantite),
                    imageBuffer: req.file?.buffer,
                });
                return res.status(201).json(detail);
            }
            catch (error) {
                return res.status(400).json({ message: error.message });
            }
        });
    }
    async updateDetail(req, res) {
        uploadSingleImage(req, res, async (err) => {
            if (err)
                return res.status(400).json({ message: err.message });
            try {
                const { nom, description, prix, quantite } = req.body;
                const detail = await kitService_1.default.updateDetail(Number(req.params.id), {
                    ...(nom !== undefined && { nom }),
                    ...(description !== undefined && { description }),
                    ...(prix !== undefined && { prix: Number(prix) }),
                    ...(quantite !== undefined && { quantite: Number(quantite) }),
                    ...(req.file?.buffer && { imageBuffer: req.file.buffer }),
                });
                return res.json(detail);
            }
            catch (error) {
                return res.status(400).json({ message: error.message });
            }
        });
    }
    async deleteDetail(req, res) {
        try {
            await kitService_1.default.deleteDetail(Number(req.params.id));
            return res.json({ message: "Élément supprimé avec succès" });
        }
        catch (error) {
            return res.status(400).json({ message: error.message });
        }
    }
}
exports.default = new KitController();
//# sourceMappingURL=kitController.js.map