import { getRepository } from 'typeorm';

import Country from '../../models/Country';
import State from '../../models/State'

interface Request {
	name: string;
	currency: string;
	States: State[];
}

class CountryCreateService {
	public async execute({name, currency, States}: Request): Promise<Country> {
		const countriesRepository = getRepository(Country);

		const country = countriesRepository.create({
			name,
			currency,
			States
		});


		await countriesRepository.save(country);

		return country;
	}
}

export default CountryCreateService;
