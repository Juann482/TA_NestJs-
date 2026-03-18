import { Controller, Get, Post, Body, Param, Put, Delete } from '@nestjs/common';
import { RegAccesoService } from '../../services/reg-acceso/reg-acceso.service';
import { CreateAccesoDto, UpdateAccesoDto } from '../../dtos/acceso.dto';

@Controller('accesos')
export class RegAccesoController {
    constructor(private service: RegAccesoService) {}

    @Post()
    create(@Body() dto: CreateAccesoDto) {
        return this.service.create(dto);
    }

    @Get()
    findAll() {
        return this.service.findAll();
    }

    @Get(':id')
    findOne(@Param('id') id: string) {
        return this.service.findOne(+id);
    }

    @Put(':id')
    update(@Param('id') id: string, @Body() dto: UpdateAccesoDto) {
        return this.service.update(+id, dto);
    }

    @Delete(':id')
    remove(@Param('id') id: string) {
        return this.service.remove(+id);
    }
}