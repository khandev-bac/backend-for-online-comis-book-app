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
//like anime by user 
export const likeanime = async (userId: string, animeId: string) => {
    try {
        await prisma.userLiked.create({
            data: {
                userId: userId,
                animeId: animeId
            }
        })
        await prisma.anime.update({
            where: { id: userId },
            data: {
                likeCount: {
                    increment: 1,
                }
            }
        })
        return {
            message: "Liked"
        }
    } catch (error: any) {
        if (error.code === "P2002") {
            throw new Error("Anime already liked by user");
        }
        console.log("REPO_LIKE_ERROR:", error.message);
        throw error;
    }
}
export const unLikeanime = async (userId: string, animeId: string) => {
    try {
        await prisma.userLiked.delete({
            where: {
                userId_animeId: {
                    userId: userId,
                    animeId: animeId
                }
            }
        })
        await prisma.anime.update({
            where: { id: animeId },
            data: {
                likeCount: {
                    decrement: 1
                }
            }

        })
        return { message: "Unlike" }
    } catch (error: any) {
        console.log("REPO_UNLIKE_ERROR:", error.message);

    }
}