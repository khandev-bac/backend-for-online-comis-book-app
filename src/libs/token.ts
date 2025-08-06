import jwt from "jsonwebtoken"
import { envField } from "../config/env";
export interface Payload {
    id: string,
    email: string,
    username: string
}

interface Tokens {
    accessToken: string;
    refreshToken: string
}
export const generateToken = (payload: Payload): Tokens => {
    const accessToken = jwt.sign(payload, envField.JWT_ACCESS_TOKEN, { expiresIn: '15m' })
    const refreshToken = jwt.sign(payload, envField.JWT_REFRESH_TOKEN, { expiresIn: "90d" })
    return {
        accessToken,
        refreshToken
    }
}
export const verifyAccessToken = (token: string) => {
    const decode = jwt.verify(token, envField.JWT_ACCESS_TOKEN)
    return decode as Payload
}
export const verifyRefreshToken = (token: string) => {
    const decode = jwt.verify(token, envField.JWT_REFRESH_TOKEN)
    return decode as Payload
}