import { getRepository } from 'typeorm';
import { hash } from 'bcryptjs';

import User from '../../models/User';

interface Request {
	user_name: string;
	user_email: string;
	user_customer: Boolean;
	user_password: string;
}

class UserCreateService {
	public async execute({ user_name, user_email, user_password, user_customer }: Request): Promise<User> {
		const usersRepository = getRepository(User);

		const checkIfUsernameExists = await usersRepository.findOne({
			where: { user_name }
		});

		if (checkIfUsernameExists) {
			throw new Error('Username already exists.')
		}
		
		const checkIfEmailExists = await usersRepository.findOne({
			where: { user_email }
		});

		if (checkIfEmailExists) {
			throw new Error('Email address already exists.')
		}

		const hashedPassword = await hash(user_password, 8);

		const user = usersRepository.create({
			user_name,
			user_email,
			user_customer,
			user_password: hashedPassword
		});

		await usersRepository.save(user);

		return user;
	}
}

export default UserCreateService;
