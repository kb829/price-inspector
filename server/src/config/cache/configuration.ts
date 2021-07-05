import { registerAs } from "@nestjs/config";

export default registerAs('redis', () => ({
    env: process.env.APP_ENV,
    name: process.env.APP_NAME,
    host: process.env.REDIS_HOST,
    port: process.env.REDIS_PORT,
    ttl: process.env.CACHE_TTL,
}))