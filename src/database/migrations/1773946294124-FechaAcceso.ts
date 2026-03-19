import { MigrationInterface, QueryRunner } from "typeorm";

export class FechaAcceso1773946294124 implements MigrationInterface {
    name = 'FechaAcceso1773946294124'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "accesos" ADD "fecha" date NOT NULL DEFAULT ('now'::text)::date`);
        await queryRunner.query(`ALTER TABLE "accesos" ALTER COLUMN "usuarioId" DROP NOT NULL`);
        await queryRunner.query(`ALTER TABLE "accesos" ADD CONSTRAINT "FK_e993885e08b45e880466359a58f" FOREIGN KEY ("usuarioId") REFERENCES "user"("id") ON DELETE CASCADE ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "accesos" DROP CONSTRAINT "FK_e993885e08b45e880466359a58f"`);
        await queryRunner.query(`ALTER TABLE "accesos" ALTER COLUMN "usuarioId" SET NOT NULL`);
        await queryRunner.query(`ALTER TABLE "accesos" DROP COLUMN "fecha"`);
    }

}
