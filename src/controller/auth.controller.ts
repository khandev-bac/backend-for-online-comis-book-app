import { Request, Response } from "express";
import { Login } from "../service/auth.service";
export const check = async (req: Request, res: Response) => {
    res.status(200).json({
        message: "ok server is fine"
    })
}
export const LoginController = async (req: Request, res: Response) => {
    try {
        const { idToken } = req.body

        if (!idToken) {
            return res.status(400).json({ message: "idToken is required" });
        }
        const val = await Login(idToken)
        return res.status(200).json({
            message: val.message,
            accessToken: val.accessToken,
            refreshToken: val.refreshToken,
            user: val.data
        })
    } catch (error: any) {
        console.error("LOGIN_CONTROLLER_ERROR:", error);
        return res.status(500).json({ message: "Login failed", error: error.message });
    }
}