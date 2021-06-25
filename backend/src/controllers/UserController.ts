import { Request, Response } from 'express';
import { classToClass } from 'class-transformer';

import UserCreateService from '../services/User/UserCreateService';
import UserListAllService from '../services/User/UserListAllService';
import UserListFilteredCountService  from '../services/User/UserListFilteredCountService';
import UserListFilteredService from '../services/User/UserListFilteredService';
import UserGetService from '../services/User/UserGetService';
import UserUpdateService from '../services/User/UserUpdateService';
import UserDeleteService from '../services/User/UserDeleteService';

export default class UserController {
	public async create(request: Request, response: Response): Promise<Response> {
		try {
			const { 
				userName, 
				userEmail, 
				userCustomer,
				userPassword, 
			} = request.body;

			const userCreate = new UserCreateService();

			const user = await userCreate.execute({
				user_name: userName,
				user_email: userEmail,
				user_customer: userCustomer,
				user_password: userPassword
			});

			return response.json(classToClass(user));
		} catch (err) {
			return response.status(400).json({ error: err.message });
		}
	}

	public async index(request: Request, response: Response): Promise<Response> {
		try {
			const { 
				search,
				page,
				rowsPerPage
			} = request.body;
			
			const userListFiltered = new UserListFilteredService();

			const users = await userListFiltered.execute({ search, page, rowsPerPage });

			return response.json(users);
		} catch (err) {
			return response.status(400).json({ error: err.message });
		}
	}

	public async count(request: Request, response: Response): Promise<Response> {
		try {
			const { 
				search
			} = request.body;

			const userListFilteredCount = new UserListFilteredCountService();

			const usersCount = await userListFilteredCount.execute({ search });

			return response.json({ count: usersCount });
		} catch (err) {
			return response.status(400).json({ error: err.message });
		}
	}

	public async select(request: Request, response: Response): Promise<Response> {
		try {
			const userListAll = new UserListAllService();

			const users = await userListAll.execute();

			return response.json(users);
		} catch (err) {
			return response.status(400).json({ error: err.message });
		}
	}

	public async get(request: Request, response: Response): Promise<Response> {
		const id = request.params.id;

		try {
			const userGet = new UserGetService();

			const user = await userGet.execute(id);

			return response.json(user);
		} catch (err) {
			return response.status(400).json({ error: err.message });
		}
	}

	public async update(request: Request, response: Response): Promise<Response> {
		const id = request.params.id;

		const { 
			userName, 
			userEmail, 
			userCustomer,
			userPassword,
			profile 
		} = request.body;

		try {
			const userUpdate = new UserUpdateService();

			const user = await userUpdate.execute({
				id,
                user_name: userName,
                user_email: userEmail,
                user_customer: userCustomer,
                user_password: userPassword,
				profile: profile
			});

			return response.json(user);
		} catch (err) {
			return response.status(400).json({ error: err.message });
		}
	}

	public async delete(request: Request, response: Response): Promise<Response> {
		const id = request.params.id;

		try {
			const userDelete = new UserDeleteService();
			await userDelete.execute(id);

			const userListAll = new UserListAllService();
			const users = await userListAll.execute();

			return response.json(users);
		} catch (err) {
			return response.status(400).json({ error: err.message });
		}
	}
}
