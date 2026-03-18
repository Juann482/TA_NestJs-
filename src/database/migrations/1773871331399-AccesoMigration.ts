import { MigrationInterface, QueryRunner } from "typeorm";

export class AccesoMigration1773871331399 implements MigrationInterface {
    name = 'AccesoMigration1773871331399'

    public async up(queryRunner: QueryRunner): Promise<void> {
        // SOLO CREAR LA TABLA ACCESOS
        await queryRunner.query(`CREATE TABLE "accesos" (
            "id" SERIAL NOT NULL, 
            "usuarioId" integer NOT NULL, 
            "horaIngreso" TIMESTAMP NOT NULL DEFAULT now(), 
            "horaSalida" TIMESTAMP, 
            "observacion" character varying, 
            CONSTRAINT "PK_75b1bfc93410af04429a40bb30f" PRIMARY KEY ("id")
        )`);

        // NOTA: No se crea user, modules, role, etc porque ya existen de Baseno
        // No se crea ficha porque existe de FichaMigration
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        // SOLO ELIMINAR LA TABLA ACCESOS
        await queryRunner.query(`DROP TABLE "accesos"`);
    }
}