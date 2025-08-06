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
exports.deleteAnimeService = exports.updateAnimeService = exports.getAnimeByIdService = exports.getAllAnimeService = exports.createAnimeService = void 0;
const anime_repo_1 = require("../repo/anime.repo");
const createAnimeService = (create_Anime) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const anime = yield (0, anime_repo_1.createAnime)(create_Anime);
        return {
            message: "Successfully created",
            anime
        };
    }
    catch (error) {
        console.log("CREATE_ANIME_SERVICE_ERROR:", error);
        throw new Error("Failed to create anime");
    }
});
exports.createAnimeService = createAnimeService;
const getAllAnimeService = (category) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const anime = yield (0, anime_repo_1.getAllAnimeByCategory)(category);
        return {
            message: " fetched successfully",
            anime
        };
    }
    catch (error) {
        console.log("GET_ALL_ANIME_SERVICE_ERROR:", error);
        throw new Error("Failed to fetch anime");
    }
});
exports.getAllAnimeService = getAllAnimeService;
const getAnimeByIdService = (animeId) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const anime = yield (0, anime_repo_1.getAnimeById)(animeId);
        if (!anime) {
            return { message: "Anime not found", anime: null };
        }
        return {
            message: "Anime fetched successfully",
            anime,
        };
    }
    catch (error) {
        console.log("GET_ANIME_BY_ID_SERVICE_ERROR:", error);
        throw new Error("Failed to get anime by ID");
    }
});
exports.getAnimeByIdService = getAnimeByIdService;
const updateAnimeService = (animeId, data) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const updatedAnime = yield (0, anime_repo_1.updateAnime)(animeId, data);
        return {
            message: "Anime updated successfully",
            updatedAnime,
        };
    }
    catch (error) {
        console.log("UPDATE_ANIME_SERVICE_ERROR:", error);
        throw new Error("Failed to update anime");
    }
});
exports.updateAnimeService = updateAnimeService;
const deleteAnimeService = (animeId) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        yield (0, anime_repo_1.deleteAnime)(animeId);
        return {
            message: "Anime deleted successfully",
        };
    }
    catch (error) {
        console.log("DELETE_ANIME_SERVICE_ERROR:", error);
        throw new Error("Failed to delete anime");
    }
});
exports.deleteAnimeService = deleteAnimeService;
