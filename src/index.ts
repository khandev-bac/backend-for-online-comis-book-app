import express, { Request, Response } from "express"
import { envField } from "./config/env"
const app = express()
app.use(express.json())
app.get("/", (req: Request, res: Response) => {
    res.status(200).json({
        message: "hello"
    })
})
app.listen(envField.PORT, () => {
    console.log(`Server is running on port ${envField.PORT}`)
})