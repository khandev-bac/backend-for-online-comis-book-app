import { OAuth2Client } from "google-auth-library";
import { envField } from "../config/env";
const client = new OAuth2Client(envField.GOOGLE_CLIENT_ID)

export const verifyGoogleToken = async (idToken: string) => {
    const ticket = await client.verifyIdToken({
        idToken: idToken,
        audience: envField.GOOGLE_CLIENT_ID
    })
    const payload = ticket.getPayload();
    return {
        userName: payload?.name,
        email: payload?.email,
        profileImage: payload?.picture
    }
}