"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const env_1 = require("./config/env");
const auth_route_1 = __importDefault(require("./routes/auth.route"));
const user_route_1 = __importDefault(require("./routes/user.route"));
const anime_route_1 = __importDefault(require("./routes/anime.route"));
const episode_route_1 = __importDefault(require("./routes/episode.route"));
const app = (0, express_1.default)();
app.use(express_1.default.json());
app.get("/", (req, res) => {
    res.status(200).json({
        message: "hello"
    });
});
app.use("/auth", auth_route_1.default);
app.use("/user", user_route_1.default);
app.use("/anime", anime_route_1.default);
app.use("/episode", episode_route_1.default);
app.listen(env_1.envField.PORT, () => {
    console.log(`Server is running on port ${env_1.envField.PORT}`);
});
