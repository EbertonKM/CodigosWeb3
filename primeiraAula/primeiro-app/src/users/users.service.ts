import { HttpException, HttpStatus, Injectable, RequestTimeoutException } from '@nestjs/common';
import { useContainer } from 'class-validator';
import { PaginationDto } from 'src/common/dto/pagination.dto';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreateUserDto } from 'src/users/dto/create-user.dto';
import { UpdateUserDto } from 'src/users/dto/update-user.dto';

@Injectable()
export class UsersService {

    constructor(private readonly prismaService: PrismaService) {}

    async findAll(paginationDto: PaginationDto) {
        const {limit = 10, offset = 0} = paginationDto

        const allUsers = await this.prismaService.user.findMany({
            take: limit,
            skip: offset,
            orderBy: {
                created: 'desc'
            }
        })
        return allUsers
    }

    async findOne(id: number) {
        const user = await this.prismaService.user.findFirst({
            where: {
                id: id
            },
            select: {
                id: true,
                user: true,
                email: true,
                task: true
            }
        })
        if (user?.user) return user
        throw new HttpException("Esse usuário não existe", HttpStatus.NOT_FOUND);
    }

    async create(createUserDto: CreateUserDto) {
        try {
            const newUser = await this.prismaService.user.create({
                data: {
                    user: createUserDto.user,
                    passwordHash: createUserDto.password, //Iremos gerar o hash
                    email: createUserDto.email
                },
                select: {
                    id: true,
                    user: true,
                    email: true
                }
            })
            return newUser
        }catch(e) {
            throw new HttpException("Não foi possível cadastrar o usuário", HttpStatus.BAD_REQUEST)
        }
    }

    async update(id: number, updateUserDto: UpdateUserDto) {
        try {
            const findUser = await this.prismaService.user.findFirst({
                where: {
                    id: id
                }
            })
            if(!findUser)
                throw new HttpException("Esse usuário não existe", HttpStatus.NOT_FOUND)

            const user = await this.prismaService.user.update({
                where: {
                    id: findUser.id
                },
                data: {
                    user: updateUserDto.user ? updateUserDto.user : findUser.user,
                    passwordHash: updateUserDto.password ? updateUserDto.password : findUser.passwordHash,
                },
                select: {
                    id: true,
                    user: true,
                    email: true
                }
            })
            return user
        }catch(e) {
            throw new HttpException("Não foi possível atualizar o usuário", HttpStatus.BAD_REQUEST)
        }
    }

    async remove(id: number) {
        try {
            const findUser = await this.prismaService.user.findFirst({
                where: {
                    id: id
                }
            })
            if(!findUser)
                throw new HttpException("Esse usuário não existe", HttpStatus.NOT_FOUND);

            await this.prismaService.user.delete({
                where: {
                    id: findUser.id
                }
            })
            return "Usuário excluído com sucesso"
        }catch(e) {
            throw new HttpException("Não foi possível deletar o usuário", HttpStatus.BAD_REQUEST)
        }
    }
}
