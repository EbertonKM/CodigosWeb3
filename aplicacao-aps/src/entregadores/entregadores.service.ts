import { Injectable } from "@nestjs/common";
import { Entregador } from "./entities/entregador.entity";

@Injectable()
export class EntregadoresService {
    private entregadores: Entregador[] = [
        {
            id: 1,
            nome: "Benedito",
            telefone: "012988887777",
            ativo: true
        }
    ]

    findAll() {
        return this.entregadores;
    }
}