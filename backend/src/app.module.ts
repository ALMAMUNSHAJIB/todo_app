import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TodoModule } from './todo/todo.module';
import { DatabaseModule } from './config/database.module';
import { ConfigModule } from '@nestjs/config';
import { AuthModule } from './auth/auth.module';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      envFilePath: '.env',
    }),
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: process.env.DB_HOST,
      port: Number(process.env.DB_PORT),
      username: process.env.DB_USER,
      password: process.env.DB_PASS,
      database: process.env.DB_NAME,

      // 🔥 THIS IS NON-NEGOTIABLE
      entities: [__dirname + '/**/*.entity{.ts,.js}'],

      synchronize: true,
      logging: true,
    }),
    DatabaseModule,
    TodoModule,
    AuthModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
