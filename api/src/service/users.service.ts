import { Injectable } from "@nestjs/common";

interface CreateUserParams{
    name: string;
    email: string;
    password: string;
}

@Injectable()
export class UsersService {
    public async createUser(params: CreateUserParams): Promise<string> {
        return 'Asds-1234-5678-90ab-cdef12345678';
    }
}
