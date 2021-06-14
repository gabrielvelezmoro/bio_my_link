import { getRepository } from 'typeorm';

import Module from '../../models/Module';

interface Request {
	id: string;
}

class ModuleDeleteService {
	public async execute(id: string): Promise<void> {
		const modulesRepository = getRepository(Module);

		const module = await modulesRepository.findOne(id);

		if (!module) {
			throw new Error('Módulo não localizado.');
		}

		await modulesRepository.delete(id);
	}
}

export default ModuleDeleteService;
