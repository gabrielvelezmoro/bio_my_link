import { getRepository } from 'typeorm';

import Country from '../../models/Country';

class CountryGetService {
	public async execute(id: string): Promise<Country> {
		const countriesRepository = getRepository(Country);

		const country = await countriesRepository.findOne(id);

		if (!country) {
			throw new Error('Pais não localizado.');
		}

		return country;
	}
}

export default CountryGetService;
