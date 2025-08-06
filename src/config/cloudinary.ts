import { v2 as cloudinary } from "cloudinary"
import { envField } from "./env";

cloudinary.config({
    cloud_name: envField.CLOUD_NAME,
    api_key: envField.CLOUD_API_KEY,
    api_secret: envField.CLOUD_API_SECERT,
})
export default cloudinary;