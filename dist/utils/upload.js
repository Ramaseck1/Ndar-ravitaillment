"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.uploadKitWithProducts = exports.uploadProduitImage = exports.uploadKitImage = void 0;
exports.getFileUrl = getFileUrl;
exports.deleteFile = deleteFile;
const multer_1 = __importDefault(require("multer"));
const path_1 = __importDefault(require("path"));
const fs_1 = __importDefault(require("fs"));
function ensureDir(dir) {
    if (!fs_1.default.existsSync(dir))
        fs_1.default.mkdirSync(dir, { recursive: true });
}
function createStorage(folder) {
    return multer_1.default.diskStorage({
        destination: (_req, _file, cb) => {
            const dir = path_1.default.join(process.cwd(), 'uploads', folder);
            ensureDir(dir);
            cb(null, dir);
        },
        filename: (_req, file, cb) => {
            const ext = path_1.default.extname(file.originalname);
            const name = `${folder}-${Date.now()}-${Math.round(Math.random() * 1e6)}${ext}`;
            cb(null, name);
        },
    });
}
function imageFilter(_req, file, cb) {
    const allowed = /jpeg|jpg|png|webp/;
    if (allowed.test(path_1.default.extname(file.originalname).toLowerCase()) && allowed.test(file.mimetype)) {
        cb(null, true);
    }
    else {
        cb(new Error('Seules les images JPEG, PNG et WebP sont acceptées'));
    }
}
const storage = multer_1.default.memoryStorage();
const upload = (0, multer_1.default)({ storage });
exports.uploadKitImage = (0, multer_1.default)({
    storage: createStorage('kits'),
    fileFilter: imageFilter,
    limits: { fileSize: 5 * 1024 * 1024 },
}).single('image');
exports.uploadProduitImage = (0, multer_1.default)({
    storage: createStorage('products'),
    fileFilter: imageFilter,
    limits: { fileSize: 3 * 1024 * 1024 },
}).single('image');
exports.uploadKitWithProducts = (0, multer_1.default)({
    storage: multer_1.default.diskStorage({
        destination: (req, file, cb) => {
            const folder = file.fieldname === 'image' ? 'kits' : 'products';
            const dir = path_1.default.join(process.cwd(), 'uploads', folder);
            ensureDir(dir);
            cb(null, dir);
        },
        filename: (_req, file, cb) => {
            const folder = file.fieldname === 'image' ? 'kit' : 'prod';
            const ext = path_1.default.extname(file.originalname);
            cb(null, `${folder}-${Date.now()}-${Math.round(Math.random() * 1e6)}${ext}`);
        },
    }),
    fileFilter: imageFilter,
    limits: { fileSize: 5 * 1024 * 1024 },
}).fields([
    { name: 'image', maxCount: 1 },
    { name: 'detailImages', maxCount: 20 },
]);
function getFileUrl(req, relativePath) {
    const protocol = req.protocol;
    const host = req.get('host');
    return `${protocol}://${host}/${relativePath.replace(/\\/g, '/')}`;
}
function deleteFile(filePath) {
    const full = path_1.default.join(process.cwd(), filePath);
    if (fs_1.default.existsSync(full))
        fs_1.default.unlinkSync(full);
}
//# sourceMappingURL=upload.js.map