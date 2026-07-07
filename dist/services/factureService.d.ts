import type { Response } from "express";
declare class FactureService {
    genererPDF(commandeId: number, type: "facture" | "proforma", res: Response): Promise<void>;
}
declare const _default: FactureService;
export default _default;
//# sourceMappingURL=factureService.d.ts.map