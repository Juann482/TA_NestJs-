import { Module } from '@nestjs/common';
import { RegAccesoController } from './controllers/reg-acceso/reg-acceso.controller';
import { RegAccesoService } from './services/reg-acceso/reg-acceso.service';

@Module({
  controllers: [RegAccesoController],
  providers: [RegAccesoService]
})
export class RegAccesoModule {}
