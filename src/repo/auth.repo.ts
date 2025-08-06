import { prisma } from "../config/prisma";
import { CreateUser } from "../types/user/createUserType";

export const createUserRepo = async (create_user: CreateUser) => {
    try {
        const user = await prisma.user.create({
            data: {
                userName: create_user.userName,
                email: create_user.email,
                profileImage: create_user.profileImage
            }
        })
        return user
    } catch (error: any) {
        console.log("REPO_AUTH_ERROR: ", error.message)
        throw error
    }
}
