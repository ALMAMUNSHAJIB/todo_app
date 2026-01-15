import {
  IsString,
  IsNotEmpty,
  IsOptional,
  IsEnum,
} from 'class-validator';
import { TodoStatus } from '../enums/todo-status.enum';

export class CreateTodoDto {
  @IsString()
  @IsNotEmpty()
  title: string;

  @IsOptional()
  @IsString()
  description?: string;

  @IsOptional()
  @IsEnum(TodoStatus, {
    message: `status must be one of: ${Object.values(TodoStatus).join(', ')}`,
  })
  status?: TodoStatus;
}
