import { Module } from '@nestjs/common';
import { DispositivosService } from './services/dispositivos/dispositivos.service';
import { DispositivosController } from './controllers/dispositivos/dispositivos.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Dispositivo } from './entities/dispositivo.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Dispositivo])],
  providers: [DispositivosService],
  controllers: [DispositivosController],
  exports: [DispositivosService]

})
export class DispositivosModule {}
