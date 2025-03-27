import { Controller, Get } from '@nestjs/common';
import { GuestsService } from './guests.service';

@Controller('guests')
export class GuestsController {
  constructor(private readonly guestsService: GuestsService) {}

  @Get()
  findAllTasks() {
    return this.guestsService.findAll();
  }

  @Get('1')
  findOneTasks() {
    return this.guestsService.findOne();
  }
}
