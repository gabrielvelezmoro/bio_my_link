import { getRepository } from 'typeorm';

import MenuOption from '../../models/MenuOption';

interface Request {
	meop_module_seq: string;
	meop_seq: string;
	meop_level: string;
	meop_icon: string;
	meop_text: string;
	meop_route: string;
}

class MenuOptionCreateService {
	public async execute({ 
		meop_module_seq,
		meop_seq,
		meop_level,
		meop_icon,
		meop_text,
		meop_route
	}: Request): Promise<MenuOption> {
		const menuOptionsRepository = getRepository(MenuOption);

		const menuOption = menuOptionsRepository.create({
			meop_module_seq,
			meop_seq,
			meop_level,
			meop_icon,
			meop_text,
			meop_route
		});

		await menuOptionsRepository.save(menuOption);

		return menuOption;
	}
}

export default MenuOptionCreateService;
