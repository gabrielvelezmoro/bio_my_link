import { getRepository } from 'typeorm';

import Profile from '../../models/Profile';

class ProfileListAllService {
	public async execute(): Promise<Profile[]> {
		const profilesRepository = getRepository(Profile);

		const profiles = profilesRepository.find({
			order: { prof_description: 'ASC' }
		});

		return profiles;
	}
}

export default ProfileListAllService;
