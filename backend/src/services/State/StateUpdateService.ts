import { getRepository } from 'typeorm';

import State from '../../models/State'
import Country from '../../models/Country';

interface Request {
	id: string;
	name: string;
	Country: Country;
}

class StateUpdateService {
	public async execute({id, name, Country }: Request): Promise<Country> {
		const statesRepository = getRepository(State);

		const states = await statesRepository.findOne(id);

		if (!states) {
			throw new Error('Pais não localizado.');
		}

		states.name = name;
		states.Country = Country;
		
		

		await statesRepository.save(states);

		return states;
	}
}

export default StateUpdateService;
