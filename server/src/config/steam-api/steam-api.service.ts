import { HttpService, Injectable } from '@nestjs/common';
import { User } from '../../user/user'
import { ConfigModule, ConfigService } from '@nestjs/config';

@Injectable()
export class SteamApiService {
    constructor(private httpService: HttpService, private configService: ConfigService) {}
    private readonly user: User = {
        userID: '76561197960435530',
    }

    private readonly STEAM_API_KEY = this.configService.get<string>('STEAM_API_KEY');

    findUser(userID: string): User{
        let url = 'http://api.steampowered.com/ISteamUser/GetPlayerSummaries/v0002/?key='+ this.STEAM_API_KEY +'&steamids='+userID;

        const ret = this.httpService.get(url);

        // need api call
        // if(){
        //     return 
        // }

        throw new Error('No user id found');
    }
}
