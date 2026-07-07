import { Router } from "express";

import multer from "multer";
const upload = multer({ storage: multer.memoryStorage() });

import CategorieController
from "../controllers/categorieController";

import {
  authenticate,
} from "../middleware/auth";

const router = Router();

router.post(
  "/",
  authenticate,
   upload.single("image"),
  CategorieController.create
);

router.get(
  "/",
  CategorieController.findAll
);

router.put(
  "/:id",
  authenticate,
  upload.single("image"), 
  CategorieController.update
);

router.delete(
  "/:id",
  authenticate,
  CategorieController.delete
);

export default router;