"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PasswordValidationMiddleware = void 0;
class PasswordValidationMiddleware {
    static validatePassword(password) {
        const errors = [];
        const warnings = [];
        let score = 0;
        if (!password) {
            return {
                isValid: false,
                score: 0,
                strength: 'très faible',
                errors: ['Le mot de passe est requis'],
                warnings: []
            };
        }
        if (password.length < 8) {
            errors.push('Le mot de passe doit contenir au moins 8 caractères');
        }
        else if (password.length >= 12) {
            score += 20;
        }
        else if (password.length >= 10) {
            score += 15;
        }
        else {
            score += 10;
        }
        if (!/[A-Z]/.test(password)) {
            errors.push('Le mot de passe doit contenir au moins une lettre majuscule');
        }
        else {
            score += 10;
        }
        if (!/[a-z]/.test(password)) {
            errors.push('Le mot de passe doit contenir au moins une lettre minuscule');
        }
        else {
            score += 10;
        }
        if (!/\d/.test(password)) {
            errors.push('Le mot de passe doit contenir au moins un chiffre');
        }
        else {
            score += 10;
        }
        if (!/[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]/.test(password)) {
            errors.push('Le mot de passe doit contenir au moins un caractère spécial (!@#$%^&*...)');
        }
        else {
            score += 15;
        }
        this.checkCommonPatterns(password, errors, warnings);
        this.checkCharacterVariety(password, score, warnings);
        score = Math.min(100, Math.max(0, score));
        let strength;
        if (score < 30)
            strength = 'très faible';
        else if (score < 50)
            strength = 'faible';
        else if (score < 70)
            strength = 'moyen';
        else if (score < 90)
            strength = 'fort';
        else
            strength = 'très fort';
        return {
            isValid: errors.length === 0,
            score,
            strength,
            errors,
            warnings
        };
    }
    static checkCommonPatterns(password, errors, warnings) {
        const commonSequences = ['123', 'abc', 'qwe', 'asd', 'zxc', 'password', 'admin', 'user'];
        const lowerPassword = password.toLowerCase();
        for (const sequence of commonSequences) {
            if (lowerPassword.includes(sequence)) {
                warnings.push(`Évitez les séquences communes comme "${sequence}"`);
                break;
            }
        }
        if (/(.)\1{2,}/.test(password)) {
            warnings.push('Évitez les caractères répétés plus de 2 fois');
        }
        const keyboardPatterns = ['qwerty', 'azerty', '123456', '654321'];
        for (const pattern of keyboardPatterns) {
            if (lowerPassword.includes(pattern)) {
                errors.push(`Évitez les motifs de clavier comme "${pattern}"`);
                break;
            }
        }
    }
    static checkCharacterVariety(password, score, warnings) {
        const uniqueChars = new Set(password).size;
        const totalChars = password.length;
        const varietyRatio = uniqueChars / totalChars;
        if (varietyRatio < 0.5) {
            warnings.push('Utilisez une plus grande variété de caractères');
        }
        else if (varietyRatio > 0.8) {
            score += 5;
        }
    }
}
exports.PasswordValidationMiddleware = PasswordValidationMiddleware;
PasswordValidationMiddleware.validatePasswordMiddleware = (req, res, next) => {
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
        req.passwordValidation = validation;
    }
    next();
};
PasswordValidationMiddleware.validatePhoneMiddleware = (req, res, next) => {
    const { telephone } = req.body;
    if (telephone) {
        const cleanPhone = telephone.replace(/[\s\-\(\)]/g, '');
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
PasswordValidationMiddleware.validateEmailMiddleware = (req, res, next) => {
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
PasswordValidationMiddleware.validateRegistrationMiddleware = (req, res, next) => {
    const { nom, prenom, email, password, telephone } = req.body;
    if (!nom || !prenom || !email || !password || !telephone) {
        res.status(400).json({
            success: false,
            message: 'Tous les champs sont requis',
            errors: ['Veuillez remplir tous les champs obligatoires']
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
    const cleanPhone = telephone.replace(/[\s\-\(\)]/g, '');
    if (!/^\+?[1-9]\d{7,14}$/.test(cleanPhone)) {
        res.status(400).json({
            success: false,
            message: 'Numéro de téléphone invalide',
            errors: ['Le numéro de téléphone doit contenir entre 8 et 15 chiffres']
        });
        return;
    }
    req.passwordValidation = passwordValidation;
    next();
};
exports.default = PasswordValidationMiddleware;
//# sourceMappingURL=passwordValidation.js.map