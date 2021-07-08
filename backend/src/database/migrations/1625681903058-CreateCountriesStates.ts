import {MigrationInterface, QueryRunner} from "typeorm";

export class CreateCountriesStates1625681903058 implements MigrationInterface {
    name = 'CreateCountriesStates1625681903058'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "public"."states" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "name" character varying NOT NULL, "created_at" TIMESTAMP NOT NULL DEFAULT now(), "updated_at" TIMESTAMP NOT NULL DEFAULT now(), CONSTRAINT "PK_04135b122e3d5947fa527b56b82" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "public"."countries" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "name" character varying NOT NULL, "currency" character varying NOT NULL, "created_at" TIMESTAMP NOT NULL DEFAULT now(), "updated_at" TIMESTAMP NOT NULL DEFAULT now(), "statesId" uuid, CONSTRAINT "PK_b6a3cb6e0aec5598934117aede9" PRIMARY KEY ("id"))`);
       
        await queryRunner.query(`ALTER TABLE "public"."countries" ADD CONSTRAINT "FK_47c71fcedde8e777198b39fa428" FOREIGN KEY ("statesId") REFERENCES "public"."states"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "public"."profiles" DROP CONSTRAINT "FK_21e354d183e04a582d02ea4739d"`);
        await queryRunner.query(`ALTER TABLE "public"."countries" DROP CONSTRAINT "FK_47c71fcedde8e777198b39fa428"`);
        await queryRunner.query(`DROP TABLE "public"."countries"`);
        await queryRunner.query(`DROP TABLE "public"."states"`);
    }

}
