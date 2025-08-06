import { createAnime, deleteAnime, getAllAnimeByCategory, getAnimeById, updateAnime } from "../repo/anime.repo";
import { CreateAnime, UpdateAnime } from "../types/anime/createAnime";

export const createAnimeService = async (create_Anime: CreateAnime) => {
    try {
        const anime = await createAnime(create_Anime)
        return {
            message: "Successfully created",
            anime
        }
    } catch (error: any) {
        console.log("CREATE_ANIME_SERVICE_ERROR:", error);
        throw new Error("Failed to create anime");
    }
}
export const getAllAnimeService = async (category: string) => {
    try {
        const anime = await getAllAnimeByCategory(category)
        return {
            message: " fetched successfully",
            anime
        }
    } catch (error: any) {
        console.log("GET_ALL_ANIME_SERVICE_ERROR:", error);
        throw new Error("Failed to fetch anime");
    }
}
export const getAnimeByIdService = async (animeId: string) => {
    try {
        const anime = await getAnimeById(animeId);
        if (!anime) {
            return { message: "Anime not found", anime: null };
        }
        return {
            message: "Anime fetched successfully",
            anime,
        };
    } catch (error) {
        console.log("GET_ANIME_BY_ID_SERVICE_ERROR:", error);
        throw new Error("Failed to get anime by ID");
    }
};

export const updateAnimeService = async (animeId: string, data: UpdateAnime) => {
    try {
        const updatedAnime = await updateAnime(animeId, data);
        return {
            message: "Anime updated successfully",
            updatedAnime,
        };
    } catch (error) {
        console.log("UPDATE_ANIME_SERVICE_ERROR:", error);
        throw new Error("Failed to update anime");
    }
};

export const deleteAnimeService = async (animeId: string) => {
    try {
        await deleteAnime(animeId);
        return {
            message: "Anime deleted successfully",
        };
    } catch (error) {
        console.log("DELETE_ANIME_SERVICE_ERROR:", error);
        throw new Error("Failed to delete anime");
    }
};