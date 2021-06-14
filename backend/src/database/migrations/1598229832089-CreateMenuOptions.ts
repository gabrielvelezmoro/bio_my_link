import { MigrationInterface, QueryRunner, Table } from "typeorm";

export class CreateMenuOptions1598229832089 implements MigrationInterface {
	public async up(queryRunner: QueryRunner): Promise<void> {
  	await queryRunner.createTable(
  		new Table({
  			name: "menu_options",
  			columns: [
  				{
  					name: 'id',
  					type: 'varchar',
  					isPrimary: true,
  					generationStrategy: 'uuid',
            default: 'uuid_generate_v4()'
  				},
  				{
  					name: 'meop_module_seq',
  					type: 'varchar',
  					isNullable: true
  				},
  				{
  					name: 'meop_seq',
  					type: 'varchar',
  					isNullable: true,
  				},
  				{
  					name: 'meop_level',
  					type: 'varchar',
  					isNullable: true
  				},
          {
            name: 'meop_icon',
            type: 'varchar',
            isNullable: true
          },
          {
            name: 'meop_text',
            type: 'varchar',
            isNullable: true
          },
          {
            name: 'meop_route',
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
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
  	await queryRunner.dropTable('menu_options');
	}
}
