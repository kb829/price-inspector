import { HttpService, Injectable } from '@nestjs/common';
import { User } from '../../user/dto/user'
import { ConfigModule, ConfigService } from '@nestjs/config';
import { response } from 'express';

@Injectable()
export class SteamApiService {
    constructor(private httpService: HttpService, private configService: ConfigService) {}

    private readonly STEAM_API_KEY = this.configService.get<string>('STEAM_API_KEY');

    async getPlayer(userID: string) {
        let url = 'http://api.steampowered.com/ISteamUser/GetPlayerSummaries/v0002/?key='+ this.STEAM_API_KEY +'&steamids='+userID;
        const response = await this.httpService.get(url).toPromise();

        return response.data;
        // need api call
        // if(){
        //     return 
        // }

        throw new Error('No user id found');
    }
}
