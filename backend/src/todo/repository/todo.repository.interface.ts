import { TodoEntity } from '../entities/todo.entity';
import { TodoStatus } from '../enums/todo-status.enum';

export interface TodoRepository {
  create(todo: Partial<TodoEntity>): Promise<TodoEntity>;
  findAll(status?: TodoStatus): Promise<TodoEntity[]>;
  findById(id: string): Promise<TodoEntity | null>;
  update(id: string, data: Partial<TodoEntity>): Promise<TodoEntity>;
  delete(id: string): Promise<void>;
}
