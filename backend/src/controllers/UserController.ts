import { Request, Response } from 'express';
import { classToClass } from 'class-transformer';

import UserCreateService from '../services/User/UserCreateService';

export default class UserController {
	public async create(request: Request, response: Response): Promise<Response> {
		try {
			const { 
				userName, 
				userEmail, 
				userProfile,
				userCustomer,
				userPassword 
			} = request.body;

			const userCreate = new UserCreateService();

			const user = await userCreate.execute({
				user_name: userName,
				user_email: userEmail,
				profile_id: userProfile,
				user_customer: userCustomer,
				user_password: userPassword
			});

			return response.json(classToClass(user));
		} catch (err) {
			return response.status(400).json({ error: err.message });
		}
	}
}
