import { registerAs } from "@nestjs/config";

export default registerAs('steamAPI', () => ({
    steam_api_key: process.env.STEAM_API_KEY,
}))