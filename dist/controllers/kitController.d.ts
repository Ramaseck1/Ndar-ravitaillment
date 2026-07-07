import { Request, Response } from "express";
declare class KitController {
    create(req: Request, res: Response): Promise<void>;
    update(req: Request, res: Response): Promise<void>;
    findAll(req: Request, res: Response): Promise<Response<any, Record<string, any>>>;
    findById(req: Request, res: Response): Promise<Response<any, Record<string, any>>>;
    delete(req: Request, res: Response): Promise<Response<any, Record<string, any>>>;
    addDetail(req: Request, res: Response): Promise<void>;
    updateDetail(req: Request, res: Response): Promise<void>;
    deleteDetail(req: Request, res: Response): Promise<Response<any, Record<string, any>>>;
}
declare const _default: KitController;
export default _default;
//# sourceMappingURL=kitController.d.ts.map