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
exports.deleteEpisodeService = exports.updateEpisodeService = exports.getEpisodeByIdService = exports.getEpisodesByAnimeIdService = exports.createEpisodeService = void 0;
const episode_repo_1 = require("../repo/episode.repo");
const createEpisodeService = (data) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const episode = yield (0, episode_repo_1.createEpisode)(data);
        return {
            message: "Episode created successfully",
            episode,
        };
    }
    catch (error) {
        console.log("CREATE_EPISODE_SERVICE_ERROR:", error);
        throw new Error("Failed to create episode");
    }
});
exports.createEpisodeService = createEpisodeService;
const getEpisodesByAnimeIdService = (animeId) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const episodes = yield (0, episode_repo_1.getAllAnimeEpiodeById)(animeId);
        return {
            message: "Episodes fetched successfully",
            episodes,
        };
    }
    catch (error) {
        console.log("GET_EPISODES_BY_ANIME_SERVICE_ERROR:", error);
        throw new Error("Failed to get episodes");
    }
});
exports.getEpisodesByAnimeIdService = getEpisodesByAnimeIdService;
const getEpisodeByIdService = (episodeId) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const episode = yield (0, episode_repo_1.getEpisodeById)(episodeId);
        if (!episode) {
            return { message: "Episode not found", episode: null };
        }
        return {
            message: "Episode fetched successfully",
            episode,
        };
    }
    catch (error) {
        console.log("GET_EPISODE_BY_ID_SERVICE_ERROR:", error);
        throw new Error("Failed to get episode");
    }
});
exports.getEpisodeByIdService = getEpisodeByIdService;
const updateEpisodeService = (episodeId, data) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const updated = yield (0, episode_repo_1.updateEpisode)(episodeId, data);
        return {
            message: "Episode updated successfully",
            updated,
        };
    }
    catch (error) {
        console.log("UPDATE_EPISODE_SERVICE_ERROR:", error);
        throw new Error("Failed to update episode");
    }
});
exports.updateEpisodeService = updateEpisodeService;
const deleteEpisodeService = (episodeId) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        yield (0, episode_repo_1.deleteEpisode)(episodeId);
        return {
            message: "Episode deleted successfully",
        };
    }
    catch (error) {
        console.log("DELETE_EPISODE_SERVICE_ERROR:", error);
        throw new Error("Failed to delete episode");
    }
});
exports.deleteEpisodeService = deleteEpisodeService;
