import { getRepository } from 'typeorm';

import User from '../../models/User';

class UserGetService {
	public async execute(id: string): Promise<User> {
		const usersRepository = getRepository(User);

		const user = await usersRepository.findOne(id);

		if (!user) {
			throw new Error('user não localizado.');
		}
		

		return user;
	}
}

export default UserGetService;
