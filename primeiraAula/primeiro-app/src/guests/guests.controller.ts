import { Body, Controller, Delete, Get, Param, Patch, Post, Query } from '@nestjs/common';
import { GuestsService } from './guests.service';
import { CreateGuestDto } from './dto/create-guest.dto';
import { UpdateGuestDto } from './dto/update-guest.dto';

@Controller('guests')
export class GuestsController {
  constructor(private readonly guestsService: GuestsService) {}

  @Get()
    findAllTasks(@Query() queryParam: any) {
      return this.guestsService.findAll();
    }
  
    @Get(':id')
    findOneTasks(@Param('id') id: string) {
      return this.guestsService.findOne(id);
    }
  
    @Post()
    createTasks(@Body() createGuestDto: CreateGuestDto) {
      return this.guestsService.create(createGuestDto);
    }
  
    @Patch(':id')
    updateTask(@Param('id') id: string, @Body() updateGuestDto: UpdateGuestDto) {
      return this.guestsService.update(id, updateGuestDto);
    }
  
    @Delete(':id')
    removeTask(@Param('id') id: string) {
      return this.guestsService.remove(id);
    }
}
