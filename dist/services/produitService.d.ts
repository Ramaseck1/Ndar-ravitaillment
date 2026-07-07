declare class ProduitService {
    create(data: any & {
        imageBuffer?: Buffer;
    }): Promise<{
        id: number;
        nom: string;
        createdAt: Date;
        updatedAt: Date;
        image: string | null;
        categorieId: number;
        description: string | null;
        prix: number;
        quantite: number;
    }>;
    findAll(): Promise<({
        categorie: {
            id: number;
            createdAt: Date;
            updatedAt: Date;
            image: string | null;
            libelle: string;
        };
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
    })[]>;
    findAllSorted(sortBy: "prix_asc" | "prix_desc"): Promise<({
        categorie: {
            id: number;
            createdAt: Date;
            updatedAt: Date;
            image: string | null;
            libelle: string;
        };
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
    })[]>;
    meilleursVentes(): Promise<{
        totalVendu: number;
        categorie: {
            id: number;
            createdAt: Date;
            updatedAt: Date;
            image: string | null;
            libelle: string;
        };
        id: number;
        nom: string;
        createdAt: Date;
        updatedAt: Date;
        image: string | null;
        categorieId: number;
        description: string | null;
        prix: number;
        quantite: number;
    }[]>;
    update(id: number, data: any & {
        imageBuffer?: Buffer;
    }): Promise<{
        id: number;
        nom: string;
        createdAt: Date;
        updatedAt: Date;
        image: string | null;
        categorieId: number;
        description: string | null;
        prix: number;
        quantite: number;
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
    }>;
}
declare const _default: ProduitService;
export default _default;
//# sourceMappingURL=produitService.d.ts.map