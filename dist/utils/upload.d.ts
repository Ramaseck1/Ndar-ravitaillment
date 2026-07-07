import { Request } from 'express';
export declare const uploadKitImage: import("express").RequestHandler<import("express-serve-static-core").ParamsDictionary, any, any, import("qs").ParsedQs, Record<string, any>>;
export declare const uploadProduitImage: import("express").RequestHandler<import("express-serve-static-core").ParamsDictionary, any, any, import("qs").ParsedQs, Record<string, any>>;
export declare const uploadKitWithProducts: import("express").RequestHandler<import("express-serve-static-core").ParamsDictionary, any, any, import("qs").ParsedQs, Record<string, any>>;
export declare function getFileUrl(req: Request, relativePath: string): string;
export declare function deleteFile(filePath: string): void;
//# sourceMappingURL=upload.d.ts.map