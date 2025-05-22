import { IsBoolean, IsString } from "class-validator";

export class UpdateEncomendaDto {
    @IsString({message: "A ultima localização precisa ser um texto"})
    readonly ultimaLocalizacao?: string;

    @IsBoolean({message: "O estado de entrega precisa ser um booleano"})
    readonly entregue?: boolean;

    @IsString({message: "As observações precisam ser um texto"})
    readonly observacoes?: string;
}