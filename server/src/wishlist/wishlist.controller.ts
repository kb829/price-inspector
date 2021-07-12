import { Controller, Body, Delete, Get, Post, Put, Param, HttpService, ValidationPipe, UsePipes } from '@nestjs/common';
import { Wishlist } from './dto/wishlist';
import { WishlistService } from './wishlist.service';

@Controller('wishlist')
export class WishlistController {
    constructor (
        private readonly wishlistService: WishlistService,
    ) {}

    @Get(':id')
    @UsePipes(new ValidationPipe({ transform: true }))
    async getWishlistById(@Param('id') id: string): Promise<Wishlist> {
        let res = await this.wishlistService.getWishlist(id);
        return res;
    }
}
