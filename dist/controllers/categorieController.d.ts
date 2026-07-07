import { Request, Response } from "express";
declare class CategorieController {
    create(req: Request, res: Response): Promise<Response<any, Record<string, any>>>;
    findAll(req: Request, res: Response): Promise<Response<any, Record<string, any>>>;
    update(req: Request, res: Response): Promise<Response<any, Record<string, any>>>;
    delete(req: Request, res: Response): Promise<Response<any, Record<string, any>>>;
}
declare const _default: CategorieController;
export default _default;
//# sourceMappingURL=categorieController.d.ts.map