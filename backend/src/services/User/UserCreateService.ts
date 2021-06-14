import { getRepository } from 'typeorm';
import { hash } from 'bcryptjs';

import User from '../../models/User';

interface Request {
	user_name: string;
	user_email: string;
	user_password: string;
}

class UserCreateService {
	public async execute({ user_name, user_email, user_password }: Request): Promise<User> {
		const usersRepository = getRepository(User);

		const checkIfUserExists = await usersRepository.findOne({
			where: { user_email }
		});

		if (checkIfUserExists) {
			throw new Error('Email address already exists.')
		}

		const hashedPassword = await hash(user_password, 8);

		const user = usersRepository.create({
			user_name,
			user_email,
			user_password: hashedPassword
		});

		await usersRepository.save(user);

		return user;
	}
}

export default UserCreateService;
