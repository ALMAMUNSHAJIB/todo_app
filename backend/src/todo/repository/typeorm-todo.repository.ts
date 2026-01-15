import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { TodoRepository } from './todo.repository.interface';
import { TodoStatus } from '../enums/todo-status.enum';
import { TodoEntity } from '../entities/todo.entity';

export class TypeormTodoRepository implements TodoRepository {
  constructor(
    @InjectRepository(TodoEntity)
    private readonly repo: Repository<TodoEntity>,
  ) {}

  create(todo: Partial<TodoEntity>) {
    return this.repo.save(todo);
  }

  findAll(status?: TodoStatus) {
    return this.repo.find({
      where: status ? { status } : {},
      order: { createdAt: 'DESC' },
    });
  }

  findById(id: string) {
    return this.repo.findOne({ where: { id } });
  }

async update(
  id: string,
  data: Partial<TodoEntity>,
): Promise<TodoEntity> {
  const todo = await this.findById(id);

  if (!todo) {
    throw new Error('Todo not found');
  }

  await this.repo.update(id, data);

  return {
    ...todo,
    ...data,
  };
}


  async delete(id: string) {
    await this.repo.delete(id);
  }
}
