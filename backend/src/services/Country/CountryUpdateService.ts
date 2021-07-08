import { getRepository } from 'typeorm';

import Country from '../../models/Country';
import State from '../../models/State'

interface Request {
	id: string;
	name: string;
	currency: string;
	States: State[];
}

class CountryUpdateService {
	public async execute({id, name, currency, States }: Request): Promise<Country> {
		const countriesRepository = getRepository(Country);

		const country = await countriesRepository.findOne(id);

		if (!country) {
			throw new Error('Pais não localizado.');
		}

		country.name = name;
		country.currency = name;
		country.States = States;
		

		await countriesRepository.save(country);

		return country;
	}
}

export default CountryUpdateService;
