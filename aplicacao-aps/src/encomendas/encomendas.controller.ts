import { Controller, Get, Query } from "@nestjs/common";
import { EncomendasService } from "./encomendas.service";

@Controller('encomendas')
export class EncomendasController {
    constructor(private readonly encomendasService: EncomendasService) {}

    @Get()
    findAllEncomendas(@Query() queryParam: any) {
        return this.encomendasService.findAll();
    }
}