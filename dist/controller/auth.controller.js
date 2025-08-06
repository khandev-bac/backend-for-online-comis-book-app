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
exports.LoginController = exports.check = void 0;
const auth_service_1 = require("../service/auth.service");
const check = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    res.status(200).json({
        message: "ok server is fine"
    });
});
exports.check = check;
const LoginController = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { idToken } = req.body;
        if (!idToken) {
            return res.status(400).json({ message: "idToken is required" });
        }
        const val = yield (0, auth_service_1.Login)(idToken);
        return res.status(200).json({
            message: val.message,
            accessToken: val.accessToken,
            refreshToken: val.refreshToken,
            user: val.data
        });
    }
    catch (error) {
        console.error("LOGIN_CONTROLLER_ERROR:", error);
        return res.status(500).json({ message: "Login failed", error: error.message });
    }
});
exports.LoginController = LoginController;
