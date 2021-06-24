import { getRepository } from 'typeorm';

import User from '../../models/User';

class UserListAllService {
	public async execute(): Promise<User[]> {
		const usersRepository = getRepository(User);

		const users = usersRepository.find({
			order: { user_name: 'ASC' }
		});

		return users;
	}
}

export default UserListAllService;
