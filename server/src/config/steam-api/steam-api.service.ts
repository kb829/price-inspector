import { Injectable } from '@nestjs/common';
import { User } from '../../user/user'

@Injectable()
export class SteamApiService {
    private readonly user: User = {
        userID: 'test1',
    }

    findUser(userID: string): User{
        let url = 'http://api.steampowered.com/ISteamUser/GetPlayerSummaries/v0002/?key='+'STEAM_API_KEY'+'&steamids='+userID;

        // need api call
        // if(){
        //     return 
        // }

        throw new Error('No user id found');
    }
}
