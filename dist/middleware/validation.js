"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.validateRegistrationMiddleware = exports.validatePhoneMiddleware = exports.validatePasswordMiddleware = exports.validateEmailMiddleware = void 0;
const validateEmailMiddleware = (req, res, next) => {
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
exports.validateEmailMiddleware = validateEmailMiddleware;
const validatePasswordMiddleware = (req, res, next) => {
    const { password } = req.body;
    if (!password) {
        res.status(400).json({
            success: false,
            message: 'Mot de passe requis',
            errors: ['Le mot de passe est obligatoire']
        });
        return;
    }
    const errors = [];
    if (password.length < 8) {
        errors.push('Le mot de passe doit contenir au moins 8 caractères');
    }
    if (!/[A-Z]/.test(password)) {
        errors.push('Le mot de passe doit contenir au moins une lettre majuscule');
    }
    if (!/[a-z]/.test(password)) {
        errors.push('Le mot de passe doit contenir au moins une lettre minuscule');
    }
    if (!/\d/.test(password)) {
        errors.push('Le mot de passe doit contenir au moins un chiffre');
    }
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
exports.validatePasswordMiddleware = validatePasswordMiddleware;
const validatePhoneMiddleware = (req, res, next) => {
    const { telephone } = req.body;
    if (!telephone) {
        res.status(400).json({
            success: false,
            message: 'Téléphone requis',
            errors: ['Le numéro de téléphone est obligatoire']
        });
        return;
    }
    const cleanPhone = telephone.replace(/[\s\-\(\)]/g, '');
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
exports.validatePhoneMiddleware = validatePhoneMiddleware;
const validateRegistrationMiddleware = (req, res, next) => {
    const { nom, prenom, email, password, telephone } = req.body;
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
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
        res.status(400).json({
            success: false,
            message: 'Email invalide',
            errors: ['Veuillez fournir une adresse email valide']
        });
        return;
    }
    const passwordErrors = [];
    if (password.length < 8)
        passwordErrors.push('Au moins 8 caractères');
    if (!/[A-Z]/.test(password))
        passwordErrors.push('Une lettre majuscule');
    if (!/[a-z]/.test(password))
        passwordErrors.push('Une lettre minuscule');
    if (!/\d/.test(password))
        passwordErrors.push('Un chiffre');
    if (!/[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]/.test(password))
        passwordErrors.push('Un caractère spécial');
    if (passwordErrors.length > 0) {
        res.status(400).json({
            success: false,
            message: 'Mot de passe invalide',
            errors: [`Le mot de passe doit contenir: ${passwordErrors.join(', ')}`]
        });
        return;
    }
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
exports.validateRegistrationMiddleware = validateRegistrationMiddleware;
//# sourceMappingURL=validation.js.map