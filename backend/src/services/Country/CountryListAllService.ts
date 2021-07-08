import { getRepository } from 'typeorm';

import Country from '../../models/Country';

class CountryListAllService {
	public async execute(): Promise<Country[]> {
		const countriesRepository = getRepository(Country);

		const countries = countriesRepository.find({
			order: { name: 'ASC' }
		});

		return countries;
	}
}

export default CountryListAllService;
