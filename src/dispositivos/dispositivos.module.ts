import { Module } from '@nestjs/common';
import { DispositivosService } from './services/dispositivos/dispositivos.service';
import { DispositivosController } from './controllers/dispositivos/dispositivos.controller';

@Module({
  providers: [DispositivosService],
  controllers: [DispositivosController]
})
export class DispositivosModule {}
