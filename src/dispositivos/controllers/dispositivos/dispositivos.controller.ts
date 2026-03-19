import { Controller } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Dispositivo } from 'src/dispositivos/entities/dispositivo.entity';
import { Repository } from 'typeorm';

@Controller('dispositivos')
export class DispositivosController {
 constructor(
    @InjectRepository(Dispositivo)
    private dispositivoRepository: Repository<Dispositivo>,
  ) {}


}
