import { Entity, Column, PrimaryGeneratedColumn, CreateDateColumn, UpdateDateColumn } from 'typeorm';

import { Exclude, Expose } from 'class-transformer';

@Entity('adms', {database: 'default', schema: 'public'})
class Adm {
	@PrimaryGeneratedColumn('uuid')
	id: string;

	@Column()
	adm_name: string;

	@Column()
	adm_email: string;

	@Column()
	@Exclude()
	adm_password: string;

	@CreateDateColumn()
	created_at: Date;

	@UpdateDateColumn()
	updated_at: Date;

}

export default Adm;
