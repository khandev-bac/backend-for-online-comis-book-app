"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getAllLikedAnimeController = exports.likeToggleController = void 0;
const user_service_1 = require("../service/user.service");
// Toggle Like / Unlike Anime
const likeToggleController = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    var _a;
    try {
        const userId = (_a = req.user) === null || _a === void 0 ? void 0 : _a.id;
        const { animeId } = req.params;
        if (!userId || !animeId) {
            return res.status(400).json({ message: "User ID or Anime ID missing" });
        }
        const result = yield (0, user_service_1.likeToggleService)(userId, animeId);
        return res.status(200).json(Object.assign({ message: (result === null || result === void 0 ? void 0 : result.liked) ? "Anime liked" : "Anime unliked" }, result));
    }
    catch (error) {
        console.error("LIKE_TOGGLE_CONTROLLER_ERROR:", error);
        return res.status(500).json({ message: "Something went wrong" });
    }
});
exports.likeToggleController = likeToggleController;
// Get All Liked Anime for a User
const getAllLikedAnimeController = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    var _a;
    try {
        const userId = (_a = req.user) === null || _a === void 0 ? void 0 : _a.id;
        if (!userId) {
            return res.status(400).json({ message: "User ID missing" });
        }
        const result = yield (0, user_service_1.getAllLikedService)(userId);
        return res.status(200).json(result);
    }
    catch (error) {
        console.error("GET_ALL_LIKED_ANIME_CONTROLLER_ERROR:", error);
        return res.status(500).json({ message: "Failed to fetch favourite list" });
    }
});
exports.getAllLikedAnimeController = getAllLikedAnimeController;
