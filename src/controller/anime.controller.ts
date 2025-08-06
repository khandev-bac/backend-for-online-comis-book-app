import { Request, Response } from "express";
import {
    createAnimeService,
    deleteAnimeService,
    getAllAnimeService,
    getAnimeByIdService,
    updateAnimeService,
} from "../service/anime.service";
import { CreateAnime, UpdateAnime } from "../types/anime/createAnime";

// Create Anime
export const createAnimeController = async (req: Request, res: Response) => {
    try {
        const animeData: CreateAnime = req.body;
        const result = await createAnimeService(animeData);
        return res.status(201).json(result);
    } catch (error) {
        return res.status(500).json({ message: "Failed to create anime" });
    }
};

// Get All Anime (with optional category)
export const getAllAnimeController = async (req: Request, res: Response) => {
    try {
        const category = req.query.category as string;
        const result = await getAllAnimeService(category);
        return res.status(200).json(result);
    } catch (error) {
        return res.status(500).json({ message: "Failed to fetch anime" });
    }
};

// Get Anime by ID
export const getAnimeByIdController = async (req: Request, res: Response) => {
    try {
        const animeId = req.params.id;
        const result = await getAnimeByIdService(animeId);
        if (!result.anime) {
            return res.status(404).json({ message: result.message });
        }
        return res.status(200).json(result);
    } catch (error) {
        return res.status(500).json({ message: "Failed to get anime by ID" });
    }
};

// Update Anime
export const updateAnimeController = async (req: Request, res: Response) => {
    try {
        const animeId = req.params.id;
        const data: UpdateAnime = req.body;
        const result = await updateAnimeService(animeId, data);
        return res.status(200).json(result);
    } catch (error) {
        return res.status(500).json({ message: "Failed to update anime" });
    }
};

// Delete Anime
export const deleteAnimeController = async (req: Request, res: Response) => {
    try {
        const animeId = req.params.id;
        const result = await deleteAnimeService(animeId);
        return res.status(200).json(result);
    } catch (error) {
        return res.status(500).json({ message: "Failed to delete anime" });
    }
};
