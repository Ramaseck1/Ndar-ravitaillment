// controllers/authController.ts
import { Request, Response } from "express";
import authService from "../services/authService";

class AuthController {
  async login(req: Request, res: Response) {
    try {
      const { email, password } = req.body;

      const result = await authService.login(email, password);

      return res.status(200).json(result);
    } catch (error: any) {
      return res.status(400).json({ message: error.message });
    }
  }

  async createAdmin(req: Request, res: Response) {
    try {
      const { nom, prenom, email, password } = req.body;

      if (!nom || !prenom || !email || !password) {
        return res.status(400).json({ message: "Tous les champs sont requis (nom, prenom, email, password)" });
      }

      const admin = await authService.createAdmin(nom, prenom, email, password);

      return res.status(201).json({
        message: "Compte admin créé avec succès",
        user: admin
      });
    } catch (error: any) {
      return res.status(400).json({ message: error.message });
    }
  }
}

export default new AuthController();