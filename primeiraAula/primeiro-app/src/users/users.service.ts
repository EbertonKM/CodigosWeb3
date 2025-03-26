import { Injectable } from "@nestjs/common";

@Injectable()
export class UsersService {

    findAll() {
        return [
            {
                id: 1,
                nome: 'user1'
            },
            {
                id: 2,
                nome: 'user2'
            }
        ]
    }

    findOne() {
        return {
                    id: 1,
                    nome: 'user1'
                }
    }
}