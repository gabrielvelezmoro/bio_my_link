import { Entity, Column, PrimaryGeneratedColumn, CreateDateColumn, UpdateDateColumn, OneToMany, JoinColumn, ManyToOne } from 'typeorm';
import State from './State';

@Entity('countries', {database: 'default', schema: 'public'})
class Country {
	@PrimaryGeneratedColumn('uuid')
	id: string;
    
	@Column()
	name: string;
    
	@Column()
	currency: string;

    @ManyToOne(type => State, countries => Country )
    States: State[];

	@CreateDateColumn()
	created_at: Date;

	@UpdateDateColumn()
	updated_at: Date;
}

export default Country;
