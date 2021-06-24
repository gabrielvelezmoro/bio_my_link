import { Entity, Column, PrimaryGeneratedColumn, CreateDateColumn, UpdateDateColumn, OneToOne, JoinColumn } from 'typeorm';


@Entity('menu_options', {database: 'default', schema: 'public'})
class MenuOption {
	@PrimaryGeneratedColumn('uuid')
	id: string;

	@Column()
	meop_module_seq: string;

	@Column()
	meop_seq: string;

	@Column()
	meop_level: string;

	@Column()
	meop_icon: string;

	@Column()
	meop_text: string;
	
	@Column()
	meop_route: string;

	@CreateDateColumn()
	created_at: Date;

	@UpdateDateColumn()
	updated_at: Date;
}

export default MenuOption;
