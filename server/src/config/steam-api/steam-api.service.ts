import { HttpService, Injectable, HttpStatus, HttpException } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { response } from 'express';
import { validate } from 'class-validator'
import { FindUserDto } from '../../user/dto/find-user.dto'
import { User } from '../../user/dto/user'

@Injectable()
export class SteamApiService {
    constructor(
        private httpService: HttpService, 
        private configService: ConfigService
    ) {}

    private readonly STEAM_API_KEY = this.configService.get<string>('STEAM_API_KEY');

    async getPlayer(userID: string): Promise<User> {
        let url = 'http://api.steampowered.com/ISteamUser/GetPlayerSummaries/v0002/?key=' + this.STEAM_API_KEY + '&steamids=' + userID;
        const response = await this.httpService.get(url).toPromise();

        let user = new User();

        if(response.data.response.players.length===0){
            // throw new Error('No user id found');
            const _errors = {userID: 'User is not valid.'};
            throw new HttpException({message: 'Input data validation failed', _errors}, HttpStatus.BAD_REQUEST);
        }
        else{
            user.userID = response.data.response.players[0].steamid;
            user.personaName = response.data.response.players[0].personaname;
            user.avatar = response.data.response.players[0].avatar;
            user.visibleState = response.data.response.players[0].communityvisibilitystate;
            
            const errors = await validate(user);

            if(errors.length > 0) {
                const _errors = {userID: 'User is not valid.'};
                throw new HttpException({message: 'Input data validation failed', _errors}, HttpStatus.BAD_REQUEST);
            }

            return user;
        }
    }
}
