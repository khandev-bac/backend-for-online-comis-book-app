"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.envField = void 0;
require("dotenv/config");
function getEnv(key) {
    const val = process.env[key];
    if (!val) {
        throw new Error(`Missing required env variable: ${key}`);
    }
    return val;
}
exports.envField = {
    PORT: getEnv("PORT"),
    CLOUD_NAME: getEnv("CLOUD_NAME"),
    CLOUD_API_KEY: getEnv("CLOUD_API_KEY"),
    CLOUD_API_SECERT: getEnv("CLOUD_API_SECERT"),
    DATABASE_URL: getEnv("DATABASE_URL"),
    GOOGLE_CLIENT_ID: getEnv("GOOGLE_CLIENT_ID"),
    JWT_ACCESS_TOKEN: getEnv("JWT_ACCESS_TOKEN"),
    JWT_REFRESH_TOKEN: getEnv("JWT_REFRESH_TOKEN"),
};
