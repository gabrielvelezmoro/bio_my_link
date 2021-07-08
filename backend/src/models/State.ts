import { Entity, Column, PrimaryGeneratedColumn, CreateDateColumn, UpdateDateColumn, ManyToOne, JoinColumn, OneToMany } from 'typeorm';
import Country from './Country';

@Entity('states', {database: 'default', schema: 'public'})
class State {
	@PrimaryGeneratedColumn('uuid')
	id: string;
    
	@Column()
	name: string;

    @OneToMany(type => Country, states => State  )
    Country: Country;

	@CreateDateColumn()
	created_at: Date;

	@UpdateDateColumn()
	updated_at: Date;
}

export default State;
