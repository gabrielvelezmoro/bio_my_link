import { getRepository } from 'typeorm';

import State from '../../models/State';

interface Request {
	id: string;
}

class StateDeleteService {
	public async execute(id: string): Promise<void> {
		const statesRepository = getRepository(State);

		const state = await statesRepository.findOne(id);

		if (!state) {
			throw new Error('Estado não localizado.');
		}

		await statesRepository.delete(id);
	}
}

export default StateDeleteService;
