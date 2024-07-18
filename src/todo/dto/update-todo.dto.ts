import { PartialType } from '@nestjs/mapped-types';
import { CreateTodoDto } from './create-todo.dto';
import { IsNotEmpty, IsOptional } from 'class-validator';

export class UpdateTodoDto extends PartialType(CreateTodoDto) {
    @IsNotEmpty()
    public name: string;

    @IsNotEmpty()
    public status: string;

    @IsOptional()
    priority: string;
}
