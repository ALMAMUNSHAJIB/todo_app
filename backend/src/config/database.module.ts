import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserEntity } from 'src/auth/user.entity';
import { TodoEntity } from 'src/todo/entities/todo.entity';

@Module({
  imports: [
  TypeOrmModule.forRoot({
  type: 'mysql',
  host: process.env.DB_HOST,
  port: Number(process.env.DB_PORT),
  username: process.env.DB_USER,
  password: process.env.DB_PASS,
  database: process.env.DB_NAME,
  entities: [__dirname + '/**/*.entity{.ts,.js}'],
  synchronize: true, // 🔥 IMPORTANT (dev only)
})

  ],
})
export class DatabaseModule {}
