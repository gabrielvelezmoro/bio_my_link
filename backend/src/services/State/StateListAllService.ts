import { getRepository } from 'typeorm';

import State from '../../models/State';

class StateListAllService {
	public async execute(): Promise<State[]> {
		const statesRepository = getRepository(State);

		const states = statesRepository.find({
			order: { name: 'ASC' }
		});

		return states;
	}
}

export default StateListAllService;
