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
exports.Login = void 0;
const google_login_1 = require("../libs/google_login");
const token_1 = require("../libs/token");
const auth_repo_1 = require("../repo/auth.repo");
const user_repo_1 = require("../repo/user.repo");
const Login = (idToken) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const googleUser = yield (0, google_login_1.verifyGoogleToken)(idToken);
        if (!googleUser || !googleUser.email) {
            return {
                message: "Something went wrong.try again later"
            };
        }
        let user = yield (0, user_repo_1.findByEmail)(googleUser.email);
        if (!user) {
            const newUser = {
                userName: googleUser.userName,
                email: googleUser.email,
                profileImage: googleUser.profileImage
            };
            user = yield (0, auth_repo_1.createUserRepo)(newUser);
        }
        const tokens = (0, token_1.generateToken)({
            username: user.userName,
            email: user.email,
            id: user.id
        });
        return {
            message: "Successfully account created",
            accessToken: tokens.accessToken,
            refreshToken: tokens.refreshToken,
            data: {
                email: user.email,
                userName: user.userName,
                profileImage: user.profileImage
            }
        };
    }
    catch (error) {
        console.error("AUTH_SERVICE_ERROR:", error.message);
        return {
            message: "failed to create account.try again later"
        };
        throw error;
    }
});
exports.Login = Login;
