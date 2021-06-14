import { MigrationInterface, QueryRunner, Table } from "typeorm";

export class CreateModules1598229832088 implements MigrationInterface {
	public async up(queryRunner: QueryRunner): Promise<void> {
  	await queryRunner.createTable(
  		new Table({
  			name: "modules",
  			columns: [
  				{
  					name: 'id',
  					type: 'varchar',
  					isPrimary: true,
  					generationStrategy: 'uuid',
            default: 'uuid_generate_v4()'
  				},
          {
            name: 'modu_name',
            type: 'varchar',
            isNullable: true,
            isUnique: true
          },
          {
            name: 'modu_seq',
            type: 'varchar',
            isNullable: true,
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
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
  	await queryRunner.dropTable('modules');
	}
}
