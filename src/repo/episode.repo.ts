import { prisma } from "../config/prisma";
import { CreateEpisode, UpdateEpisode } from "../types/anime/episode";

export const createEpisode = async (create_episode: CreateEpisode) => {
    try {
        const episode = await prisma.episode.create({
            data: {
                episodeNumber: create_episode.episodeNumber,
                animeId: create_episode.animeId,
                animeImage: create_episode.animeImage
            }
        })
        return episode
    } catch (error: any) {
        console.log("REPO_CREATE_EPISODE_ERROR:", error.message);
        throw error;
    }
}
export const getAllAnimeEpiodeById = async (animeId: string) => {
    try {
        const episode = await prisma.episode.findMany({
            where: { animeId },
            orderBy: { episodeNumber: "asc" }
        })
        return episode
    } catch (error: any) {
        console.log("REPO_GET_EPISODES_ERROR:", error.message);
        throw error;
    }
}
export const getEpisodeById = async (episodeId: string) => {
    try {
        const episode = await prisma.episode.findUnique({
            where: { id: episodeId },
        })
        return episode
    } catch (error: any) {
        console.log("REPO_GET_EPISODE_ERROR:", error.message);
        throw error;
    }
}
export const updateEpisode = async (episodeId: string, update_episode: UpdateEpisode) => {
    try {
        const updated_episode = await prisma.episode.update({
            where: { id: episodeId },
            data: {
                episodeNumber: update_episode.episodeNumber,
                animeImage: update_episode.animeImage
            }
        })
        return updated_episode
    } catch (error: any) {
        console.log("REPO_UPDATE_EPISODE_ERROR:", error.message);
        throw error;
    }
}
export const deleteEpisode = async (episodeId: string) => {
    try {
        return await prisma.episode.delete({
            where: { id: episodeId }
        })
    } catch (error: any) {
        console.log("REPO_DELETE_EPISODE_ERROR:", error.message);
        throw error;
    }
}
