import { Injectable } from "@nestjs/common";

@Injectable()
export class GuestsService {

    findAll() {
        return [
            {
                id: 1,
                nome: 'guest1'
            },
            {
                id: 2,
                nome: 'guest2'
            }
        ]
    }

    findOne() {
        return {
                    id: 1,
                    nome: 'guest1'
                }
    }
}