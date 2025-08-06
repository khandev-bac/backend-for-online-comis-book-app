import { NextFunction, Request, Response } from "express";
import { Payload, verifyAccessToken } from '../libs/token';

export interface REQ extends Request {
    user?: Payload;
}

export const AuthMiddleware = (req: REQ, res: Response, next: NextFunction) => {
    const authHeader = req.headers.authorization;
    const token = authHeader?.split(" ")[1];

    if (!token) {
        return res.status(401).json({
            message: "Unauthorized. Please login again.",
        });
    }

    try {
        const decoded = verifyAccessToken(token);
        req.user = decoded;
        next();
    } catch (error: any) {
        console.error("AUTH_MIDDLEWARE_ERROR:", error.message);
        return res.status(401).json({
            message: "Invalid or expired token. Please login again.",
        });
    }
};
