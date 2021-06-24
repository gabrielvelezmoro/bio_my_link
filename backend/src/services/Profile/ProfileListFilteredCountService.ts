import { getRepository } from 'typeorm';

import Profile from '../../models/Profile';

interface Request {
	search: string;
}

class ProfileListFilteredCountService {
	public async execute({ search }: Request): Promise<number> {
		const profilesRepository = getRepository(Profile);

		let sqlWhere = '';
		
		sqlWhere += 'user ilike \'%' + search + '%\' or ';
		sqlWhere += 'prof_links ilike \'%' + search + '%\' or ';
		sqlWhere += 'prof_custom_url ilike \'%' + search + '%\'';

		const [profiles, profilesCount] = await profilesRepository.findAndCount({
			where: sqlWhere
		});

		return profilesCount;
	}
}

export default ProfileListFilteredCountService;
