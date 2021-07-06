import { registerAs } from "@nestjs/config";

export default registerAs('redis', () => ({
    steam_api_key: process.env.STEAM_API_KEY,
}))