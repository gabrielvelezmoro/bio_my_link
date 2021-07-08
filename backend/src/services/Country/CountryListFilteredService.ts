import { getRepository, Like } from 'typeorm';

import Country from '../../models/Country';

interface Request {
	search: string;
	page: number;
	rowsPerPage: number;
}

class CountryListFilteredService {
	public async execute({ search, page, rowsPerPage }: Request): Promise<Country[]> {
		const countriesRepository = getRepository(Country);

		const take = rowsPerPage || 10
		const skip = (page * rowsPerPage) || 0

		let sqlWhere = '';
		
		sqlWhere += 'name ilike \'%' + search + '%\' or ';
		sqlWhere += 'currency ilike \'%' + search + '%\'';

		const countries = await countriesRepository.find({
			where: sqlWhere,
			order: { name: 'ASC' },
			take: take,
			skip: skip
		});

		return countries;
	}
}

export default CountryListFilteredService;
