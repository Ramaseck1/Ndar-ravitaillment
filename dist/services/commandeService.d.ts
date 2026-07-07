declare class CommandeService {
    create(data: any): Promise<{
        details: ({
            produit: {
                id: number;
                nom: string;
                createdAt: Date;
                updatedAt: Date;
                image: string | null;
                categorieId: number;
                description: string | null;
                prix: number;
                quantite: number;
            } | null;
            kit: ({
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
            }) | null;
        } & {
            id: number;
            prix: number;
            quantite: number;
            commandeId: number;
            produitId: number | null;
            kitId: number | null;
        })[];
        client: {
            id: number;
            nom: string;
            prenom: string;
            createdAt: Date;
            updatedAt: Date;
            telephone: string;
        };
    } & {
        id: number;
        createdAt: Date;
        updatedAt: Date;
        status: import(".prisma/client").$Enums.CommandeStatus;
        total: number;
        montantPaye: number;
        statutPaiement: import(".prisma/client").$Enums.StatutPaiement;
        clientId: number;
    }>;
    livrer(id: number): Promise<{
        id: number;
        createdAt: Date;
        updatedAt: Date;
        status: import(".prisma/client").$Enums.CommandeStatus;
        total: number;
        montantPaye: number;
        statutPaiement: import(".prisma/client").$Enums.StatutPaiement;
        clientId: number;
    }>;
    findAll(): Promise<({
        details: ({
            produit: {
                id: number;
                nom: string;
                createdAt: Date;
                updatedAt: Date;
                image: string | null;
                categorieId: number;
                description: string | null;
                prix: number;
                quantite: number;
            } | null;
            kit: ({
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
            }) | null;
        } & {
            id: number;
            prix: number;
            quantite: number;
            commandeId: number;
            produitId: number | null;
            kitId: number | null;
        })[];
        client: {
            id: number;
            nom: string;
            prenom: string;
            createdAt: Date;
            updatedAt: Date;
            telephone: string;
        };
    } & {
        id: number;
        createdAt: Date;
        updatedAt: Date;
        status: import(".prisma/client").$Enums.CommandeStatus;
        total: number;
        montantPaye: number;
        statutPaiement: import(".prisma/client").$Enums.StatutPaiement;
        clientId: number;
    })[]>;
    findById(id: number): Promise<{
        details: ({
            produit: {
                id: number;
                nom: string;
                createdAt: Date;
                updatedAt: Date;
                image: string | null;
                categorieId: number;
                description: string | null;
                prix: number;
                quantite: number;
            } | null;
            kit: ({
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
            }) | null;
        } & {
            id: number;
            prix: number;
            quantite: number;
            commandeId: number;
            produitId: number | null;
            kitId: number | null;
        })[];
        client: {
            id: number;
            nom: string;
            prenom: string;
            createdAt: Date;
            updatedAt: Date;
            telephone: string;
        };
    } & {
        id: number;
        createdAt: Date;
        updatedAt: Date;
        status: import(".prisma/client").$Enums.CommandeStatus;
        total: number;
        montantPaye: number;
        statutPaiement: import(".prisma/client").$Enums.StatutPaiement;
        clientId: number;
    }>;
    findByTelephone(telephone: string): Promise<({
        details: ({
            produit: {
                id: number;
                nom: string;
                createdAt: Date;
                updatedAt: Date;
                image: string | null;
                categorieId: number;
                description: string | null;
                prix: number;
                quantite: number;
            } | null;
            kit: ({
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
            }) | null;
        } & {
            id: number;
            prix: number;
            quantite: number;
            commandeId: number;
            produitId: number | null;
            kitId: number | null;
        })[];
        client: {
            id: number;
            nom: string;
            prenom: string;
            createdAt: Date;
            updatedAt: Date;
            telephone: string;
        };
    } & {
        id: number;
        createdAt: Date;
        updatedAt: Date;
        status: import(".prisma/client").$Enums.CommandeStatus;
        total: number;
        montantPaye: number;
        statutPaiement: import(".prisma/client").$Enums.StatutPaiement;
        clientId: number;
    })[]>;
}
declare const _default: CommandeService;
export default _default;
//# sourceMappingURL=commandeService.d.ts.map