import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity('accesos')
export class Acceso {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  usuarioId: number;

  @Column({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' })
  horaIngreso: Date;

  @Column({ type: 'timestamp', nullable: true })
  horaSalida: Date;

  @Column({ nullable: true })
  observacion: string;
}