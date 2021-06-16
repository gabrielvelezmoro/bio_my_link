import {MigrationInterface, QueryRunner, Table} from "typeorm";

export class CreateAdms1623770896619 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            new Table({
                name: "adms",
                columns: [
                    {
                        name: 'id',
                        type: 'varchar',
                        isPrimary: true,
                        generationStrategy: 'uuid',
                        default: 'uuid_generate_v4()'
                    },
                    {
                        name: 'adm_name',
                        type: 'varchar',
                        isNullable: true
                    },
                    {
                        name: 'adm_email',
                        type: 'varchar',
                        isNullable: true,
                        isUnique: true
                    },
                    {
                        name: 'adm_password',
                        type: 'varchar',
                        isNullable: true
                    },
                    {
                        name: 'adm_avatar',
                        type: 'varchar',
                        isNullable: true
                    },
                    {
                        name: 'created_at',
                        type: 'timestamp',
                        default: 'now()'
                    },
                    {
                        name: 'updated_at',
                        type: 'timestamp',
                        default: 'now()'
                    }
                ]
            })
        )
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable('adms');
    }

}
