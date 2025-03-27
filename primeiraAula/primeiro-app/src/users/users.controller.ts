import { Controller, Get } from '@nestjs/common';
import { UsersService } from './users.service';

@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Get()
  findAllTasks() {
    return this.usersService.findAll();
  }

  @Get('1')
  findOneTasks() {
    return this.usersService.findOne();
  }
}
