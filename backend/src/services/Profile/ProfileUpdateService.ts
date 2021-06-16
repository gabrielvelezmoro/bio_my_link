import { getRepository } from 'typeorm';

import Profile from '../../models/Profile';

interface Request {
	id: string;
	prof_username: string;
	prof_description: string;
	prof_links: string;
	prof_custom_url: string;
}

class ProfileUpdateService {
	public async execute({ id, prof_username, prof_description, prof_links, prof_custom_url }: Request): Promise<Profile> {
		const profilesRepository = getRepository(Profile);

		const profile = await profilesRepository.findOne(id);

		if (!profile) {
			throw new Error('Profile não localizado.');
		}

		profile.prof_username = prof_username;
		profile.prof_description = prof_description;
		profile.prof_links = prof_links;
		profile.prof_custom_url = prof_custom_url;

		await profilesRepository.save(profile);

		return profile;
	}
}

export default ProfileUpdateService;
