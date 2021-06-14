import { Entity, Column, PrimaryGeneratedColumn, CreateDateColumn, UpdateDateColumn } from 'typeorm';

@Entity('modules', {database: 'default', schema: 'public'})
class Module {
	@PrimaryGeneratedColumn('uuid')
	id: string;

	@Column()
	modu_name: string;

	@Column()
	modu_seq: string;

	@CreateDateColumn()
	created_at: Date;

	@UpdateDateColumn()
	updated_at: Date;
}

export default Module;
