import { Controller, Body, Delete, Get, Post, Put, Param, HttpService, ValidationPipe, UsePipes } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { SteamApiService } from './steam-api.service'
import { User } from '../../user/dto/user'
import { Wishlist } from '../../user/dto/wishlist'

@Controller('steam-api')
export class SteamApiController {
    constructor(
        private readonly steamApiService: SteamApiService,
        private httpService: HttpService, 
        private configService: ConfigService,
        ) {}

        private readonly STEAM_API_KEY = this.configService.get<string>('STEAM_API_KEY');

    @UsePipes(new ValidationPipe())
    @Get('/ID/:id')
    async findID(@Param('id') id: string): Promise<User> {
        let res = await this.steamApiService.getPlayer(id);
        // let url = 'http://api.steampowered.com/ISteamUser/GetPlayerSummaries/v0002/?key='+ this.STEAM_API_KEY +'&steamids='+id;
        // const response = await this.httpService.get(url).toPromise();
        return res;
    }

    @Get('/WL/:id')
    async findWL(@Param('id') id: string): Promise<any> {
        let url = 'https://store.steampowered.com/wishlist/profiles/'+id+'/wishlistdata/';
        const response = await this.httpService.get(url).toPromise();

        return response.data;
    }

    // @UsePipes(new ValidationPipe())
    // @Post('')
    // async someAPI(@Body() dto:Dto): Promise<any> {

    // }
}