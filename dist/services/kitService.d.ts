import { TypeKit } from "@prisma/client";
interface CreateKitDto {
    nom: string;
    description?: string;
    prix: number;
    categorieId: number;
    quantite: number;
    type: TypeKit;
    imageBuffer?: Buffer;
}
interface AddKitDetailDto {
    kitId: number;
    nom: string;
    description?: string;
    prix: number;
    quantite: number;
    imageBuffer?: Buffer;
}
declare class KitService {
    create(data: CreateKitDto): Promise<{
        details: {
            id: number;
            nom: string;
            createdAt: Date;
            updatedAt: Date;
            image: string | null;
            description: string | null;
            prix: number;
            quantite: number;
            kitId: number;
        }[];
    } & {
        id: number;
        nom: string;
        createdAt: Date;
        updatedAt: Date;
        image: string | null;
        categorieId: number;
        description: string | null;
        prix: number;
        quantite: number;
        type: import(".prisma/client").$Enums.TypeKit;
    }>;
    private recalculatePrix;
    findAll(): Promise<({
        categorie: {
            id: number;
            createdAt: Date;
            updatedAt: Date;
            image: string | null;
            libelle: string;
        };
        details: {
            id: number;
            nom: string;
            createdAt: Date;
            updatedAt: Date;
            image: string | null;
            description: string | null;
            prix: number;
            quantite: number;
            kitId: number;
        }[];
    } & {
        id: number;
        nom: string;
        createdAt: Date;
        updatedAt: Date;
        image: string | null;
        categorieId: number;
        description: string | null;
        prix: number;
        quantite: number;
        type: import(".prisma/client").$Enums.TypeKit;
    })[]>;
    findById(id: number): Promise<{
        categorie: {
            id: number;
            createdAt: Date;
            updatedAt: Date;
            image: string | null;
            libelle: string;
        };
        details: {
            id: number;
            nom: string;
            createdAt: Date;
            updatedAt: Date;
            image: string | null;
            description: string | null;
            prix: number;
            quantite: number;
            kitId: number;
        }[];
    } & {
        id: number;
        nom: string;
        createdAt: Date;
        updatedAt: Date;
        image: string | null;
        categorieId: number;
        description: string | null;
        prix: number;
        quantite: number;
        type: import(".prisma/client").$Enums.TypeKit;
    }>;
    delete(id: number): Promise<{
        id: number;
        nom: string;
        createdAt: Date;
        updatedAt: Date;
        image: string | null;
        categorieId: number;
        description: string | null;
        prix: number;
        quantite: number;
        type: import(".prisma/client").$Enums.TypeKit;
    }>;
    update(id: number, data: Partial<CreateKitDto>): Promise<{
        categorie: {
            id: number;
            createdAt: Date;
            updatedAt: Date;
            image: string | null;
            libelle: string;
        };
        details: {
            id: number;
            nom: string;
            createdAt: Date;
            updatedAt: Date;
            image: string | null;
            description: string | null;
            prix: number;
            quantite: number;
            kitId: number;
        }[];
    } & {
        id: number;
        nom: string;
        createdAt: Date;
        updatedAt: Date;
        image: string | null;
        categorieId: number;
        description: string | null;
        prix: number;
        quantite: number;
        type: import(".prisma/client").$Enums.TypeKit;
    }>;
    addDetail(data: AddKitDetailDto): Promise<{
        id: number;
        nom: string;
        createdAt: Date;
        updatedAt: Date;
        image: string | null;
        description: string | null;
        prix: number;
        quantite: number;
        kitId: number;
    }>;
    updateDetail(detailId: number, data: Partial<Omit<AddKitDetailDto, "kitId">>): Promise<{
        id: number;
        nom: string;
        createdAt: Date;
        updatedAt: Date;
        image: string | null;
        description: string | null;
        prix: number;
        quantite: number;
        kitId: number;
    }>;
    deleteDetail(detailId: number): Promise<{
        id: number;
        nom: string;
        createdAt: Date;
        updatedAt: Date;
        image: string | null;
        description: string | null;
        prix: number;
        quantite: number;
        kitId: number;
    }>;
}
declare const _default: KitService;
export default _default;
//# sourceMappingURL=kitService.d.ts.map