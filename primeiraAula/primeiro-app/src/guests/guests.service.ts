import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { CreateGuestDto } from './dto/create-guest.dto';
import { UpdateGuestDto } from './dto/update-guest.dto';
import { PaginationDto } from 'src/common/dto/pagination.dto';
import { PrismaService } from 'src/prisma/prisma.service';
@Injectable()
export class GuestsService {

    constructor(private readonly prismaService: PrismaService) {}
    
    async findAll(paginationDto: PaginationDto) {
        const {limit = 10, offset = 0} = paginationDto
        const allGuests = await this.prismaService.guest.findMany({
            take: limit,
            skip: offset,
            orderBy: {
                created: 'desc'
            }
        })
        return allGuests;
    }

    async findOne(id: number) {
        const guest = await this.prismaService.guest.findFirst({
            where: {
                id: id
            }
        })
        if(guest?.guest) return guest
        throw new HttpException("Esse convidado não existe", HttpStatus.NOT_FOUND)
    }

    async create(createGuestDto: CreateGuestDto) {
        try {
            const guest = await this.prismaService.guest.create({
                data: {
                    guest: createGuestDto.guest
                }
            })
            return guest
        }catch(e) {
            throw new HttpException("Não foi possível cadastrar o convidado", HttpStatus.BAD_REQUEST)
        }
    }

    async update(id: number, updateGuestDto: UpdateGuestDto) {
        try {
            const findGuest = await this.prismaService.guest.findFirst({
                where: {
                    id: id
                }
            })
            if(!findGuest)
                throw new HttpException("Esse convidado não existe", HttpStatus.NOT_FOUND)

            const guest = await this.prismaService.guest.update({
                where: {
                    id: id
                },
                data: updateGuestDto
            })
            return guest
        }catch(e) {
            throw new HttpException("Não foi possível atualizar o convidado", HttpStatus.BAD_REQUEST)
        }
    }

    async remove(id: number) {
        try {
            const findGuest = await this.prismaService.guest.findFirst({
                where: {
                    id: id
                }
            })
            if(!findGuest)
                throw new HttpException("Esse convidado não existe", HttpStatus.NOT_FOUND)

            await this.prismaService.guest.delete({
                where: {
                    id: id
                }
            })
            return "Convidado excluído com sucesso"
        }catch(e) {
            throw new HttpException("Não foi possível atualizar o convidado", HttpStatus.BAD_REQUEST)
        }
    }
}
