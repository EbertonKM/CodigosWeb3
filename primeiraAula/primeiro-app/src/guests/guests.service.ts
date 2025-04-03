import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { Guest } from './entities/guest.entity';
import { CreateGuestDto } from './dto/create-guest.dto';
import { UpdateGuestDto } from './dto/update-guest.dto';

@Injectable()
export class GuestsService {

  private guests: Guest[] = [
          {
              id: 1,
              guest: "primeiro convidado"
          }
      ]
  
      findAll() {
          return this.guests
      }
  
      findOne(id: number) {
          const guest = this.guests.find(guest => guest.id === id)
          if (Guest) return guest;
          throw new HttpException("Esse convidado não existe", HttpStatus.NOT_FOUND)
      }
  
      create(createGuestDto: CreateGuestDto) {
          const newId = this.guests.length + 1
  
          const newGuest = {
              id: newId,
              ...createGuestDto
          }
  
          this.guests.push(newGuest)
          return newGuest
      }
  
      update(id: number, updateGuestDto: UpdateGuestDto) {
          const guestIndex = this.guests.findIndex(guest => guest.id === id)
          if (guestIndex < 0)
              throw new HttpException("Esse convidado não existe", HttpStatus.NOT_FOUND)
  
          const guestItem = this.guests[guestIndex]
          this.guests[guestIndex] = { ...guestItem, ...updateGuestDto }
  
          return guestItem[guestIndex]
      }
  
      remove(id: number) {
          const guestIndex = this.guests.findIndex(guest => guest.id === id)
          if (guestIndex < 0)
              throw new HttpException("Esse convidado não existe", HttpStatus.NOT_FOUND)
  
          this.guests.splice(guestIndex, 1)
          return "Convidado deletado"
      }
}
