declare class CategorieService {
    create(data: {
        libelle: string;
        imageBuffer?: Buffer;
    }): Promise<{
        id: number;
        createdAt: Date;
        updatedAt: Date;
        image: string | null;
        libelle: string;
    }>;
    findAll(): Promise<{
        id: number;
        createdAt: Date;
        updatedAt: Date;
        image: string | null;
        libelle: string;
    }[]>;
    update(id: number, data: {
        libelle?: string;
        imageBuffer?: Buffer;
    }): Promise<{
        id: number;
        createdAt: Date;
        updatedAt: Date;
        image: string | null;
        libelle: string;
    }>;
    delete(id: number): Promise<{
        id: number;
        createdAt: Date;
        updatedAt: Date;
        image: string | null;
        libelle: string;
    }>;
}
declare const _default: CategorieService;
export default _default;
//# sourceMappingURL=categorieService.d.ts.map