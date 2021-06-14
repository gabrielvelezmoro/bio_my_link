import { getRepository } from 'typeorm';

import Module from '../../models/Module';

interface Request {
	search: string;
}

class ModuleListFilteredCountService {
	public async execute({ search }: Request): Promise<number> {
		const modulesRepository = getRepository(Module);

		let sqlWhere = '';
		
		sqlWhere += 'modu_name ilike \'%' + search + '%\' or ';
		sqlWhere += 'modu_seq ilike \'%' + search + '%\'';

		const [modules, modulesCount] = await modulesRepository.findAndCount({
			where: sqlWhere
		});

		return modulesCount;
	}
}

export default ModuleListFilteredCountService;
