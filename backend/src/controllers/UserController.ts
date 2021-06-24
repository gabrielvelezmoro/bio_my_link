import { Request, Response } from 'express';
import { classToClass } from 'class-transformer';

import UserCreateService from '../services/User/UserCreateService';
import UserDeleteService from '../services/User/UserDeleteService';
import UserListAllService from '../services/User/UserListAllService';

export default class UserController {
	public async create(request: Request, response: Response): Promise<Response> {
		try {
			const { 
				userName, 
				userEmail, 
				userCustomer,
				userPassword 
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
