import {MigrationInterface, QueryRunner, Table, TableForeignKey} from "typeorm";

export class CreateProfiles1623784114772 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            new Table({
                name: "profiles",
                columns: [
                    {
                        name: 'id',
                        type: 'varchar',
                        isPrimary: true,
                        generationStrategy: 'uuid',
                        default: 'uuid_generate_v4()'
                    },
                    {
                        name: 'prof_username',
                        type: 'varchar',
                        isNullable: true,
                        isUnique: true

                    },
                    {
                        name: 'prof_description',
                        type: 'varchar',
                        isNullable: true,
                    },
                    {
                        name: 'prof_links',
                        type: 'varchar',
                        isNullable: true
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
            'users',
            new TableForeignKey({
              columnNames: ['profile_id'],
              referencedTableName: 'profiles',
              referencedColumnNames: ['id']
            })
          )
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable('profiles');
    }

}
