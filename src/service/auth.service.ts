import { verifyGoogleToken } from "../libs/google_login";
import { generateToken } from "../libs/token";
import { createUserRepo } from "../repo/auth.repo";
import { findByEmail } from "../repo/user.repo";
import { CreateUser } from "../types/user/createUserType";

export const Login = async (idToken: string) => {
    try {
        const googleUser = await verifyGoogleToken(idToken)
        if (!googleUser || !googleUser.email) {
            return {
                message: "Something went wrong.try again later"
            }
        }
        let user = await findByEmail(googleUser.email)
        if (!user) {
            const newUser: CreateUser = {
                userName: googleUser.userName!,
                email: googleUser.email,
                profileImage: googleUser.profileImage
            }
            user = await createUserRepo(newUser)
        }
        const tokens = generateToken({
            username: user.userName,
            email: user.email,
            id: user.id
        })
        return {
            message: "Successfully account created",
            accessToken: tokens.accessToken,
            refreshToken: tokens.refreshToken,
            data: user
        }
    } catch (error: any) {
        console.error("AUTH_SERVICE_ERROR:", error.message);
        return {
            message: "failed to create account.try again later"
        }
        throw error;
    }
}