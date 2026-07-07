// routes/authRoutes.ts
import { Router } from "express";
import AuthController from "../controllers/authController";
import { authenticate, requireRole } from "../middleware/auth";
import { Role } from "@prisma/client";

const router = Router();

router.post("/login", AuthController.login);

router.post(
  "/create-admin",
  authenticate,
  requireRole(Role.SUPERADMIN),
  AuthController.createAdmin
);

export default router;