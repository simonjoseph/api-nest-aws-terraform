import { Body, Controller, Post } from "@nestjs/common";
import { CreateUserRequestDTO } from "./dto/CreateUserRequest.dto";
import { CreateUserResponseDto } from "./dto/CreateUserResponse.dto";
import { ApiResponse, ApiTags } from "@nestjs/swagger";

@ApiTags('users')
@Controller('users')
export class UsersController{

    @Post()
    @ApiResponse({
        status: 201,
        description: 'User created successfully',
        type: CreateUserResponseDto
    })
    public async createUser(@Body() createUserBody: CreateUserRequestDTO): Promise<CreateUserResponseDto> {
        console.log('Creating user with body:', createUserBody);
        return {id: 'true'}
    }
}