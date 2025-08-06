import { Request } from "express"
import multer from "multer"
const storage = multer.memoryStorage()
const fileFillter = (req: Request, file: Express.Multer.File, cb: multer.FileFilterCallback) => {
    if (
        file.mimetype === "image/jpeg" ||
        file.mimetype === "image/png" ||
        file.mimetype === "image/webp"
    ) {
        cb(null, true)
    } else {
        cb(new Error('Unsupported file type. Only JPEG, PNG, and WEBP are allowed.'))
    }
}
export const uploadMulter = multer({ storage, fileFilter: fileFillter })