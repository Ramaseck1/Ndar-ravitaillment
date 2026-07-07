export declare class AuthUtils {
    static hashPassword(password: string): Promise<string>;
    static comparePassword(password: string, hashedPassword: string): Promise<boolean>;
    static generateTokenclient(payload: {
        id: string;
        telephone: string;
        role: string;
    }): string;
    static generateToken(payload: {
        id: string;
        email: string;
        role: string;
    }): string;
    static verifyToken(token: string): any;
    static extractTokenFromHeader(authHeader: string | undefined): string | null;
    static generateOrderNumber(): string;
    static generatePaymentReference(): string;
}
//# sourceMappingURL=auth.d.ts.map