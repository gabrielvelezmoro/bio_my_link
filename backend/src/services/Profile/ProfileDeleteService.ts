import { getRepository } from 'typeorm';

import Profile from '../../models/Profile';

interface Request {
	id: string;
}

class ProfileDeleteService {
	public async execute(id: string): Promise<void> {
		const profilesRepository = getRepository(Profile);

		const profile = await profilesRepository.findOne(id);

		if (!profile) {
			throw new Error('Profile não localizado.');
		}

		await profilesRepository.delete(id);
	}
}

export default ProfileDeleteService;
