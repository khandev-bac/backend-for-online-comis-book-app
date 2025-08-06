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
exports.deleteAnimeController = exports.updateAnimeController = exports.getAnimeByIdController = exports.getAllAnimeController = exports.createAnimeController = void 0;
const anime_service_1 = require("../service/anime.service");
// Create Anime
const createAnimeController = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const animeData = req.body;
        const result = yield (0, anime_service_1.createAnimeService)(animeData);
        return res.status(201).json(result);
    }
    catch (error) {
        return res.status(500).json({ message: "Failed to create anime" });
    }
});
exports.createAnimeController = createAnimeController;
// Get All Anime (with optional category)
const getAllAnimeController = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const category = req.query.category;
        const result = yield (0, anime_service_1.getAllAnimeService)(category);
        return res.status(200).json(result);
    }
    catch (error) {
        return res.status(500).json({ message: "Failed to fetch anime" });
    }
});
exports.getAllAnimeController = getAllAnimeController;
// Get Anime by ID
const getAnimeByIdController = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const animeId = req.params.id;
        const result = yield (0, anime_service_1.getAnimeByIdService)(animeId);
        if (!result.anime) {
            return res.status(404).json({ message: result.message });
        }
        return res.status(200).json(result);
    }
    catch (error) {
        return res.status(500).json({ message: "Failed to get anime by ID" });
    }
});
exports.getAnimeByIdController = getAnimeByIdController;
// Update Anime
const updateAnimeController = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const animeId = req.params.id;
        const data = req.body;
        const result = yield (0, anime_service_1.updateAnimeService)(animeId, data);
        return res.status(200).json(result);
    }
    catch (error) {
        return res.status(500).json({ message: "Failed to update anime" });
    }
});
exports.updateAnimeController = updateAnimeController;
// Delete Anime
const deleteAnimeController = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const animeId = req.params.id;
        const result = yield (0, anime_service_1.deleteAnimeService)(animeId);
        return res.status(200).json(result);
    }
    catch (error) {
        return res.status(500).json({ message: "Failed to delete anime" });
    }
});
exports.deleteAnimeController = deleteAnimeController;
