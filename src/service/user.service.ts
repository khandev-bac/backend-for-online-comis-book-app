import { getUserLikedAnime, hasUserLiked, likeanime, unLikeanime } from "../repo/user.repo"

export const likeToggleService = async (userId: string, animeId: string) => {
    try {
        const alreadyLiked = await hasUserLiked(userId, animeId)
        if (alreadyLiked) {
            await unLikeanime(userId, animeId)
            return {
                liked: false
            }
        } else {
            await likeanime(userId, animeId)
            return {
                liked: true
            }
        }

    } catch (error) {
        console.log(error)
    }
}

export const getAllLikedService = async (userId: string) => {
    try {
        const favi = await getUserLikedAnime(userId)
        return {
            message: "added to favourite list ",
            favi
        }
    } catch (error) {
        console.log(error)
        return {
            message: "failed to added in your favourite list",

        }
    }
}