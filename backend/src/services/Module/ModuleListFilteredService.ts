import { getRepository, Like } from 'typeorm';

import Module from '../../models/Module';

interface Request {
	search: string;
	page: number;
	rowsPerPage: number;
}

class ModuleListFilteredService {
	public async execute({ search, page, rowsPerPage }: Request): Promise<Module[]> {
		const modulesRepository = getRepository(Module);

		const take = rowsPerPage || 10
		const skip = (page * rowsPerPage) || 0

		let sqlWhere = '';
		
		sqlWhere += 'modu_name ilike \'%' + search + '%\' or ';
		sqlWhere += 'modu_seq ilike \'%' + search + '%\'';

		const modules = await modulesRepository.find({
			where: sqlWhere,
			order: { modu_seq: 'ASC' },
			take: take,
			skip: skip
		});

		return modules;
	}
}

export default ModuleListFilteredService;
