import cloudinary from '../config/cloudinary';

export class CloudinaryUtils {
  /**
   * Supprime une image de Cloudinary à partir de son URL
   * @param imageUrl - L'URL de l'image à supprimer
   */
  static async deleteImage(imageUrl: string): Promise<void> {
    if (!imageUrl || !imageUrl.includes('cloudinary.com')) {
      return; // Pas une URL Cloudinary, on ignore
    }

    try {
      // Extraire le public_id de l'URL Cloudinary
      const urlParts = imageUrl.split('/');
      const filenameWithExtension = urlParts[urlParts.length - 1];
      const publicId = filenameWithExtension.split('.')[0];
      
      // Construire le chemin complet du dossier
      const folderIndex = urlParts.findIndex(part => part === 'upload') + 2;
      const folderPath = urlParts.slice(folderIndex, -1).join('/');
      const fullPublicId = folderPath ? `${folderPath}/${publicId}` : publicId;

      // Supprimer l'image de Cloudinary
      await cloudinary.uploader.destroy(fullPublicId);
    } catch (error) {
      console.error('Erreur lors de la suppression de l\'image Cloudinary:', error);
      // On ne fait pas échouer l'opération principale si la suppression échoue
    }
  }

  /**
   * Upload une image sur Cloudinary
   * @param buffer - Le buffer de l'image
   * @param folder - Le dossier de destination (optionnel)
   * @returns Promise<string> - L'URL de l'image uploadée
   */
  static async uploadImage(buffer: Buffer, folder: string = 'produits'): Promise<string> {
    return new Promise<string>((resolve, reject) => {
      const stream = cloudinary.uploader.upload_stream(
        { folder },
        (error, result) => {
          if (error) return reject(error);
          resolve(result?.secure_url || '');
        }
      );
      stream.end(buffer);
    });
  }

  /**
   * Vérifie si une URL est une URL Cloudinary valide
   * @param url - L'URL à vérifier
   * @returns boolean
   */
  static isCloudinaryUrl(url: string): boolean {
    return Boolean(url && url.includes('cloudinary.com') && url.includes('upload'));
  }
} 