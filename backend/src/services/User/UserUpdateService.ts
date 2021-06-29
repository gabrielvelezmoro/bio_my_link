import { getRepository } from 'typeorm';
import { hash } from 'bcryptjs';
import User from '../../models/User'
import Profile from '../../models/Profile';

interface Request {
	id: string;
	profile: string;
	user_name: string;
	user_email: string;
	user_customer: Boolean;
	user_password: string;
}

class UserUpdateService {
	public async execute({ id, profile, user_name, user_email, user_customer, user_password }: Request): Promise<User> {
		const usersRepository = getRepository(User);

		const user = await usersRepository.findOne(id);

		if (!user) {
			throw new Error('User não localizado.');
		}

		const hashedPassword = await hash(user_password, 8);


		user.profile = profile;
		user.user_name = user_name;
		user.user_email = user_email;
		user.user_customer = user_customer;
		user.user_password = hashedPassword;

		await usersRepository.save(user);


		return user;
	}
}

export default UserUpdateService;
