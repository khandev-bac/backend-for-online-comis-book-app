import { Router } from "express";
import { createEpisodeController, deleteEpisodeController, getEpisodeByIdController, getEpisodesByAnimeIdController, updateEpisodeController } from "../controller/episode.controller";
const router = Router()
router.post("/", createEpisodeController)
router.get("/:animeId", getEpisodesByAnimeIdController)
router.get("/:episodeId", getEpisodeByIdController)
router.put("/:episodeId", updateEpisodeController)
router.delete("/:episodeId", deleteEpisodeController)
export default router