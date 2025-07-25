import { Body, Controller, Post } from "@nestjs/common";
import { CreateUserRequestDTO } from "./dto/CreateUserRequest.dto";
import { CreateUserResponseDto } from "./dto/CreateUserResponse.dto";
import { ApiResponse, ApiTags } from "@nestjs/swagger";
import { UsersService } from "@root/service/users.service";

@ApiTags('users')
@Controller('users')
export class UsersController{
    constructor(private readonly usersService: UsersService) {}

    @Post()
    @ApiResponse({
        status: 201,
        description: 'User created successfully',
        type: CreateUserResponseDto
    })
    public async createUser(@Body() createUserBody: CreateUserRequestDTO): Promise<CreateUserResponseDto> {
        const createdUserId = await this.usersService.createUser({
            name: createUserBody.name,
            email: createUserBody.email,
            password: createUserBody.password
        })
        
        return new CreateUserResponseDto(createdUserId);
    }
}