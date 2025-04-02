import { Body, Controller, Delete, Get, Param, Patch, Post, Query } from '@nestjs/common';
import { TeachersService } from './teachers.service';
import { CreateTeacherDto } from './dto/create-teacher.dto';
import { UpdateTeacherDto } from './dto/update-teacher.dto';

@Controller('teachers')
export class TeachersController {
  constructor(private readonly teachersService: TeachersService) {}

  @Get()
      findAllTasks(@Query() queryParam: any) {
        return this.teachersService.findAll();
      }
    
      @Get(':id')
      findOneTasks(@Param('id') id: string) {
        return this.teachersService.findOne(id);
      }
    
      @Post()
      createTasks(@Body() createTeacherDto: CreateTeacherDto) {
        return this.teachersService.create(createTeacherDto);
      }
    
      @Patch(':id')
      updateTask(@Param('id') id: string, @Body() updateTeacherDto: UpdateTeacherDto) {
        return this.teachersService.update(id, updateTeacherDto);
      }
    
      @Delete(':id')
      removeTask(@Param('id') id: string) {
        return this.teachersService.remove(id);
      }
}
