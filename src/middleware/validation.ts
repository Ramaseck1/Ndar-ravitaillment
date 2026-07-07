// middleware/validation.ts - Alternative plus simple
import { Request, Response, NextFunction } from 'express';

/**
 * Middleware de validation d'email
 */
export const validateEmailMiddleware = (req: Request, res: Response, next: NextFunction): void => {
  const { email } = req.body;

  if (!email) {
    res.status(400).json({
      success: false,
      message: 'Email requis',
      errors: ['L\'adresse email est obligatoire']
    });
    return;
  }

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  
  if (!emailRegex.test(email)) {
    res.status(400).json({
      success: false,
      message: 'Email invalide',
      errors: ['Veuillez fournir une adresse email valide']
    });
    return;
  }

  // Vérifications supplémentaires
  if (email.length > 254) {
    res.status(400).json({
      success: false,
      message: 'Email trop long',
      errors: ['L\'adresse email ne peut pas dépasser 254 caractères']
    });
    return;
  }

  if (email.includes('..') || email.startsWith('.') || email.endsWith('.')) {
    res.status(400).json({
      success: false,
      message: 'Email invalide',
      errors: ['L\'adresse email contient des caractères invalides']
    });
    return;
  }

  next();
};

/**
 * Middleware de validation de mot de passe
 */
export const validatePasswordMiddleware = (req: Request, res: Response, next: NextFunction): void => {
  const { password } = req.body;

  if (!password) {
    res.status(400).json({
      success: false,
      message: 'Mot de passe requis',
      errors: ['Le mot de passe est obligatoire']
    });
    return;
  }

  const errors: string[] = [];

  // Longueur minimale
  if (password.length < 8) {
    errors.push('Le mot de passe doit contenir au moins 8 caractères');
  }

  // Lettres majuscules
  if (!/[A-Z]/.test(password)) {
    errors.push('Le mot de passe doit contenir au moins une lettre majuscule');
  }

  // Lettres minuscules
  if (!/[a-z]/.test(password)) {
    errors.push('Le mot de passe doit contenir au moins une lettre minuscule');
  }

  // Chiffres
  if (!/\d/.test(password)) {
    errors.push('Le mot de passe doit contenir au moins un chiffre');
  }

  // Caractères spéciaux
  if (!/[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]/.test(password)) {
    errors.push('Le mot de passe doit contenir au moins un caractère spécial');
  }

  if (errors.length > 0) {
    res.status(400).json({
      success: false,
      message: 'Mot de passe invalide',
      errors
    });
    return;
  }

  next();
};

/**
 * Middleware de validation de téléphone
 */
export const validatePhoneMiddleware = (req: Request, res: Response, next: NextFunction): void => {
  const { telephone } = req.body;

  if (!telephone) {
    res.status(400).json({
      success: false,
      message: 'Téléphone requis',
      errors: ['Le numéro de téléphone est obligatoire']
    });
    return;
  }

  // Supprimer les espaces et caractères spéciaux
  const cleanPhone = telephone.replace(/[\s\-\(\)]/g, '');
  
  // Vérifier que c'est un numéro valide
  if (!/^\+?[1-9]\d{7,14}$/.test(cleanPhone)) {
    res.status(400).json({
      success: false,
      message: 'Numéro de téléphone invalide',
      errors: ['Le numéro de téléphone doit contenir entre 8 et 15 chiffres']
    });
    return;
  }

  next();
};

/**
 * Middleware combiné pour l'inscription
 */
export const validateRegistrationMiddleware = (req: Request, res: Response, next: NextFunction): void => {
  const { nom, prenom, email, password, telephone } = req.body;

  // Validation des champs requis
  const requiredFields = { nom, prenom, email, password, telephone };
  const missingFields = Object.entries(requiredFields)
    .filter(([_, value]) => !value)
    .map(([key, _]) => key);

  if (missingFields.length > 0) {
    res.status(400).json({
      success: false,
      message: 'Champs requis manquants',
      errors: [`Les champs suivants sont obligatoires: ${missingFields.join(', ')}`]
    });
    return;
  }

  // Validation de la longueur des noms
  if (nom.length < 2 || prenom.length < 2) {
    res.status(400).json({
      success: false,
      message: 'Noms trop courts',
      errors: ['Le nom et le prénom doivent contenir au moins 2 caractères']
    });
    return;
  }

  if (nom.length > 50 || prenom.length > 50) {
    res.status(400).json({
      success: false,
      message: 'Noms trop longs',
      errors: ['Le nom et le prénom ne peuvent pas dépasser 50 caractères']
    });
    return;
  }

  // Validation email en ligne
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email)) {
    res.status(400).json({
      success: false,
      message: 'Email invalide',
      errors: ['Veuillez fournir une adresse email valide']
    });
    return;
  }

  // Validation mot de passe en ligne
  const passwordErrors: string[] = [];
  if (password.length < 8) passwordErrors.push('Au moins 8 caractères');
  if (!/[A-Z]/.test(password)) passwordErrors.push('Une lettre majuscule');
  if (!/[a-z]/.test(password)) passwordErrors.push('Une lettre minuscule');
  if (!/\d/.test(password)) passwordErrors.push('Un chiffre');
  if (!/[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]/.test(password)) passwordErrors.push('Un caractère spécial');

  if (passwordErrors.length > 0) {
    res.status(400).json({
      success: false,
      message: 'Mot de passe invalide',
      errors: [`Le mot de passe doit contenir: ${passwordErrors.join(', ')}`]
    });
    return;
  }

  // Validation téléphone en ligne
  const cleanPhone = telephone.replace(/[\s\-\(\)]/g, '');
  if (!/^\+?[1-9]\d{7,14}$/.test(cleanPhone)) {
    res.status(400).json({
      success: false,
      message: 'Téléphone invalide',
      errors: ['Le numéro doit contenir entre 8 et 15 chiffres']
    });
    return;
  }

  next();
};