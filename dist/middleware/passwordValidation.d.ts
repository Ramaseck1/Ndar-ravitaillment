import { Request, Response, NextFunction } from 'express';
export interface PasswordValidationResult {
    isValid: boolean;
    score: number;
    strength: 'très faible' | 'faible' | 'moyen' | 'fort' | 'très fort';
    errors: string[];
    warnings: string[];
}
export declare class PasswordValidationMiddleware {
    static validatePassword(password: string): PasswordValidationResult;
    private static checkCommonPatterns;
    private static checkCharacterVariety;
    static validatePasswordMiddleware: (req: Request, res: Response, next: NextFunction) => void;
    static validatePhoneMiddleware: (req: Request, res: Response, next: NextFunction) => void;
    static validateEmailMiddleware: (req: Request, res: Response, next: NextFunction) => void;
    static validateRegistrationMiddleware: (req: Request, res: Response, next: NextFunction) => void;
}
export default PasswordValidationMiddleware;
//# sourceMappingURL=passwordValidation.d.ts.map