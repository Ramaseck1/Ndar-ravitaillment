"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CloudinaryUtils = void 0;
const cloudinary_1 = __importDefault(require("../config/cloudinary"));
class CloudinaryUtils {
    static async deleteImage(imageUrl) {
        if (!imageUrl || !imageUrl.includes('cloudinary.com')) {
            return;
        }
        try {
            const urlParts = imageUrl.split('/');
            const filenameWithExtension = urlParts[urlParts.length - 1];
            const publicId = filenameWithExtension.split('.')[0];
            const folderIndex = urlParts.findIndex(part => part === 'upload') + 2;
            const folderPath = urlParts.slice(folderIndex, -1).join('/');
            const fullPublicId = folderPath ? `${folderPath}/${publicId}` : publicId;
            await cloudinary_1.default.uploader.destroy(fullPublicId);
        }
        catch (error) {
            console.error('Erreur lors de la suppression de l\'image Cloudinary:', error);
        }
    }
    static async uploadImage(buffer, folder = 'produits') {
        return new Promise((resolve, reject) => {
            const stream = cloudinary_1.default.uploader.upload_stream({ folder }, (error, result) => {
                if (error)
                    return reject(error);
                resolve(result?.secure_url || '');
            });
            stream.end(buffer);
        });
    }
    static isCloudinaryUrl(url) {
        return Boolean(url && url.includes('cloudinary.com') && url.includes('upload'));
    }
}
exports.CloudinaryUtils = CloudinaryUtils;
//# sourceMappingURL=cloudinary.js.map