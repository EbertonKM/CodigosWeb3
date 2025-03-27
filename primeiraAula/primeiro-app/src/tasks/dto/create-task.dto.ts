// DTO (data trasnfer object) - Objeto de transferência de dados
// Objetivo: Validar dados, transformar
// É utilizado para representar quais dados e em que formatos uma determinada camada aceita e trabalha

export class CreateTaskDto {
    //Define os atributos que o usuário pode criar, campos como o ID ou campos privados como um controlador booleano, controlado pelo back-end, não aparecem aqui
    readonly task: string;
}