import { IsEmail, IsNotEmpty, IsString, IsStrongPassword, MaxLength, MinLength } from "class-validator";

export class CreateUserDto {
    @IsString({ message: "O nome precisa ser um texto" })
    @MinLength(5, { message: "O nome precisa ter no mínimo 5 caracteres" })
    @MaxLength(20, { message: "O nome precisa ter no máximo 20 caracteres" })
    @IsNotEmpty({ message: "O nome não pode ser vazio" })
    readonly user: string;

    @IsString()
    @IsStrongPassword({
        minLength: 6,
        minLowercase: 1,
        minUppercase: 1,
        minNumbers: 1,
        minSymbols: 1,
    })
    password: string

    @IsEmail()
    email: string
}