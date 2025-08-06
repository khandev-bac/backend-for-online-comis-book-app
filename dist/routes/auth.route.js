"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const auth_controller_1 = require("../controller/auth.controller");
const route = (0, express_1.Router)();
route.get("/check", auth_controller_1.check);
route.post("/google-login", auth_controller_1.LoginController);
exports.default = route;
