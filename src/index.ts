import express, { Request, Response } from "express"
import { envField } from "./config/env"
import authRouter from "./routes/auth.route"
import userRouter from "./routes/user.route"
import animeRouter from "./routes/anime.route"
const app = express()
app.use(express.json())
app.get("/", (req: Request, res: Response) => {
    res.status(200).json({
        message: "hello"
    })
})
app.use("/auth", authRouter)
app.use("/user", userRouter)
app.use("/anime", animeRouter)
app.listen(envField.PORT, () => {
    console.log(`Server is running on port ${envField.PORT}`)
})