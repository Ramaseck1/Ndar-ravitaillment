declare class AuthService {
    login(email: string, password: string): Promise<{
        token: string;
        user: {
            id: number;
            email: string;
            nom: string;
            prenom: string;
            role: import(".prisma/client").$Enums.Role;
            createdAt: Date;
            updatedAt: Date;
        };
    }>;
    createAdmin(nom: string, prenom: string, email: string, password: string): Promise<{
        id: number;
        email: string;
        nom: string;
        prenom: string;
        role: import(".prisma/client").$Enums.Role;
        createdAt: Date;
        updatedAt: Date;
    }>;
}
declare const _default: AuthService;
export default _default;
//# sourceMappingURL=authService.d.ts.map