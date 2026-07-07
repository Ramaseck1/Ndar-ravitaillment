import multer from 'multer';

// Configuration de Multer avec stockage en mémoire (pour Cloudinary)
const storage = multer.memoryStorage();

// Filtre pour les types de fichiers autorisés
const fileFilter = (req: any, file: Express.Multer.File, cb: multer.FileFilterCallback) => {
  // Vérifier le type MIME
  if (file.mimetype.startsWith('image/')) {
    cb(null, true);
  } else {
    cb(new Error('Seuls les fichiers image sont autorisés'));
  }
};

// Configuration de Multer
export const upload = multer({
  storage: storage, // Stockage en mémoire au lieu de disque
  fileFilter: fileFilter,
  limits: {
    fileSize: 10 * 1024 * 1024, // 10MB max
    files: 1 // 1 fichier max
  }
});

// Middleware spécifique pour l'upload de catégories
export const uploadCategoryImage = (req: any, res: any, next: any) => {
  console.log('🔄 Middleware uploadCategoryImage appelé');
  console.log('📋 Headers:', req.headers);
  console.log('📋 Content-Type:', req.headers['content-type']);
  
  upload.single('image')(req, res, (err: any) => {
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

// Middleware pour gérer les erreurs d'upload
export const handleUploadError = (error: any, req: any, res: any, next: any) => {
  if (error instanceof multer.MulterError) {
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
 