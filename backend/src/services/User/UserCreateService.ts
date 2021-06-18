import { getRepository } from 'typeorm';
import { hash } from 'bcryptjs';

import User from '../../models/User';

interface Request {
	user_username: string;
	user_email: string;
	profile_id: string;
	user_customer: Boolean;
	user_password: string;
}

class UserCreateService {
	public async execute({ user_username, user_email, user_password, profile_id, user_customer }: Request): Promise<User> {
		const usersRepository = getRepository(User);

		const checkIfUserEmailExists = await usersRepository.findOne({
			where: { user_username }
		});

		if (checkIfUserEmailExists) {
			throw new Error('Username already exists.')
		}
		
		const checkIfUsernameExists = await usersRepository.findOne({
			where: { user_email }
		});

		if (checkIfUsernameExists) {
			throw new Error('Email address already exists.')
		}

		const hashedPassword = await hash(user_password, 8);

		const user = usersRepository.create({
			user_username,
			user_first_name,
			user_last_name,
			user_email,
			profile_id,
			user_customer,
			user_password: hashedPassword
		});

		await usersRepository.save(user);

		return user;
	}
}

export default UserCreateService;
