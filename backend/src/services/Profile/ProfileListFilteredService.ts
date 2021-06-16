import { getRepository, Like } from 'typeorm';

import Profile from '../../models/Profile';

interface Request {
	search: string;
	page: number;
	rowsPerPage: number;
}

class ProfileListFilteredService {
	public async execute({ search, page, rowsPerPage }: Request): Promise<Profile[]> {
		const profilesRepository = getRepository(Profile);

		const take = rowsPerPage || 10
		const skip = (page * rowsPerPage) || 0

		let sqlWhere = '';
		
		sqlWhere += 'prof_username ilike \'%' + search + '%\' or ';
		sqlWhere += 'prof_description ilike \'%' + search + '%\' or ';
		sqlWhere += 'prof_links ilike \'%' + search + '%\' or ';
		sqlWhere += 'prof_custom_url ilike \'%' + search + '%\'';

		const profiles = await profilesRepository.find({
			where: sqlWhere,
			order: { prof_username: 'ASC' },
			take: take,
			skip: skip
		});

		return profiles;
	}
}

export default ProfileListFilteredService;
