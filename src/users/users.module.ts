import { Module } from '@nestjs/common';
import { UsersController } from './controllers/users/users.controller';
import { UsersService } from './services/users/users.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from './entities/user.entity';
import { RolesModule } from 'src/roles/roles.module';
import { FichaModule } from 'src/ficha/ficha.module';
import { VehiculosModule } from 'src/vehiculos/vehiculos.module';

@Module({
  imports:[
    TypeOrmModule.forFeature([User]),
    RolesModule,
    FichaModule,
    VehiculosModule
  ],
  controllers: [UsersController],
  providers: [UsersService],
  exports: [UsersService]
})
export class UsersModule {}
