import { v2 as cloudinary } from "cloudinary";

cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key:    process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});

/**
 * Upload un fichier (Buffer ou chemin local) vers Cloudinary.
 * @param file   - Buffer de l'image
 * @param folder - Dossier Cloudinary cible (ex: "categories", "produits", "kits")
 * @returns L'URL sécurisée de l'image uploadée
 */
export async function uploadImage(
  file: Buffer,
  folder: string
): Promise<string> {
  return new Promise((resolve, reject) => {
    const stream = cloudinary.uploader.upload_stream(
      { folder, resource_type: "image" },
      (error, result) => {
        if (error || !result) return reject(error ?? new Error("Upload échoué"));
        resolve(result.secure_url);
      }
    );
    stream.end(file);
  });
}

/**
 * Supprime une image Cloudinary à partir de son URL.
 */
export async function deleteImage(url: string): Promise<void> {
  // Extrait le public_id depuis l'URL (ex: "kits/abc123")
  const match = url.match(/\/upload\/(?:v\d+\/)?(.+)\.[a-z]+$/i);
  if (!match) return;
  await cloudinary.uploader.destroy(match[1]);
}