import { getRepository } from 'typeorm';

import Module from '../../models/Module';

class ModuleGetService {
	public async execute(id: string): Promise<Module> {
		const modulesRepository = getRepository(Module);

		const module = await modulesRepository.findOne(id);

		if (!module) {
			throw new Error('Módulo não localizado.');
		}

		return module;
	}
}

export default ModuleGetService;
