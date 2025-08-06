import { Request, Response } from "express";
import {
    createEpisodeService,
    deleteEpisodeService,
    getEpisodeByIdService,
    getEpisodesByAnimeIdService,
    updateEpisodeService,
} from "../service/episode.service";

import { CreateEpisode, UpdateEpisode } from "../types/anime/episode";

// Create Episode
export const createEpisodeController = async (req: Request, res: Response) => {
    try {
        const data: CreateEpisode = req.body;
        const result = await createEpisodeService(data);
        return res.status(201).json(result);
    } catch (error) {
        return res.status(500).json({ message: "Failed to create episode" });
    }
};

// Get Episodes by Anime ID
export const getEpisodesByAnimeIdController = async (req: Request, res: Response) => {
    try {
        const animeId = req.params.animeId;
        const result = await getEpisodesByAnimeIdService(animeId);
        return res.status(200).json(result);
    } catch (error) {
        return res.status(500).json({ message: "Failed to fetch episodes" });
    }
};

// Get Episode by ID
export const getEpisodeByIdController = async (req: Request, res: Response) => {
    try {
        const episodeId = req.params.episodeId;
        const result = await getEpisodeByIdService(episodeId);
        if (!result.episode) {
            return res.status(404).json({ message: result.message });
        }
        return res.status(200).json(result);
    } catch (error) {
        return res.status(500).json({ message: "Failed to fetch episode" });
    }
};

// Update Episode
export const updateEpisodeController = async (req: Request, res: Response) => {
    try {
        const episodeId = req.params.episodeId;
        const data: UpdateEpisode = req.body;
        const result = await updateEpisodeService(episodeId, data);
        return res.status(200).json(result);
    } catch (error) {
        return res.status(500).json({ message: "Failed to update episode" });
    }
};

// Delete Episode
export const deleteEpisodeController = async (req: Request, res: Response) => {
    try {
        const episodeId = req.params.episodeId;
        const result = await deleteEpisodeService(episodeId);
        return res.status(200).json(result);
    } catch (error) {
        return res.status(500).json({ message: "Failed to delete episode" });
    }
};
