import { Router } from "express";
import { check, LoginController } from "../controller/auth.controller";
const route = Router()
route.get("/check", check)
route.post("/google-login", LoginController)
export default route;