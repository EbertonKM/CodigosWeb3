// DTO (data trasnfer object) - Objeto de transferência de dados
// Objetivo: Validar dados, transformar
// É utilizado para representar quais dados e em que formatos uma determinada camada aceita e trabalha

import { IsNotEmpty, IsString, MaxLength, MinLength } from "class-validator";

export class CreateTaskDto {
    //Define os atributos que o usuário pode criar, campos como o ID ou campos privados como um controlador booleano, controlado pelo back-end, não aparecem aqui
    @IsString({message: "O nome precisa ser um texto"})
    @MinLength(5, {message: "O nome precisa ter no mínimo 5 caracteres"})
    @MaxLength(20, {message: "O nome precisa ter no máximo 20 caracteres"})
    @IsNotEmpty({message: "O nome não pode ser vazio"})
    readonly task: string;
}