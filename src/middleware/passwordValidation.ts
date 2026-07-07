// 1. middleware/passwordValidation.ts - Ajoutez l'export par défaut
import { Request, Response, NextFunction } from 'express';

export interface PasswordValidationResult {
  isValid: boolean;
  score: number;
  strength: 'très faible' | 'faible' | 'moyen' | 'fort' | 'très fort';
  errors: string[];
  warnings: string[];
}

export class PasswordValidationMiddleware {
  /**
   * Valide un mot de passe selon des critères de sécurité robustes
   */
  static validatePassword(password: string): PasswordValidationResult {
    const errors: string[] = [];
    const warnings: string[] = [];
    let score = 0;

    // Vérifications de base
    if (!password) {
      return {
        isValid: false,
        score: 0,
        strength: 'très faible',
        errors: ['Le mot de passe est requis'],
        warnings: []
      };
    }

    // Longueur minimale
    if (password.length < 8) {
      errors.push('Le mot de passe doit contenir au moins 8 caractères');
    } else if (password.length >= 12) {
      score += 20;
    } else if (password.length >= 10) {
      score += 15;
    } else {
      score += 10;
    }

    // Lettres majuscules
    if (!/[A-Z]/.test(password)) {
      errors.push('Le mot de passe doit contenir au moins une lettre majuscule');
    } else {
      score += 10;
    }

    // Lettres minuscules
    if (!/[a-z]/.test(password)) {
      errors.push('Le mot de passe doit contenir au moins une lettre minuscule');
    } else {
      score += 10;
    }

    // Chiffres
    if (!/\d/.test(password)) {
      errors.push('Le mot de passe doit contenir au moins un chiffre');
    } else {
      score += 10;
    }

    // Caractères spéciaux
    if (!/[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]/.test(password)) {
      errors.push('Le mot de passe doit contenir au moins un caractère spécial (!@#$%^&*...)');
    } else {
      score += 15;
    }

    // Vérifications avancées
    this.checkCommonPatterns(password, errors, warnings);
    this.checkCharacterVariety(password, score, warnings);

    // Calcul du score final
    score = Math.min(100, Math.max(0, score));

    // Détermination de la force
    let strength: 'très faible' | 'faible' | 'moyen' | 'fort' | 'très fort';
    if (score < 30) strength = 'très faible';
    else if (score < 50) strength = 'faible';
    else if (score < 70) strength = 'moyen';
    else if (score < 90) strength = 'fort';
    else strength = 'très fort';

    return {
      isValid: errors.length === 0,
      score,
      strength,
      errors,
      warnings
    };
  }

  /**
   * Vérifie les motifs communs à éviter
   */
  private static checkCommonPatterns(password: string, errors: string[], warnings: string[]): void {
    // Séquences communes
    const commonSequences = ['123', 'abc', 'qwe', 'asd', 'zxc', 'password', 'admin', 'user'];
    const lowerPassword = password.toLowerCase();
    
    for (const sequence of commonSequences) {
      if (lowerPassword.includes(sequence)) {
        warnings.push(`Évitez les séquences communes comme "${sequence}"`);
        break;
      }
    }

    // Répétitions
    if (/(.)\1{2,}/.test(password)) {
      warnings.push('Évitez les caractères répétés plus de 2 fois');
    }

    // Motifs de clavier
    const keyboardPatterns = ['qwerty', 'azerty', '123456', '654321'];
    for (const pattern of keyboardPatterns) {
      if (lowerPassword.includes(pattern)) {
        errors.push(`Évitez les motifs de clavier comme "${pattern}"`);
        break;
      }
    }
  }

  /**
   * Vérifie la variété des caractères
   */
  private static checkCharacterVariety(password: string, score: number, warnings: string[]): void {
    const uniqueChars = new Set(password).size;
    const totalChars = password.length;
    const varietyRatio = uniqueChars / totalChars;

    if (varietyRatio < 0.5) {
      warnings.push('Utilisez une plus grande variété de caractères');
    } else if (varietyRatio > 0.8) {
      score += 5; // Bonus pour la variété
    }
  }

  /**
   * Middleware pour valider les mots de passe dans les requêtes
   */
  static validatePasswordMiddleware = (req: Request, res: Response, next: NextFunction): void => {
    const { password, newPassword } = req.body;
    const passwordToValidate = password || newPassword;

    if (passwordToValidate) {
      const validation = PasswordValidationMiddleware.validatePassword(passwordToValidate);
      
      if (!validation.isValid) {
        res.status(400).json({
          success: false,
          message: 'Mot de passe invalide',
          errors: validation.errors,
          warnings: validation.warnings,
          strength: validation.strength,
          score: validation.score
        });
        return;
      }

      // Ajouter les informations de validation à la requête
      (req as any).passwordValidation = validation;
    }

    next();
  };

  /**
   * Middleware pour valider les numéros de téléphone
   */
  static validatePhoneMiddleware = (req: Request, res: Response, next: NextFunction): void => {
    const { telephone } = req.body;

    if (telephone) {
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
    }

    next();
  };

  /**
   * Middleware pour valider les emails
   */
  static validateEmailMiddleware = (req: Request, res: Response, next: NextFunction): void => {
    const { email } = req.body;

    if (email) {
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
    }

    next();
  };

  /**
   * Middleware combiné pour la validation d'inscription
   */
  static validateRegistrationMiddleware = (req: Request, res: Response, next: NextFunction): void => {
    const { nom, prenom, email, password, telephone } = req.body;

    // Validation des champs requis
    if (!nom || !prenom || !email || !password || !telephone) {
      res.status(400).json({
        success: false,
        message: 'Tous les champs sont requis',
        errors: ['Veuillez remplir tous les champs obligatoires']
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

    // Validation de la longueur des noms (max)
    if (nom.length > 50 || prenom.length > 50) {
      res.status(400).json({
        success: false,
        message: 'Noms trop longs',
        errors: ['Le nom et le prénom ne peuvent pas dépasser 50 caractères']
      });
      return;
    }

    // Validation email
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      res.status(400).json({
        success: false,
        message: 'Email invalide',
        errors: ['Veuillez fournir une adresse email valide']
      });
      return;
    }

    // Validation mot de passe
    const passwordValidation = PasswordValidationMiddleware.validatePassword(password);
    if (!passwordValidation.isValid) {
      res.status(400).json({
        success: false,
        message: 'Mot de passe invalide',
        errors: passwordValidation.errors,
        warnings: passwordValidation.warnings,
        strength: passwordValidation.strength,
        score: passwordValidation.score
      });
      return;
    }

    // Validation téléphone
    const cleanPhone = telephone.replace(/[\s\-\(\)]/g, '');
    if (!/^\+?[1-9]\d{7,14}$/.test(cleanPhone)) {
      res.status(400).json({
        success: false,
        message: 'Numéro de téléphone invalide',
        errors: ['Le numéro de téléphone doit contenir entre 8 et 15 chiffres']
      });
      return;
    }

    // Ajouter les informations de validation à la requête
    (req as any).passwordValidation = passwordValidation;

    next();
  };
}

// IMPORTANT: Export par défaut ET nommé
export default PasswordValidationMiddleware;