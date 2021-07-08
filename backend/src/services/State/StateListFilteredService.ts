import { getRepository, Like } from 'typeorm';

import State from '../../models/State';

interface Request {
	search: string;
	page: number;
	rowsPerPage: number;
}

class StateListFilteredService {
	public async execute({ search, page, rowsPerPage }: Request): Promise<State[]> {
		const statesRepository = getRepository(State);

		const take = rowsPerPage || 10
		const skip = (page * rowsPerPage) || 0

		let sqlWhere = '';
		
		sqlWhere += 'name ilike \'%' + search + '%\' or ';
		sqlWhere += 'currency ilike \'%' + search + '%\'';

		const states = await statesRepository.find({
			where: sqlWhere,
			order: { name: 'ASC' },
			take: take,
			skip: skip
		});

		return states;
	}
}

export default StateListFilteredService;
