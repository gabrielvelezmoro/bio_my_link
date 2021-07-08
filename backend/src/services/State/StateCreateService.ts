import { getRepository } from 'typeorm';

import State from '../../models/State'
import Country from '../../models/Country';

interface Request {
	name: string;
	Country: Country;
}

class CountryCreateService {
	public async execute({name, Country}: Request): Promise<Country> {
		const statesRepository = getRepository(State);

		const state = statesRepository.create({
			name,
			Country,			
		});


		await statesRepository.save(state);

		return state;
	}
}

export default CountryCreateService;
