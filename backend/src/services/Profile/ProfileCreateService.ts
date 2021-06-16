import { getRepository } from 'typeorm';

import Profile from '../../models/Profile';

interface Request {
	prof_username: string;
	prof_description: string;
	prof_links: string;
	prof_custom_url: string;
}

class ProfileCreateService {
	public async execute({ prof_username, prof_description, prof_links, prof_custom_url }: Request): Promise<Profile> {
		const profilesRepository = getRepository(Profile);

		const profile = profilesRepository.create({
			prof_username,
			prof_description,
			prof_links,
			prof_custom_url
		});

		await profilesRepository.save(profile);

		return profile;
	}
}

export default ProfileCreateService;
