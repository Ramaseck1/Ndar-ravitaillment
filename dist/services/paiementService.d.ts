interface EnregistrerPaiementDto {
    commandeId: number;
    montant: number;
    methode?: string;
    note?: string;
}
declare class PaiementService {
    enregistrerPaiement(data: EnregistrerPaiementDto): Promise<{
        client: {
            id: number;
            nom: string;
            prenom: string;
            createdAt: Date;
            updatedAt: Date;
            telephone: string;
        };
        paiements: {
            id: number;
            createdAt: Date;
            commandeId: number;
            montant: number;
            methode: string | null;
            note: string | null;
        }[];
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
    private calculerStatut;
    getDette(commandeId: number): Promise<{
        commandeId: number;
        client: {
            id: number;
            nom: string;
            prenom: string;
            createdAt: Date;
            updatedAt: Date;
            telephone: string;
        };
        total: number;
        montantPaye: number;
        montantRestant: number;
        statutPaiement: import(".prisma/client").$Enums.StatutPaiement;
        paiements: {
            id: number;
            createdAt: Date;
            commandeId: number;
            montant: number;
            methode: string | null;
            note: string | null;
        }[];
    }>;
    getDettesClient(telephone: string): Promise<{
        telephone: string;
        nombreCommandesImpayees: number;
        montantTotalDu: number;
        commandes: {
            commandeId: number;
            total: number;
            montantPaye: number;
            montantRestant: number;
            statutPaiement: import(".prisma/client").$Enums.StatutPaiement;
            createdAt: Date;
        }[];
    }>;
    getToutesLesDettes(): Promise<{
        commandeId: number;
        client: {
            id: number;
            nom: string;
            prenom: string;
            createdAt: Date;
            updatedAt: Date;
            telephone: string;
        };
        total: number;
        montantPaye: number;
        montantRestant: number;
        statutPaiement: import(".prisma/client").$Enums.StatutPaiement;
        createdAt: Date;
    }[]>;
}
declare const _default: PaiementService;
export default _default;
//# sourceMappingURL=paiementService.d.ts.map