import { MigrationInterface, QueryRunner, Table } from "typeorm";

export class CreateUsers1598229832087 implements MigrationInterface {
	public async up(queryRunner: QueryRunner): Promise<void> {
  	await queryRunner.createTable(
  		new Table({
  			name: "users",
  			columns: [
  				{
  					name: 'id',
  					type: 'varchar',
  					isPrimary: true,
  					generationStrategy: 'uuid',
            default: 'uuid_generate_v4()'
  				},
  				{
  					name: 'user_name',
  					type: 'varchar',
  					isNullable: true
  				},
  				{
  					name: 'user_email',
  					type: 'varchar',
  					isNullable: true,
  					isUnique: true
  				},
  				{
  					name: 'user_password',
  					type: 'varchar',
  					isNullable: true
  				},
				{
				name: 'user_avatar',
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
  	await queryRunner.dropTable('users');
	}
}
