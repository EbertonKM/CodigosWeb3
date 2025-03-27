import { Controller, Get } from '@nestjs/common';
import { TeachersService } from './teachers.service';

@Controller('teachers')
export class TeachersController {
  constructor(private readonly teachersService: TeachersService) {}

  @Get()
  findAllTasks() {
    return this.teachersService.findAll();
  }

  @Get('1')
  findOneTasks() {
    return this.teachersService.findOne();
  }
}
