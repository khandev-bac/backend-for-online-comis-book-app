import { Response } from "express";
import { likeToggleService, getAllLikedService } from "../service/user.service";
import { REQ } from "../middleware/AuthMiddlware";


// Toggle Like / Unlike Anime
export const likeToggleController = async (req: REQ, res: Response) => {
    try {
        const userId = req.user?.id;
        const { animeId } = req.params;

        if (!userId || !animeId) {
            return res.status(400).json({ message: "User ID or Anime ID missing" });
        }

        const result = await likeToggleService(userId, animeId);
        return res.status(200).json({
            message: result?.liked ? "Anime liked" : "Anime unliked",
            ...result
        });

    } catch (error) {
        console.error("LIKE_TOGGLE_CONTROLLER_ERROR:", error);
        return res.status(500).json({ message: "Something went wrong" });
    }
};

// Get All Liked Anime for a User
export const getAllLikedAnimeController = async (req: REQ, res: Response) => {
    try {
        const userId = req.user?.id;

        if (!userId) {
            return res.status(400).json({ message: "User ID missing" });
        }

        const result = await getAllLikedService(userId);
        return res.status(200).json(result);

    } catch (error) {
        console.error("GET_ALL_LIKED_ANIME_CONTROLLER_ERROR:", error);
        return res.status(500).json({ message: "Failed to fetch favourite list" });
    }
};
