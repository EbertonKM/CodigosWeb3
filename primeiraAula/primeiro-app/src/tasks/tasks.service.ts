import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { CreateTaskDto } from 'src/tasks/dto/create-task.dto';
import { UpdateTaskDto } from 'src/tasks/dto/update-task.dto';
import { Task } from 'src/tasks/entities/task.entity';

@Injectable()
export class TasksService {

    private tasks: Task[] = [
        {
            id: 1,
            task: "primeira tarefa"
        }
    ]

    findAll() {
        return this.tasks
    }

    findOne(id: number) {
        const task = this.tasks.find(task => task.id === id)
        if (Task) return task;
        throw new HttpException("Essa tarefa não existe", HttpStatus.NOT_FOUND)
    }

    create(createTaskDto: CreateTaskDto) {
        const newId = this.tasks.length + 1

        const newTask = {
            id: newId,
            ...createTaskDto
        }

        this.tasks.push(newTask)
        return newTask
    }

    update(id: number, updateTaskDto: UpdateTaskDto) {
        const taskIndex = this.tasks.findIndex(task => task.id === id)
        if (taskIndex < 0)
            throw new HttpException("Essa tarefa não existe", HttpStatus.NOT_FOUND)

        const taskItem = this.tasks[taskIndex]
        this.tasks[taskIndex] = { ...taskItem, ...updateTaskDto }

        return taskItem[taskIndex]
    }

    remove(id: number) {
        const taskIndex = this.tasks.findIndex(task => task.id === id)
        if (taskIndex < 0)
            throw new HttpException("Essa tarefa não existe", HttpStatus.NOT_FOUND)

        this.tasks.splice(taskIndex, 1)
        return "Tarefa deletada"
    }
}