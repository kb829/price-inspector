import { Controller, Body, Delete, Get, Post, Put, Param, HttpService } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { SteamApiService } from './steam-api.service'
import { User } from '../../user/user'

@Controller('steam-api')
export class SteamApiController {
    constructor(
        private readonly steamApiService: SteamApiService,
        private httpService: HttpService, 
        private configService: ConfigService,
        ) {}

        private readonly STEAM_API_KEY = this.configService.get<string>('STEAM_API_KEY');

    @Get('/ID/:id')
    async findID(@Param('id') id: string): Promise<any> {
        let url = 'http://api.steampowered.com/ISteamUser/GetPlayerSummaries/v0002/?key='+ this.STEAM_API_KEY +'&steamids='+id;
        const response = await this.httpService.get(url).toPromise();

        return response.data;
    }

    @Get('/WL/:id')
    async findWL(@Param('id') id: string): Promise<any> {
        let url = 'https://store.steampowered.com/wishlist/profiles/'+id+'/wishlistdata/';
        const response = await this.httpService.get(url).toPromise();

        return response.data;
    }
}