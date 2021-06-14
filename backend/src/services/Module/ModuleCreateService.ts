import { getRepository } from 'typeorm';

import Module from '../../models/Module';

interface Request {
	modu_name: string;
	modu_seq: string;
}

class ModuleCreateService {
	public async execute({ modu_name, modu_seq }: Request): Promise<Module> {
		const modulesRepository = getRepository(Module);

		const module = modulesRepository.create({
			modu_name,
			modu_seq
		});

		await modulesRepository.save(module);

		return module;
	}
}

export default ModuleCreateService;
