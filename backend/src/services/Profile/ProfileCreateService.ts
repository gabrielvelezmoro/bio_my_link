import { getRepository } from 'typeorm';

import Profile from '../../models/Profile';
import User from '../../models/User'

interface Request {
	user: User;
	prof_description: string;
	prof_links: string;
	prof_custom_url: string;
}

class ProfileCreateService {
	public async execute({ prof_description, user, prof_custom_url }: Request): Promise<Profile> {
		const profilesRepository = getRepository(Profile);
		const usersRepository = getRepository(User);

		const profile = profilesRepository.create({
			user,
			prof_description,
			prof_custom_url
		});

		const userExist = await usersRepository.findOne(user);

		if (!userExist) {
			throw new Error('Usuário não localizado.');
		}


		await profilesRepository.save(profile);

		return profile;
	}
}

export default ProfileCreateService;
