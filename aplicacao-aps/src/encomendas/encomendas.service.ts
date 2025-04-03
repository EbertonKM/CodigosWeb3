import { Injectable } from "@nestjs/common";
import { Encomenda } from "./entities/encomenda.entity";

@Injectable()
export class EncomendasService {
    private encomendas: Encomenda[] = [
        {
            id: 1,
            codRastreio: "A233B212D312F483",
            origem: "Porto União",
            destino: "União da Vitória",
            dataEmissao: "02-04-2025 22:29",
            ultimaLocalizacao: "Remetente",
            entregue: false,
            observacoes: "Nenhuma"
        }
    ]

    findAll() {
        return this.encomendas;
    }
}