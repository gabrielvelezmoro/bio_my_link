import { Entity, Column, PrimaryGeneratedColumn, CreateDateColumn, UpdateDateColumn, OneToOne, JoinColumn, Generated } from 'typeorm';
import Profile from './Profile';

import { Exclude, Expose } from 'class-transformer';

@Entity('users', {database: 'default', schema: 'public'})
class User {
	
	@PrimaryGeneratedColumn('uuid')
	id: String;

	@Column()
	user_name: String;
	
	@Column()
	user_email: String;

	@Generated()
	@Column()
	@Expose()
	profile: String;

	@Column({ })
	@Exclude()
	user_password: String;

	@Column()
	user_customer: Boolean;

	@Column()
	user_avatar: String;

	@CreateDateColumn()
	created_at: Date;

	@UpdateDateColumn()
	updated_at: Date;

	@Expose({ name: 'avatar_url' })
	getAvatarUrl(): String | null {
		return this.user_avatar ? `${process.env.APP_API_URL}/files/${this.user_avatar}` : null;
	}
}

export default User;
