import { IsNotEmpty, IsNumberString, IsOptional, IsString, IsNumber } from 'class-validator';

export class Game {
    @IsNotEmpty()
    @IsNumber()
    id: number;

    @IsNotEmpty()
    @IsString()
    name: string;

    @IsNotEmpty()
    @IsString()
    icon: string;

    @IsNotEmpty()
    @IsNumber()
    price: number;

    @IsNotEmpty()
    @IsNumber()
    discount_pct: number;

    @IsNotEmpty()
    @IsNumber()
    priority: number;
}
