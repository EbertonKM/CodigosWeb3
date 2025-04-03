export class Encomenda {
    id: number;
    codRastreio: string;
    origem: string;
    destino: string;
    dataEmissao: string; //futuramente ser trocado pelo formato de DateTime ideal
    ultimaLocalizacao: string;
    entregue: boolean;
    //entregador: Entregador; Suponho que algo assim aconteça
    observacoes: string;
}