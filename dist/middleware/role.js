"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.roleMiddleware = void 0;
const roleMiddleware = (...roles) => (req, res, next) => {
    if (!roles.includes(req.user.role)) {
        return res.status(403).json({
            message: "Accès refusé"
        });
    }
    next();
};
exports.roleMiddleware = roleMiddleware;
//# sourceMappingURL=role.js.map