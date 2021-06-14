import { Request, Response } from 'express';

import MenuOptionCreateService from '../services/MenuOption/MenuOptionCreateService';

export default class MenuOptionController {
	public async create(request: Request, response: Response): Promise<Response> {
		try {
			const { 
				meopModuleSeq,
				meopSeq,
				meopLevel,
				meopIcon,
				meopText,
				meopRoute
			} = request.body;

			const menuOptionCreate = new MenuOptionCreateService();

			const module = await menuOptionCreate.execute({
				meop_module_seq: meopModuleSeq,
				meop_seq: meopSeq,
				meop_level: meopLevel,
				meop_icon: meopIcon,
				meop_text: meopText,
				meop_route: meopRoute
			});

			return response.json(module);
		} catch (err) {
			return response.status(400).json({ error: err.message });
		}
	}
}
