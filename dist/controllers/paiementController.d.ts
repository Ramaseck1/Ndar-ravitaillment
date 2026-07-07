import { Request, Response } from "express";
declare class PaiementController {
    enregistrer(req: Request, res: Response): Promise<Response<any, Record<string, any>>>;
    getDette(req: Request, res: Response): Promise<Response<any, Record<string, any>>>;
    getDettesClient(req: Request, res: Response): Promise<Response<any, Record<string, any>>>;
    getToutesLesDettes(req: Request, res: Response): Promise<Response<any, Record<string, any>>>;
}
declare const _default: PaiementController;
export default _default;
//# sourceMappingURL=paiementController.d.ts.map