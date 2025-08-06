import { prisma } from "../config/prisma"

export const findById = async (id: string) => {
    try {
        const user = await prisma.user.findUnique({
            where: { id: id }
        })
        return user
    } catch (error: any) {
        console.log("REPO_USER_ERROR: ", error.message)
        throw error
    }
}
export const findByEmail = async (email: string) => {
    try {
        const user = await prisma.user.findUnique({
            where: { email: email }
        })
        return user
    } catch (error: any) {
        console.log("REPO_USER_ERROR: ", error.message)
        throw error
    }
}