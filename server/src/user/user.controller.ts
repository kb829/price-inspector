import { Controller, Body, Delete, Get, Post, Put, Param, HttpService, ValidationPipe, UsePipes } from '@nestjs/common';
import { UserService } from './user.service';

@Controller('user')
export class UserController {
    constructor(
        private readonly userService: UserService
    ) {}

    @Get(':id')
    async getUserById(@Param('id') id: string): Promise<any> {
        // to do - get user id from steam api
    }
}
