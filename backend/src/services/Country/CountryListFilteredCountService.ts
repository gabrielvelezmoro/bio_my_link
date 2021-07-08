import { getRepository } from 'typeorm';

import Country from '../../models/Country';

interface Request {
	search: string;
}

class CountryListFilteredCountService {
	public async execute({ search }: Request): Promise<number> {
		const countriesRepository = getRepository(Country);

		let sqlWhere = '';
		
		sqlWhere += 'name ilike \'%' + search + '%\' or ';
		sqlWhere += 'currency ilike \'%' + search + '%\'';

		const [countries, countriesCount] = await countriesRepository.findAndCount({
			where: sqlWhere
		});

		return countriesCount;
	}
}

export default CountryListFilteredCountService;
