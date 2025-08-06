import { Router } from "express";
import { LoginController } from "../controller/auth.controller";
const route = Router()
route.post("/google-login", LoginController)
export default route;