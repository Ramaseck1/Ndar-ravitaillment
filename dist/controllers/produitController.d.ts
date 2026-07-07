import { Request, Response } from "express";
declare class ProduitController {
    create(req: Request, res: Response): Promise<Response<any, Record<string, any>>>;
    findAll(req: Request, res: Response): Promise<Response<any, Record<string, any>>>;
    update(req: Request, res: Response): Promise<Response<any, Record<string, any>>>;
    delete(req: Request, res: Response): Promise<Response<any, Record<string, any>>>;
    findAllSorted(req: Request, res: Response): Promise<Response<any, Record<string, any>>>;
    meilleursVentes(req: Request, res: Response): Promise<Response<any, Record<string, any>>>;
}
declare const _default: ProduitController;
export default _default;
//# sourceMappingURL=produitController.d.ts.map