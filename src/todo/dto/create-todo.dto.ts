import { IsString, IsNotEmpty, IsOptional } from 'class-validator';

export class CreateTodoDto {
    @IsNotEmpty()
    public name: string;

    @IsNotEmpty()
    public status: string;

    @IsOptional()
    priority: string;
}
