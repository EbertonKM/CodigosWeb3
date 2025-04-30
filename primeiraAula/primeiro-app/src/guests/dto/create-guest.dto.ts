import { IsNotEmpty, IsNumber, IsString, MaxLength, MinLength } from "class-validator";

export class CreateGuestDto {
    @IsString({message: "O nome precisa ser um texto"})
    @MinLength(5, {message: "O nome precisa ter no mínimo 5 caracteres"})
    @MaxLength(20, {message: "O nome precisa ter no máximo 20 caracteres"})
    @IsNotEmpty({message: "O nome não pode ser vazio"})
    readonly guest: string;

    @IsNumber()
    @IsNotEmpty()
    readonly teacherId: number;
}