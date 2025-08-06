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
exports.getTopLikedAnime = exports.deleteAnime = exports.updateAnime = exports.getAnimeById = exports.getAllAnimeByCategory = exports.createAnime = void 0;
const prisma_1 = require("../config/prisma");
const createAnime = (create_anime) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const anime = yield prisma_1.prisma.anime.create({
            data: {
                title: create_anime.title,
                description: create_anime.description,
                coverImage: create_anime.category,
                category: create_anime.category
            }
        });
        return anime;
    }
    catch (error) {
        console.log("REPO_CREATE_ANIME_ERROR:", error.message);
        throw error;
    }
});
exports.createAnime = createAnime;
const getAllAnimeByCategory = (category) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const anime = yield prisma_1.prisma.anime.findMany({
            where: category ? { category } : {}
        });
        return anime;
    }
    catch (error) {
        console.log("REPO_GET_ALL_ANIME_ERROR:", error.message);
        throw error;
    }
});
exports.getAllAnimeByCategory = getAllAnimeByCategory;
const getAnimeById = (id) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const anime = yield prisma_1.prisma.anime.findMany({
            where: {
                id: id
            },
            include: { Episode: true }
        });
        return anime;
    }
    catch (error) {
        console.log("REPO_GET_ANIME_ERROR:", error.message);
        throw error;
    }
});
exports.getAnimeById = getAnimeById;
const updateAnime = (animeId, update_anime) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const updatedAnime = yield prisma_1.prisma.anime.update({
            where: { id: animeId },
            data: update_anime
        });
        return updatedAnime;
    }
    catch (error) {
        console.log("REPO_UPDATE_ANIME_ERROR:", error.message);
        throw error;
    }
});
exports.updateAnime = updateAnime;
const deleteAnime = (animeId) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        yield prisma_1.prisma.anime.delete({
            where: { id: animeId }
        });
        return {
            message: "Anime deleted"
        };
    }
    catch (error) {
        console.log("REPO_DELETE_ANIME_ERROR:", error.message);
        throw error;
    }
});
exports.deleteAnime = deleteAnime;
const getTopLikedAnime = (...args_1) => __awaiter(void 0, [...args_1], void 0, function* (limit = 10) {
    try {
        const topAnime = yield prisma_1.prisma.anime.findMany({
            orderBy: {
                likeCount: "desc"
            },
            take: limit
        });
        return topAnime;
    }
    catch (error) {
        console.log("REPO_TOP_LIKED_ERROR:", error.message);
        throw error;
    }
});
exports.getTopLikedAnime = getTopLikedAnime;
