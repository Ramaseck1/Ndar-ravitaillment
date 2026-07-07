import multer, { FileFilterCallback } from 'multer';
import path from 'path';
import fs from 'fs';
import { Request } from 'express';

function ensureDir(dir: string) {
  if (!fs.existsSync(dir)) fs.mkdirSync(dir, { recursive: true });
}

function createStorage(folder: string) {
  return multer.diskStorage({
    destination: (_req, _file, cb) => {
      const dir = path.join(process.cwd(), 'uploads', folder);
      ensureDir(dir);
      cb(null, dir);
    },
    filename: (_req, file, cb) => {
      const ext = path.extname(file.originalname);
      const name = `${folder}-${Date.now()}-${Math.round(Math.random() * 1e6)}${ext}`;
      cb(null, name);
    },
  });
}

function imageFilter(_req: Request, file: Express.Multer.File, cb: FileFilterCallback) {
  const allowed = /jpeg|jpg|png|webp/;
  if (allowed.test(path.extname(file.originalname).toLowerCase()) && allowed.test(file.mimetype)) {
    cb(null, true);
  } else {
    cb(new Error('Seules les images JPEG, PNG et WebP sont acceptées'));
  }
}
const storage = multer.memoryStorage();
const upload = multer({ storage });

 


// Upload image kit (photo de groupe)
export const uploadKitImage = multer({
  storage: createStorage('kits'),
  fileFilter: imageFilter,
  limits: { fileSize: 5 * 1024 * 1024 }, // 5MB
}).single('image');

// Upload image produit
export const uploadProduitImage = multer({
  storage: createStorage('products'),
  fileFilter: imageFilter,
  limits: { fileSize: 3 * 1024 * 1024 }, // 3MB
}).single('image');

// Upload multiple: image kit + images de chaque produit du kit
// - 'image' → photo de groupe du kit
// - 'produitImages' → photos des produits (max 20)
export const uploadKitWithProducts = multer({
  storage: multer.diskStorage({
    destination: (req, file, cb) => {
      const folder = file.fieldname === 'image' ? 'kits' : 'products';
      const dir = path.join(process.cwd(), 'uploads', folder);
      ensureDir(dir);
      cb(null, dir);
    },
    filename: (_req, file, cb) => {
      const folder = file.fieldname === 'image' ? 'kit' : 'prod';
      const ext = path.extname(file.originalname);
      cb(null, `${folder}-${Date.now()}-${Math.round(Math.random() * 1e6)}${ext}`);
    },
  }),
  fileFilter: imageFilter,
  limits: { fileSize: 5 * 1024 * 1024 },
}).fields([
  { name: 'image', maxCount: 1 },       // photo de groupe du kit
  { name: 'detailImages', maxCount: 20 }, // photos des produits
]);

export function getFileUrl(req: Request, relativePath: string): string {
  const protocol = req.protocol;
  const host = req.get('host');
  return `${protocol}://${host}/${relativePath.replace(/\\/g, '/')}`;
}

export function deleteFile(filePath: string) {
  const full = path.join(process.cwd(), filePath);
  if (fs.existsSync(full)) fs.unlinkSync(full);
}
