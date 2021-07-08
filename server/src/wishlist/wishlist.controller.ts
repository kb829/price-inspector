import { Controller, Body, Delete, Get, Post, Put, Param, HttpService, ValidationPipe, UsePipes } from '@nestjs/common';
import { WishlistService } from './wishlist.service';

@Controller('wishlist')
export class WishlistController {
    constructor (
        private readonly wishlistService: WishlistService,
    ) {}

    @Get(':id')
    async getWishlistById(@Param('id') id: string): Promise<any> {
        let res = await this.wishlistService.getWishlist(id);
        return res;
    }
}
