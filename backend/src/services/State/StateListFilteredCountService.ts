import { getRepository } from 'typeorm';

import State from '../../models/State';

interface Request {
	search: string;
}

class StateListFilteredCountService {
	public async execute({ search }: Request): Promise<number> {
		const statesRepository = getRepository(State);

		let sqlWhere = '';
		
		sqlWhere += 'name ilike \'%' + search + '%\' or ';
		sqlWhere += 'Country ilike \'%' + search + '%\'';

		const [states, statesCount] = await statesRepository.findAndCount({
			where: sqlWhere
		});

		return statesCount;
	}
}

export default StateListFilteredCountService;
