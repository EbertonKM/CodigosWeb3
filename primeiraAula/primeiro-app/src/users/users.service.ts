import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { CreateUserDto } from 'src/users/dto/create-user.dto';
import { UpdateUserDto } from 'src/users/dto/update-user.dto';
import { User } from 'src/users/entities/user.entity';

@Injectable()
export class UsersService {

    private users: User[] = [
        {
            id: 1,
            user: "primeiro usuário"
        }
    ]

    findAll() {
        return this.users;
    }

    findOne(id: number) {
        const user = this.users.find(user => user.id === id);
        if (User) return user;
        throw new HttpException("Esse usuário não existe", HttpStatus.NOT_FOUND);
    }

    create(createUserDto: CreateUserDto) {
        const newId = this.users.length + 1;

        const newUser = {
            id: newId,
            ...createUserDto
        };

        this.users.push(newUser);
        return newUser;
    }

    update(id: number, updateUserDto: UpdateUserDto) {
        const userIndex = this.users.findIndex(user => user.id === id);
        if (userIndex < 0)
            throw new HttpException("Esse usuário não existe", HttpStatus.NOT_FOUND);

        const userItem = this.users[userIndex];
        this.users[userIndex] = { ...userItem, ...updateUserDto };

        return this.users[userIndex];
    }

    remove(id: number) {
        const userIndex = this.users.findIndex(user => user.id === id);
        if (userIndex < 0)
            throw new HttpException("Esse usuário não existe", HttpStatus.NOT_FOUND);

        this.users.splice(userIndex, 1);
        return "Usuário deletado";
    }
}
