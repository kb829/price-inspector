import { HttpService, Injectable, HttpStatus, HttpException } from '@nestjs/common';
import { validate } from 'class-validator';
import { SteamAPIConfigService } from 'src/config/steam-api/config.service';
import { User } from '../../user/dto/user';
import { Wishlist } from '../../wishlist/dto/wishlist';
import { Game } from '../../wishlist/dto/game';

@Injectable()
export class SteamApiService {
    constructor(
        private httpService: HttpService,
        private steamAPIConfigService: SteamAPIConfigService,
    ) {}

    private readonly STEAM_API_KEY = this.steamAPIConfigService.apiKey;

    async getPlayer(userID: string): Promise<User> {
        let url = 'http://api.steampowered.com/ISteamUser/GetPlayerSummaries/v0002/?key=' + this.STEAM_API_KEY + '&steamids=' + userID;
        const response = await this.httpService.get(url).toPromise();

        let user = new User();

        if(response.data.response.players.length===0){
            // throw new Error('No user id found');
            const _errors = {userID: 'User ID is not valid.'};
            throw new HttpException({message: 'User ID Invalid.', _errors}, HttpStatus.BAD_REQUEST);
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

    async getWishlist(userID: string): Promise<Wishlist>{
        let url = 'https://store.steampowered.com/wishlist/profiles/' + userID + '/wishlistdata/';
        const response = await this.httpService.get(url).toPromise();

        let wishlist = new Wishlist();

        if(response.data.success===2){
            const _errors = {userID: 'User ID is not valid.'};
            throw new HttpException({message: 'User ID Invalid', _errors}, HttpStatus.BAD_REQUEST);
        }
        else{
            for (let key in response.data) {
                let game = new Game();

                if(response.data[key].subs.length===0) {
                    game.id = Number(key);
                    game.price = -1;        // In this case, could not find price of it
                    game.discount_pct = -1; // In this case, could not find discount percent of it
                }
                else{
                    game.id = response.data[key].subs[0].id;
                    game.price = (response.data[key].subs[0].price)/100;
                    game.discount_pct = response.data[key].subs[0].discount_pct;
                }

                game.name = response.data[key].name;
                game.icon = response.data[key].capsule;
                game.priority = response.data[key].priority;
                
                wishlist.games.push(game);
            }

            return wishlist;
        }
    }
}
