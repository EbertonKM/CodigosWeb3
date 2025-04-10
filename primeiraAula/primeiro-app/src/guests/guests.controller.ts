import { Body, Controller, Delete, Get, Param, ParseIntPipe, Patch, Post, Query } from '@nestjs/common';
import { GuestsService } from './guests.service';
import { CreateGuestDto } from './dto/create-guest.dto';
import { UpdateGuestDto } from './dto/update-guest.dto';
import { PaginationDto } from 'src/common/dto/pagination.dto';

@Controller('guests')
export class GuestsController {
  constructor(private readonly guestsService: GuestsService) {}

  @Get()
    findAllTasks(@Query() paginationDto: PaginationDto) {
      return this.guestsService.findAll(paginationDto);
    }
  
    @Get(':id')
    findOneTasks(@Param('id', ParseIntPipe) id: number) {
      return this.guestsService.findOne(id);
    }
  
    @Post()
    createTasks(@Body() createGuestDto: CreateGuestDto) {
      return this.guestsService.create(createGuestDto);
    }
  
    @Patch(':id')
    updateTask(@Param('id', ParseIntPipe) id: number, @Body() updateGuestDto: UpdateGuestDto) {
      return this.guestsService.update(id, updateGuestDto);
    }
  
    @Delete(':id')
    removeTask(@Param('id', ParseIntPipe) id: number) {
      return this.guestsService.remove(id);
    }
}
