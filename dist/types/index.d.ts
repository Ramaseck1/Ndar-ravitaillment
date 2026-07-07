import { Role, CommandeStatus } from '@prisma/client';
export { Role, CommandeStatus };
export interface JwtPayload {
    userId: number;
    role: Role;
    email: string;
}
export interface JwtPayload {
    id: number;
    role: Role;
    email: string;
}
export interface CreateUserDto {
    nom: string;
    prenom: string;
    email: string;
    password: string;
    role: Role;
}
export interface LoginDto {
    email: string;
    password: string;
}
export interface CreateCategorieDto {
    libelle: string;
}
export interface CreateProduitDto {
    nom: string;
    description?: string;
    prix: number;
    categorieId: number;
    image?: string;
}
export interface UpdateProduitDto extends Partial<CreateProduitDto> {
}
export interface KitItemDto {
    produitId: number;
    quantite: number;
}
export interface CreateKitDto {
    nom: string;
    description?: string;
    prix: number;
    image?: string;
    produits: KitItemDto[];
}
export interface UpdateKitDto extends Partial<Omit<CreateKitDto, 'produits'>> {
    produits?: KitItemDto[];
}
export interface CommandeItemDto {
    produitId?: number;
    kitId?: number;
    quantite: number;
    prix: number;
}
export interface CreateCommandeDto {
    clientId: number;
    details: CommandeItemDto[];
}
export interface CreateClientDto {
    nom: string;
    prenom: string;
    telephone: string;
}
//# sourceMappingURL=index.d.ts.map