import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Acceso } from '../../entities/acceso.entity';
import { CreateAccesoDto, UpdateAccesoDto } from '../../dtos/acceso.dto';

@Injectable()
export class RegAccesoService {
    constructor(
        @InjectRepository(Acceso)
        private accesoRepo: Repository<Acceso>,
    ) {}

    // Crear
    async create(dto: CreateAccesoDto) {
        const acceso = this.accesoRepo.create({
            usuarioId: dto.usuarioId,
            observacion: dto.observacion,
            horaIngreso: new Date()
        });
        return await this.accesoRepo.save(acceso);
    }

    // Obtener todos
    async findAll() {
        return await this.accesoRepo.find();
    }

    // Obtener uno
    async findOne(id: number) {
        return await this.accesoRepo.findOne({ where: { id } });
    }

    // Actualizar (registrar salida)
    async update(id: number, dto: UpdateAccesoDto) {
        await this.accesoRepo.update(id, {
            horaSalida: dto.horaSalida || new Date(),
            observacion: dto.observacion
        });
        return await this.findOne(id);
    }

    // Eliminar
    async remove(id: number) {
        return await this.accesoRepo.delete(id);
    }
}