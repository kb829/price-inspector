import { IsNotEmpty, IsNumberString } from 'class-validator';

export class  FindUserDto {
    @IsNotEmpty()
    readonly userID: string;
}