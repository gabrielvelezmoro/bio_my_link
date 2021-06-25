import { getRepository } from 'typeorm';

import User from '../../models/User';

interface Request {
	search: string;
}

class UserListFilteredCountService {
	public async execute({ search }: Request): Promise<number> {
		const usersRepository = getRepository(User);

		let sqlWhere = '';
		
		sqlWhere += 'profile ilike \'%' + search + '%\' or ';
		sqlWhere += 'user_name ilike \'%' + search + '%\' or ';
		sqlWhere += 'user_email ilike \'%' + search + '%\'or ';
		sqlWhere += 'user_password ilike \'%' + search + '%\'';

		const [users, usersCount] = await usersRepository.findAndCount({
			where: sqlWhere
		});

		return usersCount;
	}
}

export default UserListFilteredCountService;
