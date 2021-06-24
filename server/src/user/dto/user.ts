import { IsNotEmpty, IsNumberString, IsOptional, IsString, IsNumber } from 'class-validator';

export class User {
    @IsNotEmpty()
    @IsNumberString()
    userID: string;

    @IsString()
    @IsOptional()
    personaName: string;

    @IsString()
    @IsOptional()
    avatar: string;

    @IsNumber()
    @IsOptional()
    visibleState: number;
}
