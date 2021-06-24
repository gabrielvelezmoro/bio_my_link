import {MigrationInterface, QueryRunner, TableForeignKey} from "typeorm";

export class CreateRelationUserProfile1624541562184 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createForeignKey(
            'profiles',
            new TableForeignKey({
              columnNames: ['user'],
              referencedTableName: 'users',
              referencedColumnNames: ['profile']
            })
          )
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
    }

}
