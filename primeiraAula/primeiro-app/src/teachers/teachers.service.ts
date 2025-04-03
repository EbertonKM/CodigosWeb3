import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { CreateTeacherDto } from 'src/teachers/dto/create-teacher.dto';
import { UpdateTeacherDto } from 'src/teachers/dto/update-teacher.dto';
import { Teacher } from 'src/teachers/entities/teacher.entity';

@Injectable()
export class TeachersService {

    private teachers: Teacher[] = [
        {
            id: 1,
            teacher: "Primeiro professor"
        }
    ]

    findAll() {
        return this.teachers;
    }

    findOne(id: number) {
        const teacher = this.teachers.find(teacher => teacher.id === id);
        if (Teacher) return teacher;
        throw new HttpException("Esse professor não existe", HttpStatus.NOT_FOUND);
    }

    create(createTeacherDto: CreateTeacherDto) {
        const newId = this.teachers.length + 1;

        const newTeacher = {
            id: newId,
            ...createTeacherDto
        };

        this.teachers.push(newTeacher);
        return newTeacher;
    }

    update(id: number, updateTeacherDto: UpdateTeacherDto) {
        const teacherIndex = this.teachers.findIndex(teacher => teacher.id === id);
        if (teacherIndex < 0)
            throw new HttpException("Esse professor não existe", HttpStatus.NOT_FOUND);

        const teacherItem = this.teachers[teacherIndex];
        this.teachers[teacherIndex] = { ...teacherItem, ...updateTeacherDto };

        return this.teachers[teacherIndex];
    }

    remove(id: number) {
        const teacherIndex = this.teachers.findIndex(teacher => teacher.id === id);
        if (teacherIndex < 0)
            throw new HttpException("Esse professor não existe", HttpStatus.NOT_FOUND);

        this.teachers.splice(teacherIndex, 1);
        return "Professor deletado";
    }
}