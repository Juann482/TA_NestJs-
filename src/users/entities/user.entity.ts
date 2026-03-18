import { Role } from 'src/roles/entities/role.entity';
import { Ficha } from 'src/ficha/entities/ficha.entity';
import { 
    Column, 
    Entity, 
    JoinTable, 
    ManyToMany, 
    ManyToOne,
    PrimaryGeneratedColumn, 
} from 'typeorm';

@Entity('user')
export class User {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({ type: 'varchar', length: 255 })
    name;

    @Column({ type: 'varchar', length: 255 })
    lastName;

    @Column({ type: 'varchar', length: 255 })
    docType;

    @Column({ type: 'varchar', length: 255, unique: true })
    docNumber;

    @Column({ unique: true })
    email: string;

    @Column()
    telephone: string;

    @Column()
    FamTelephone: string;

    @Column()
    state: string;

    @Column()
    password: string;

    @Column({ default: true })
    isActive: boolean;

    @ManyToMany(() => Role, role => role.users)
    @JoinTable({
        name: 'user_roles'
    })
    roles: Role[];

    @ManyToOne(() => Ficha, ficha => ficha.users)
    fichas: Ficha[];

}
