import { Router } from "express"
import { createAnimeController, deleteAnimeController, getAllAnimeController, getAnimeByIdController, updateAnimeController } from "../controller/anime.controller";
import { AuthMiddleware } from "../middleware/AuthMiddlware";
const router = Router()
router.use(AuthMiddleware)
router.post("/", createAnimeController)
router.get("/", getAllAnimeController)
router.get("/:animeId", getAnimeByIdController)
router.post("/:animeId", updateAnimeController)
router.delete("/:animeId", deleteAnimeController)
export default router;