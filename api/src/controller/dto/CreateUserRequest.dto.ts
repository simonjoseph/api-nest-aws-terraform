import { ApiProperty } from "@nestjs/swagger";
import { IsEmail, IsNotEmpty } from "class-validator";

export class CreateUserRequestDTO {
    @ApiProperty({description: 'The name of the user', example: 'John Doe'})
    @IsNotEmpty()
    public name: string;
    
    @ApiProperty({description: 'The email of the user', example: 'test@test.com'})
    @IsNotEmpty()
    @IsEmail()
    public email: string;

    @ApiProperty({description: 'The password of the user', example: 'password123'})
    @IsNotEmpty()
    public password: string;
}