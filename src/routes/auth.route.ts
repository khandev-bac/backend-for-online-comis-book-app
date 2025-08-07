import { Router } from "express";
import { check, checkUser, LoginController } from "../controller/auth.controller";
const route = Router()
route.get("/check", check)
route.get("/check-user", checkUser)
route.post("/google-login", LoginController)
export default route;