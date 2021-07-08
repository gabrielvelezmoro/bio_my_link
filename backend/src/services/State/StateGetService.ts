import { getRepository } from 'typeorm';

import State from '../../models/State';

class StateGetService {
	public async execute(id: string): Promise<State> {
		const statesRepository = getRepository(State);

		const state = await statesRepository.findOne(id);

		if (!state) {
			throw new Error('Pais não localizado.');
		}

		return state;
	}
}

export default StateGetService;
