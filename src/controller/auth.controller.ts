import { Request, Response } from "express";
import { Login } from "../service/auth.service";

export const LoginController = async (req: Request, res: Response) => {
    try {
        const { idToken } = req.body

        if (!idToken) {
            return res.status(400).json({ message: "idToken is required" });
        }
        const { message, accessToken, refreshToken } = await Login(idToken)
        return res.status(200).json({
            message: message,
            accessToken: accessToken,
            refreshToken: refreshToken
        })
    } catch (error: any) {
        console.error("LOGIN_CONTROLLER_ERROR:", error);
        return res.status(500).json({ message: "Login failed", error: error.message });
    }
}