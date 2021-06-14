import { getRepository } from 'typeorm';

import Module from '../../models/Module';

interface Request {
	id: string;
	modu_name: string;
	modu_seq: string;
}

class ModuleUpdateService {
	public async execute({ id, modu_name, modu_seq }: Request): Promise<Module> {
		const modulesRepository = getRepository(Module);

		const module = await modulesRepository.findOne(id);

		if (!module) {
			throw new Error('Módulo não localizado.');
		}

		module.modu_name = modu_name;
		module.modu_seq = modu_seq;

		await modulesRepository.save(module);

		return module;
	}
}

export default ModuleUpdateService;
