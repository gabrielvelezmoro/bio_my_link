import { getRepository } from 'typeorm';

import User from '../../models/User';

interface Request {
	id: string;
}

class UserDeleteService {
	public async execute(id: string): Promise<void> {
		const usersRepository = getRepository(User);

		const user = await usersRepository.findOne(id);

		if (!user) {
			throw new Error('user não localizado.');
		}

		await usersRepository.delete(id);
	}
}

export default UserDeleteService;
