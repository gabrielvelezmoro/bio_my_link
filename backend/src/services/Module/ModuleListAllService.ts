import { getRepository } from 'typeorm';

import Module from '../../models/Module';

class ModuleListAllService {
	public async execute(): Promise<Module[]> {
		const modulesRepository = getRepository(Module);

		const modules = modulesRepository.find({
			order: { modu_seq: 'ASC' }
		});

		return modules;
	}
}

export default ModuleListAllService;
