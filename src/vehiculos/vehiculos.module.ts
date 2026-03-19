import { Module } from '@nestjs/common';
import { VehiculosController } from './controllers/vehiculos/vehiculos.controller';
import { VehiculosService } from './services/vehiculos/vehiculos.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Vehiculo } from './entities/vehiculo.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Vehiculo])],
  controllers: [VehiculosController],
  providers: [VehiculosService]
})
export class VehiculosModule {}
