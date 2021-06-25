import { getRepository, Like } from 'typeorm';

import User from '../../models/User';

interface Request {
	search: string;
	page: number;
	rowsPerPage: number;
}

class UserListFilteredService {
	public async execute({ search, page, rowsPerPage }: Request): Promise<User[]> {
		const usersRepository = getRepository(User);

		const take = rowsPerPage || 10
		const skip = (page * rowsPerPage) || 0

		let sqlWhere = '';
		
		sqlWhere += 'user_name ilike \'%' + search + '%\' or ';
		sqlWhere += 'user_email ilike \'%' + search + '%\' or ';
		sqlWhere += 'profile ilike \'%' + search + '%\'';

		const users = await usersRepository.find({
			where: sqlWhere,
			order: { user_name: 'ASC' },
			take: take,
			skip: skip
		});

		return users;
	}
}

export default UserListFilteredService;
