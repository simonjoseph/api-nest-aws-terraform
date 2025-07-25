import { ApiProperty } from "@nestjs/swagger";

export class CreateUserResponseDto {
    @ApiProperty({
        description: 'The unique identifier of the created user',
        example: 'Asds-1234-5678-90ab-cdef12345678',
    })
    public id: string;
}