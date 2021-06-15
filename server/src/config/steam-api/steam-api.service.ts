import { HttpService, Injectable } from '@nestjs/common';
import { User } from '../../user/user'
import { ConfigModule, ConfigService } from '@nestjs/config';
import { response } from 'express';

@Injectable()
export class SteamApiService {
    constructor(private httpService: HttpService, private configService: ConfigService) {}

    private readonly STEAM_API_KEY = this.configService.get<string>('STEAM_API_KEY');

    findUser(userID: string) {

        // need api call
        // if(){
        //     return 
        // }

        throw new Error('No user id found');
    }
}
