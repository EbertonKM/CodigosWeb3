import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TasksModule } from 'src/tasks/tasks.module';
import { GuestsModule } from 'src/guests/guests.module';
import { TeachersModule } from 'src/teachers/teachers.module';
import { UsersModule } from 'src/users/users.module';

@Module({
  imports: [TasksModule, GuestsModule, TeachersModule, UsersModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
