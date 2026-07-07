"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.uploadImage = uploadImage;
exports.deleteImage = deleteImage;
const cloudinary_1 = require("cloudinary");
cloudinary_1.v2.config({
    cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
    api_key: process.env.CLOUDINARY_API_KEY,
    api_secret: process.env.CLOUDINARY_API_SECRET,
});
async function uploadImage(file, folder) {
    return new Promise((resolve, reject) => {
        const stream = cloudinary_1.v2.uploader.upload_stream({ folder, resource_type: "image" }, (error, result) => {
            if (error || !result)
                return reject(error ?? new Error("Upload échoué"));
            resolve(result.secure_url);
        });
        stream.end(file);
    });
}
async function deleteImage(url) {
    const match = url.match(/\/upload\/(?:v\d+\/)?(.+)\.[a-z]+$/i);
    if (!match)
        return;
    await cloudinary_1.v2.uploader.destroy(match[1]);
}
//# sourceMappingURL=cloudinary.js.map