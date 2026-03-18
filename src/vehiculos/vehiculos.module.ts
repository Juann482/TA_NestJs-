import { Module } from '@nestjs/common';
import { VehiculosController } from './controllers/vehiculos/vehiculos.controller';
import { VehiculosService } from './services/vehiculos/vehiculos.service';

@Module({
  controllers: [VehiculosController],
  providers: [VehiculosService]
})
export class VehiculosModule {}
