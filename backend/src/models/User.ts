import { Entity, Column, PrimaryGeneratedColumn, CreateDateColumn, UpdateDateColumn } from 'typeorm';

import { Exclude, Expose } from 'class-transformer';

@Entity('users', {database: 'default', schema: 'public'})
class User {
	@PrimaryGeneratedColumn('uuid')
	id: string;

	@Column()
	user_name: string;

	@Column()
	user_email: string;

	@Column()
	@Exclude()
	user_password: string;

	@Column()
	user_avatar: string;

	@CreateDateColumn()
	created_at: Date;

	@UpdateDateColumn()
	updated_at: Date;

	@Expose({ name: 'avatar_url' })
	getAvatarUrl(): string | null {
		return this.user_avatar ? `${process.env.APP_API_URL}/files/${this.user_avatar}` : null;
	}
}

export default User;
