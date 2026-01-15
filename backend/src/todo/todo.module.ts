import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { TodoService } from './todo.service';
import { TodoController } from './todo.controller';
import { TypeormTodoRepository } from './repository/typeorm-todo.repository';
import { TodoEntity } from './entities/todo.entity';
import { TODO_REPOSITORY } from './repository/todo.repository.token';

@Module({
  imports: [TypeOrmModule.forFeature([TodoEntity])],
  controllers: [TodoController],
  providers: [
    TodoService,
    {
      provide: TODO_REPOSITORY,
      useClass: TypeormTodoRepository,
    },
  ],
})
export class TodoModule {}
