export class CreateAccesoDto {
  usuarioId: number;
  observacion?: string;
}

export class UpdateAccesoDto {
  horaSalida?: Date;
  observacion?: string;
}