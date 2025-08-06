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
exports.deleteEpisodeController = exports.updateEpisodeController = exports.getEpisodeByIdController = exports.getEpisodesByAnimeIdController = exports.createEpisodeController = void 0;
const episode_service_1 = require("../service/episode.service");
// Create Episode
const createEpisodeController = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const data = req.body;
        const result = yield (0, episode_service_1.createEpisodeService)(data);
        return res.status(201).json(result);
    }
    catch (error) {
        return res.status(500).json({ message: "Failed to create episode" });
    }
});
exports.createEpisodeController = createEpisodeController;
// Get Episodes by Anime ID
const getEpisodesByAnimeIdController = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const animeId = req.params.animeId;
        const result = yield (0, episode_service_1.getEpisodesByAnimeIdService)(animeId);
        return res.status(200).json(result);
    }
    catch (error) {
        return res.status(500).json({ message: "Failed to fetch episodes" });
    }
});
exports.getEpisodesByAnimeIdController = getEpisodesByAnimeIdController;
// Get Episode by ID
const getEpisodeByIdController = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const episodeId = req.params.episodeId;
        const result = yield (0, episode_service_1.getEpisodeByIdService)(episodeId);
        if (!result.episode) {
            return res.status(404).json({ message: result.message });
        }
        return res.status(200).json(result);
    }
    catch (error) {
        return res.status(500).json({ message: "Failed to fetch episode" });
    }
});
exports.getEpisodeByIdController = getEpisodeByIdController;
// Update Episode
const updateEpisodeController = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const episodeId = req.params.episodeId;
        const data = req.body;
        const result = yield (0, episode_service_1.updateEpisodeService)(episodeId, data);
        return res.status(200).json(result);
    }
    catch (error) {
        return res.status(500).json({ message: "Failed to update episode" });
    }
});
exports.updateEpisodeController = updateEpisodeController;
// Delete Episode
const deleteEpisodeController = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const episodeId = req.params.episodeId;
        const result = yield (0, episode_service_1.deleteEpisodeService)(episodeId);
        return res.status(200).json(result);
    }
    catch (error) {
        return res.status(500).json({ message: "Failed to delete episode" });
    }
});
exports.deleteEpisodeController = deleteEpisodeController;
