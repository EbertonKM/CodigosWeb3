// DTO (data trasnfer object) - Objeto de transferência de dados
// Objetivo: Validar dados, transformar
// É utilizado para representar quais dados e em que formatos uma determinada camada aceita e trabalha

import { IsNotEmpty, IsOptional, IsString, MaxLength, MinLength } from "class-validator";
import { CreateTaskDto } from "./create-task.dto";
import { PartialType } from "@nestjs/mapped-types";

export class UpdateTaskDto extends PartialType(CreateTaskDto) {
    //Define os atributos que o usuário pode editar, campos como o ID ou exclusivamente controlados pelo back-end não aparecem aqui
    //readonly task?: string; //Tava antes de fazer o partialType
}