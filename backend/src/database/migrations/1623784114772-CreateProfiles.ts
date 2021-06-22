import {MigrationInterface, QueryRunner, Table, TableForeignKey} from "typeorm";

export class CreateProfiles1623784114772 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            new Table({
                name: "profiles",
                columns: [
                    {
                        name: 'id',
                        type: 'uuid',
                        isPrimary: true,
                        generationStrategy: 'uuid',
                        default: 'uuid_generate_v4()'
                    },
                    {
                        name: 'user',
                        type: 'varchar',
                        isUnique: true,
                        isNullable: true

                    },
                    {
                        name: 'prof_description',
                        type: 'varchar',
                        isNullable: true,
                    },
                    {
                        name: 'prof_custom_url',
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
        );
        await queryRunner.createForeignKey(
            'profiles',
            new TableForeignKey({
              columnNames: ['user'],
              referencedTableName: 'users',
              referencedColumnNames: ['profile']
            })
          )
        await queryRunner.createForeignKey(
            'users',
            new TableForeignKey({
                columnNames: ['profile'],
                referencedTableName: 'profiles',
                referencedColumnNames: ['user']
            })
            )  
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable('profiles');
    }

}
