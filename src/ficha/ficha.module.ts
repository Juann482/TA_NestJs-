import { Module } from '@nestjs/common';
import { FichaController } from './controllers/ficha/ficha.controller';
import { FichaService } from './services/ficha/ficha.service';

@Module({
  controllers: [FichaController],
  providers: [FichaService]
})
export class FichaModule {}
