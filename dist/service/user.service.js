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
exports.getAllLikedService = exports.likeToggleService = void 0;
const user_repo_1 = require("../repo/user.repo");
const likeToggleService = (userId, animeId) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const alreadyLiked = yield (0, user_repo_1.hasUserLiked)(userId, animeId);
        if (alreadyLiked) {
            yield (0, user_repo_1.unLikeanime)(userId, animeId);
            return {
                liked: false
            };
        }
        else {
            yield (0, user_repo_1.likeanime)(userId, animeId);
            return {
                liked: true
            };
        }
    }
    catch (error) {
        console.log(error);
    }
});
exports.likeToggleService = likeToggleService;
const getAllLikedService = (userId) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const favi = yield (0, user_repo_1.getUserLikedAnime)(userId);
        return {
            message: "added to favourite list ",
            favi
        };
    }
    catch (error) {
        console.log(error);
        return {
            message: "failed to added in your favourite list",
        };
    }
});
exports.getAllLikedService = getAllLikedService;
