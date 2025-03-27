import { Injectable } from '@nestjs/common';

@Injectable()
export class TeachersService {
  findAll() {
    return [
      {
        id: 1,
        nome: 'teacher1',
      },
      {
        id: 2,
        nome: 'teacher2',
      },
    ];
  }

  findOne() {
    return {
      id: 1,
      nome: 'teacher1',
    };
  }
}
