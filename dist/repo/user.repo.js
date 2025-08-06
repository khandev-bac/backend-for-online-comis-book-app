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
exports.hasUserLiked = exports.getUserLikedAnime = exports.unLikeanime = exports.likeanime = exports.findByEmail = exports.findById = void 0;
const prisma_1 = require("../config/prisma");
const findById = (id) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const user = yield prisma_1.prisma.user.findUnique({
            where: { id: id }
        });
        return user;
    }
    catch (error) {
        console.log("REPO_USER_ERROR: ", error.message);
        throw error;
    }
});
exports.findById = findById;
const findByEmail = (email) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const user = yield prisma_1.prisma.user.findUnique({
            where: { email: email }
        });
        return user;
    }
    catch (error) {
        console.log("REPO_USER_ERROR: ", error.message);
        throw error;
    }
});
exports.findByEmail = findByEmail;
//like anime by user 
const likeanime = (userId, animeId) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        yield prisma_1.prisma.userLiked.create({
            data: {
                userId: userId,
                animeId: animeId
            }
        });
        yield prisma_1.prisma.anime.update({
            where: { id: userId },
            data: {
                likeCount: {
                    increment: 1,
                }
            }
        });
        return {
            message: "Liked"
        };
    }
    catch (error) {
        if (error.code === "P2002") {
            throw new Error("Anime already liked by user");
        }
        console.log("REPO_LIKE_ERROR:", error.message);
        throw error;
    }
});
exports.likeanime = likeanime;
const unLikeanime = (userId, animeId) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        yield prisma_1.prisma.userLiked.delete({
            where: {
                userId_animeId: {
                    userId: userId,
                    animeId: animeId
                }
            }
        });
        yield prisma_1.prisma.anime.update({
            where: { id: animeId },
            data: {
                likeCount: {
                    decrement: 1
                }
            }
        });
        return { message: "Unlike" };
    }
    catch (error) {
        console.log("REPO_UNLIKE_ERROR:", error.message);
    }
});
exports.unLikeanime = unLikeanime;
const getUserLikedAnime = (userId) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        return yield prisma_1.prisma.userLiked.findMany({
            where: { userId: userId },
            include: { anime: true }
        });
    }
    catch (error) {
        console.log("REPO_LIKED_ERROR:", error.message);
        throw error;
    }
});
exports.getUserLikedAnime = getUserLikedAnime;
const hasUserLiked = (userId, animeId) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const like = yield prisma_1.prisma.userLiked.findUnique({
            where: {
                userId_animeId: {
                    userId: userId,
                    animeId: animeId
                }
            }
        });
        return !!like;
    }
    catch (error) {
        console.log("REPO_HAS_LIKED_ERROR:", error.message);
        throw error;
    }
});
exports.hasUserLiked = hasUserLiked;
