import { prisma } from "../config/prisma";
import { CreateAnime, UpdateAnime } from "../types/anime/createAnime";

export const createAnime = async (create_anime: CreateAnime) => {
    try {
        const anime = await prisma.anime.create({
            data: {
                title: create_anime.title,
                description: create_anime.description,
                coverImage: create_anime.category,
                animeImage: create_anime.animeImage,
                category: create_anime.category
            }
        })
        return anime
    } catch (error: any) {
        console.log("REPO_CREATE_ANIME_ERROR:", error.message);
        throw error;
    }
}
export const getAllAnimeByCategory = async (category: string) => {
    try {
        const anime = await prisma.anime.findMany({
            where: category ? { category } : {}
        })
        return anime
    } catch (error: any) {
        console.log("REPO_GET_ALL_ANIME_ERROR:", error.message);
        throw error;
    }
}
export const getAnimeById = async (id: string) => {
    try {
        const anime = await prisma.anime.findMany({
            where: {
                id: id
            },
            include: { Episode: true }
        })
        return anime
    } catch (error: any) {
        console.log("REPO_GET_ANIME_ERROR:", error.message);
        throw error;
    }
}
export const updateAnime = async (animeId: string, update_anime: UpdateAnime) => {
    try {
        const updatedAnime = await prisma.anime.update({
            where: { id: animeId },
            data: update_anime
        })
        return updatedAnime
    } catch (error: any) {
        console.log("REPO_UPDATE_ANIME_ERROR:", error.message);
        throw error;
    }
}
export const deleteAnime = async (animeId: string) => {
    try {
        await prisma.anime.delete({
            where: { id: animeId }
        })
        return {
            message: "Anime deleted"
        }
    } catch (error: any) {
        console.log("REPO_DELETE_ANIME_ERROR:", error.message);
        throw error;
    }
}
export const getTopLikedAnime = async (limit: number = 10) => {
    try {
        const topAnime = await prisma.anime.findMany({
            orderBy: {
                likeCount: "desc"
            },
            take: limit
        })
        return topAnime
    } catch (error: any) {
        console.log("REPO_TOP_LIKED_ERROR:", error.message);
        throw error;
    }
}