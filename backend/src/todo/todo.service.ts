import { Inject, Injectable, NotFoundException } from '@nestjs/common';
import { TodoStatus } from './enums/todo-status.enum';
import { TODO_REPOSITORY } from './repository/todo.repository.token';
import type { TodoRepository } from './repository/todo.repository.interface';
@Injectable()
export class TodoService {
constructor(
    @Inject(TODO_REPOSITORY)
    private readonly todoRepo: TodoRepository,
  ) {}

  create(data) {
    return this.todoRepo.create(data);
  }

  findAll(status?: TodoStatus) {
    return this.todoRepo.findAll(status);
  }

  async findOne(id: string) {
    const todo = await this.todoRepo.findById(id);
    if (!todo) throw new NotFoundException('Todo not found');
    return todo;
  }

  update(id: string, data) {
    return this.todoRepo.update(id, data);
  }

  delete(id: string) {
    return this.todoRepo.delete(id);
  }
}
