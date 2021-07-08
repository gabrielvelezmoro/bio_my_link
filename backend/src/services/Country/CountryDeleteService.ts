import { getRepository } from 'typeorm';

import Country from '../../models/Country';

interface Request {
	id: string;
}

class CountryDeleteService {
	public async execute(id: string): Promise<void> {
		const countriesRepository = getRepository(Country);

		const country = await countriesRepository.findOne(id);

		if (!country) {
			throw new Error('Pais| não localizado.');
		}

		await countriesRepository.delete(id);
	}
}

export default CountryDeleteService;
