import { Entity, Column, PrimaryGeneratedColumn, CreateDateColumn, UpdateDateColumn } from 'typeorm';

@Entity('profiles', {database: 'default', schema: 'public'})
class Profile {
	@PrimaryGeneratedColumn('uuid')
	id: string;

	@Column()
	prof_username: string;

	@Column()
	prof_description: string;

	@Column()
	prof_links: string;

	@Column()
	prof_custom_url: string;

	@CreateDateColumn()
	created_at: Date;

	@UpdateDateColumn()
	updated_at: Date;
}

export default Profile;
