"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AuthMiddleware = void 0;
const token_1 = require("../libs/token");
const AuthMiddleware = (req, res, next) => {
    const authHeader = req.headers.authorization;
    const token = authHeader === null || authHeader === void 0 ? void 0 : authHeader.split(" ")[1];
    if (!token) {
        return res.status(401).json({
            message: "Unauthorized. Please login again.",
        });
    }
    try {
        const decoded = (0, token_1.verifyAccessToken)(token);
        req.user = decoded;
        next();
    }
    catch (error) {
        console.error("AUTH_MIDDLEWARE_ERROR:", error.message);
        return res.status(401).json({
            message: "Invalid or expired token. Please login again.",
        });
    }
};
exports.AuthMiddleware = AuthMiddleware;
