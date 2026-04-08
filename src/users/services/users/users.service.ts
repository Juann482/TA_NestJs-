import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { User } from 'src/users/entities/user.entity';
import { CreateUserDto, UpdateUserDto } from 'src/users/dtos/user.dto';
import { RolesService } from 'src/roles/services/roles.service';
import * as bcrypt from 'bcrypt';

@Injectable()
export class UsersService {
    constructor(
        @InjectRepository(User) private userRepo: Repository<User>,
        private rolesService: RolesService,
    ) { }

    async findAll() {
        return await this.userRepo.find({ relations: ['roles'] });
    }

    // Mantenemos solo esta versión de findByEmail (la más completa)
    async findByEmail(email: string) {
        const user = await this.userRepo.findOne({
            where: { email },
            relations: {
                roles: {
                    modules: true, // Esto es genial para el login
                },
            },
        });

        if (!user) {
            throw new NotFoundException(`User ${email} not found`);
        }
        return user;
    }

    async findOne(userId: number) {
        const user = await this.userRepo.findOne({
            where: { id: userId },
            relations: ['roles']
        });
        if (!user) {
            throw new NotFoundException(`User #${userId} not found`);
        }
        return user;
    }

    async create(createUserDto: CreateUserDto) {
        const { roleIds, password, ...userData } = createUserDto;
        const hashedPassword = await bcrypt.hash(password, 10);
        
        // Buscamos los roles para asociarlos al nuevo usuario
        const roles = await this.rolesService.findByIds(roleIds);

        if (roles.length !== roleIds.length) {
            throw new NotFoundException('Some roles were not found');
        }

        const newUser = this.userRepo.create({
            ...userData,
            password: hashedPassword,
            roles,
        });
        return this.userRepo.save(newUser);
    }

    async updateUser(id: number, updateUserDto: UpdateUserDto) {
        const { roleIds, password, ...userData } = updateUserDto;

        const user = await this.userRepo.findOne({
            where: { id },
            relations: ['roles'],
        });

        if (!user) throw new NotFoundException('User not found');

        if (roleIds) {
            const roles = await this.rolesService.findByIds(roleIds);
            if (roles.length !== roleIds.length) {
                throw new NotFoundException('Some roles were not found');
            }
            user.roles = roles;
        }

        if (password) {
            user.password = await bcrypt.hash(password, 10);
        }

        this.userRepo.merge(user, userData);
        return this.userRepo.save(user);
    }

    async deleteUser(idUser: number) {
        const result = await this.userRepo.delete(idUser);
        if (result.affected === 0) {
            throw new NotFoundException(`User #${idUser} not found`);
        }
        return { message: 'User deleted successfully' };
    }
}