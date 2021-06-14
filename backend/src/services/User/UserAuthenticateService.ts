import { getRepository } from 'typeorm';
import { compare } from 'bcryptjs';
import { sign } from 'jsonwebtoken';

import authConfig from '../../config/auth';
import User from '../../models/User';

interface Request {
	user_email: string;
	user_password: string;
}

interface Response {
	user: User;
	token: string;
}

class UserAuthenticateService {
	public async execute({ user_email, user_password}: Request): Promise<Response> {
		const usersRepository = getRepository(User);

		const user = await usersRepository.findOne({
			where: { user_email }
		});

		if (!user) {
			throw new Error('Incorrect userEmail/password combination.');
		}

		const passwordMatched = await compare(user_password, user.user_password);

		if (!passwordMatched) {
			throw new Error('Incorrect email/password combination.');
		}

		const { secret, expiresIn } = authConfig.jwt;

		const token = sign({}, secret, {
			subject: user.id,
			expiresIn
		});

		return { user, token };
	}
}

export default UserAuthenticateService;