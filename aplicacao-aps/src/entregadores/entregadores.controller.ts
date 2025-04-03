import { Controller, Get, Query } from "@nestjs/common";
import { EntregadoresService } from "./entregadores.service";

@Controller('entregadores')
export class EntregadoresController {
    constructor(private readonly entregadoresService: EntregadoresService) {}

    @Get()
    findAllEntregadores(@Query() queryParam: any) {
        return this.entregadoresService.findAll();
    }
}