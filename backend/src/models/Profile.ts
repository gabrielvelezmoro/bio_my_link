import { Entity, Column, PrimaryGeneratedColumn, CreateDateColumn, UpdateDateColumn, OneToOne, JoinColumn } from 'typeorm';
import User from './User';

@Entity('profiles', {database: 'default', schema: 'public'})
class Profile {
	@PrimaryGeneratedColumn('uuid')
	id: string;

	@OneToOne(type => User, profile => Profile )
	@JoinColumn({name: "user"})
	user: User;

	@Column()
	prof_description: string;

	@Column()
	prof_custom_url: string;

	@CreateDateColumn()
	created_at: Date;

	@UpdateDateColumn()
	updated_at: Date;
}

export default Profile;
