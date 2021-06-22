import { Entity, Column, PrimaryGeneratedColumn, CreateDateColumn, UpdateDateColumn } from 'typeorm';

@Entity('profiles_menu_options', {database: 'default', schema: 'public'})
class ProfileMenuOption {
	@PrimaryGeneratedColumn('uuid')
	id: string;

	@Column()
	prof_id: string;

	@Column()
	meop_id: string;

	@CreateDateColumn()
	created_at: Date;

	@UpdateDateColumn()
	updated_at: Date;
}

export default ProfileMenuOption;
