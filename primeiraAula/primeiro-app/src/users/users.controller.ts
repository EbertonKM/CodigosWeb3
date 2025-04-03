import { Body, Controller, Delete, Get, Param, ParseIntPipe, Patch, Post, Query } from '@nestjs/common';
import { UsersService } from './users.service';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';

@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Get()
      findAllTasks(@Query() queryParam: any) {
        return this.usersService.findAll();
      }
    
      @Get(':id')
      findOneTasks(@Param('id', ParseIntPipe) id: number) {
        return this.usersService.findOne(id);
      }
    
      @Post()
      createTasks(@Body() createUserDto: CreateUserDto) {
        return this.usersService.create(createUserDto);
      }
    
      @Patch(':id')
      updateTask(@Param('id', ParseIntPipe) id: number, @Body() updateUserDto: UpdateUserDto) {
        return this.usersService.update(id, updateUserDto);
      }
    
      @Delete(':id')
      removeTask(@Param('id', ParseIntPipe) id: number) {
        return this.usersService.remove(id);
      }
}
