import { Injectable, UnauthorizedException } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { User } from 'src/users/entities/user.entity';
import { UsersService } from 'src/users/services/users/users.service';
import * as bcrypt from 'bcrypt';
import { UserModel } from '../../users/interfaces/user';

@Injectable()
export class AuthService {

    constructor(
        private readonly usersService: UsersService,
        private readonly jwtService: JwtService,
        // Eliminamos el Repository si no se usa directamente aquí
    ) { }

    async validateUser(email: string, password: string) {
        // Buscamos al usuario incluyendo sus roles para el login
        const user = await this.usersService.findByEmail(email);

        if (!user || !(await bcrypt.compare(password, user.password))) {
            throw new UnauthorizedException('Credenciales inválidas');
        }

        // Extraemos el password para no enviarlo al frontend
        const { password: _, ...result } = user;
        return result;
    }

    async login(user: UserModel) {
        const payload = {
            sub: user.id,
            email: user.email,
            // Importante: Asegúrate de que user.roles exista en el objeto user
            roles: user.roles ? user.roles.map(r => r.name) : [],
        };

        return {
            access_token: this.jwtService.sign(payload),
            user,
        };
    }

}

