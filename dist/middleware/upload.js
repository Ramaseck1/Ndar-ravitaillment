"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.handleUploadError = exports.uploadCategoryImage = exports.upload = void 0;
const multer_1 = __importDefault(require("multer"));
const storage = multer_1.default.memoryStorage();
const fileFilter = (req, file, cb) => {
    if (file.mimetype.startsWith('image/')) {
        cb(null, true);
    }
    else {
        cb(new Error('Seuls les fichiers image sont autorisés'));
    }
};
exports.upload = (0, multer_1.default)({
    storage: storage,
    fileFilter: fileFilter,
    limits: {
        fileSize: 10 * 1024 * 1024,
        files: 1
    }
});
const uploadCategoryImage = (req, res, next) => {
    console.log('🔄 Middleware uploadCategoryImage appelé');
    console.log('📋 Headers:', req.headers);
    console.log('📋 Content-Type:', req.headers['content-type']);
    exports.upload.single('image')(req, res, (err) => {
        if (err) {
            console.error('❌ Erreur Multer:', err);
            return next(err);
        }
        console.log('✅ Fichier traité par Multer');
        console.log('📁 Fichier reçu:', req.file);
        console.log('📝 Body après Multer:', req.body);
        next();
    });
};
exports.uploadCategoryImage = uploadCategoryImage;
const handleUploadError = (error, req, res, next) => {
    if (error instanceof multer_1.default.MulterError) {
        if (error.code === 'LIMIT_FILE_SIZE') {
            return res.status(400).json({
                success: false,
                message: 'Le fichier est trop volumineux. Taille maximale : 10MB'
            });
        }
        if (error.code === 'LIMIT_FILE_COUNT') {
            return res.status(400).json({
                success: false,
                message: 'Trop de fichiers. Maximum : 1 fichier'
            });
        }
    }
    if (error.message === 'Seuls les fichiers image sont autorisés') {
        return res.status(400).json({
            success: false,
            message: 'Type de fichier non autorisé. Seuls les images sont acceptées'
        });
    }
    next(error);
};
exports.handleUploadError = handleUploadError;
//# sourceMappingURL=upload.js.map