import { Controller, Body, Delete, Get, Post, Put, Param } from '@nestjs/common';
import { SteamApiService } from './steam-api.service'
import { User } from '../../user/user'

@Controller('steam-api')
export class SteamApiController {
    constructor(private readonly steamApiService: SteamApiService) {}

    @Get()
    async find(@Param('id') id: string): Promise<User> {
        return this.steamApiService.findUser(id);
    }

    // post, put, delete needed
}