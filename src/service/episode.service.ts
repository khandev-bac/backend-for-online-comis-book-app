import { createEpisode, deleteEpisode, getAllAnimeEpiodeById, getEpisodeById, updateEpisode } from "../repo/episode.repo";
import { CreateEpisode, UpdateEpisode } from "../types/anime/episode";

export const createEpisodeService = async (data: CreateEpisode) => {
    try {
        const episode = await createEpisode(data);
        return {
            message: "Episode created successfully",
            episode,
        };
    } catch (error) {
        console.log("CREATE_EPISODE_SERVICE_ERROR:", error);
        throw new Error("Failed to create episode");
    }
};

export const getEpisodesByAnimeIdService = async (animeId: string) => {
    try {
        const episodes = await getAllAnimeEpiodeById(animeId);
        return {
            message: "Episodes fetched successfully",
            episodes,
        };
    } catch (error) {
        console.log("GET_EPISODES_BY_ANIME_SERVICE_ERROR:", error);
        throw new Error("Failed to get episodes");
    }
};

export const getEpisodeByIdService = async (episodeId: string) => {
    try {
        const episode = await getEpisodeById(episodeId);
        if (!episode) {
            return { message: "Episode not found", episode: null };
        }
        return {
            message: "Episode fetched successfully",
            episode,
        };
    } catch (error) {
        console.log("GET_EPISODE_BY_ID_SERVICE_ERROR:", error);
        throw new Error("Failed to get episode");
    }
};

export const updateEpisodeService = async (episodeId: string, data: UpdateEpisode) => {
    try {
        const updated = await updateEpisode(episodeId, data);
        return {
            message: "Episode updated successfully",
            updated,
        };
    } catch (error) {
        console.log("UPDATE_EPISODE_SERVICE_ERROR:", error);
        throw new Error("Failed to update episode");
    }
};

export const deleteEpisodeService = async (episodeId: string) => {
    try {
        await deleteEpisode(episodeId);
        return {
            message: "Episode deleted successfully",
        };
    } catch (error) {
        console.log("DELETE_EPISODE_SERVICE_ERROR:", error);
        throw new Error("Failed to delete episode");
    }
};
