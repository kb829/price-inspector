import { Controller, Body, Delete, Get, Post, Put, Param, HttpService, ValidationPipe, UsePipes } from '@nestjs/common';
import { UserService } from './user.service';
import { User } from './dto/user'

@Controller('user')
export class UserController {
    constructor(
        private readonly userService: UserService
    ) {}

    @Get(':id')
    async getUserById(@Param('id') id: string): Promise<User> {
        let res = await this.userService.getProfile(id);
        return res;
    }
}
