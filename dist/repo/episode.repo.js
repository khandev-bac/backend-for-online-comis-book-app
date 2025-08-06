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
exports.deleteEpisode = exports.updateEpisode = exports.getEpisodeById = exports.getAllAnimeEpiodeById = exports.createEpisode = void 0;
const prisma_1 = require("../config/prisma");
const createEpisode = (create_episode) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const episode = yield prisma_1.prisma.episode.create({
            data: {
                episodeNumber: create_episode.episodeNumber,
                animeId: create_episode.animeId,
                animeImage: create_episode.animeImage
            }
        });
        return episode;
    }
    catch (error) {
        console.log("REPO_CREATE_EPISODE_ERROR:", error.message);
        throw error;
    }
});
exports.createEpisode = createEpisode;
const getAllAnimeEpiodeById = (animeId) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const episode = yield prisma_1.prisma.episode.findMany({
            where: { animeId },
            orderBy: { episodeNumber: "asc" }
        });
        return episode;
    }
    catch (error) {
        console.log("REPO_GET_EPISODES_ERROR:", error.message);
        throw error;
    }
});
exports.getAllAnimeEpiodeById = getAllAnimeEpiodeById;
const getEpisodeById = (episodeId) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const episode = yield prisma_1.prisma.episode.findUnique({
            where: { id: episodeId },
        });
        return episode;
    }
    catch (error) {
        console.log("REPO_GET_EPISODE_ERROR:", error.message);
        throw error;
    }
});
exports.getEpisodeById = getEpisodeById;
const updateEpisode = (episodeId, update_episode) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const updated_episode = yield prisma_1.prisma.episode.update({
            where: { id: episodeId },
            data: {
                episodeNumber: update_episode.episodeNumber,
                animeImage: update_episode.animeImage
            }
        });
        return updated_episode;
    }
    catch (error) {
        console.log("REPO_UPDATE_EPISODE_ERROR:", error.message);
        throw error;
    }
});
exports.updateEpisode = updateEpisode;
const deleteEpisode = (episodeId) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        return yield prisma_1.prisma.episode.delete({
            where: { id: episodeId }
        });
    }
    catch (error) {
        console.log("REPO_DELETE_EPISODE_ERROR:", error.message);
        throw error;
    }
});
exports.deleteEpisode = deleteEpisode;
