import { getRepository } from 'typeorm';

import Profile from '../../models/Profile';

class ProfileGetService {
	public async execute(id: string): Promise<Profile> {
		const profilesRepository = getRepository(Profile);

		const profile = await profilesRepository.findOne(id);

		if (!profile) {
			throw new Error('Profile não localizado.');
		}

		return profile;
	}
}

export default ProfileGetService;
