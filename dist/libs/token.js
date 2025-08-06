"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.verifyRefreshToken = exports.verifyAccessToken = exports.generateToken = void 0;
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const env_1 = require("../config/env");
const generateToken = (payload) => {
    const accessToken = jsonwebtoken_1.default.sign(payload, env_1.envField.JWT_ACCESS_TOKEN, { expiresIn: '15m' });
    const refreshToken = jsonwebtoken_1.default.sign(payload, env_1.envField.JWT_REFRESH_TOKEN, { expiresIn: "90d" });
    return {
        accessToken,
        refreshToken
    };
};
exports.generateToken = generateToken;
const verifyAccessToken = (token) => {
    const decode = jsonwebtoken_1.default.verify(token, env_1.envField.JWT_ACCESS_TOKEN);
    return decode;
};
exports.verifyAccessToken = verifyAccessToken;
const verifyRefreshToken = (token) => {
    const decode = jsonwebtoken_1.default.verify(token, env_1.envField.JWT_REFRESH_TOKEN);
    return decode;
};
exports.verifyRefreshToken = verifyRefreshToken;
