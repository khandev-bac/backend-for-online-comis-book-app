import { Router } from "express";
import { getAllLikedAnimeController, likeToggleController } from "../controller/user.controller";
import { AuthMiddleware } from "../middleware/AuthMiddlware";
const router = Router()
router.use(AuthMiddleware)
router.post("/likeToggle/:animeId", likeToggleController)
router.get("/get-liked-anime", getAllLikedAnimeController)
export default router