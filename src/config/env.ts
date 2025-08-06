import "dotenv/config"
function getEnv(key: string): string {
    const val = process.env[key]
    if (!val) {
        throw new Error(`Missing required env variable: ${key}`);
    }
    return val
}
export const envField = {
    PORT: getEnv("PORT"),
    CLOUD_NAME: getEnv("CLOUD_NAME"),
    CLOUD_API_KEY: getEnv("CLOUD_API_KEY"),
    CLOUD_API_SECERT: getEnv("CLOUD_API_SECERT"),
    DATABASE_URL: getEnv("DATABASE_URL")
}