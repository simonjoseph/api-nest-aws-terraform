import { Controller, Post } from "@nestjs/common";

@Controller('users')
export class UsersController{

    @Post()
    public async getUsers(): Promise<any> {
        return {ok: true}
    }
}