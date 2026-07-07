import { Request, Response } from "express";
declare class CommandeController {
    create(req: Request, res: Response): Promise<Response<any, Record<string, any>>>;
    findAll(req: Request, res: Response): Promise<Response<any, Record<string, any>>>;
    findById(req: Request, res: Response): Promise<Response<any, Record<string, any>>>;
    livrer(req: Request, res: Response): Promise<Response<any, Record<string, any>>>;
    commandesClient(req: Request, res: Response): Promise<Response<any, Record<string, any>>>;
}
declare const _default: CommandeController;
export default _default;
//# sourceMappingURL=commandeController.d.ts.map