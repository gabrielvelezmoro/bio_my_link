import { Request, Response } from 'express';
import { classToClass } from 'class-transformer';

import UserAvatarUpdateService from '../services/User/UserAvatarUpdateService';

export default class UserAvatarController {
	public async update(request: Request, response: Response): Promise<Response> {
		try {
			const userAvatarUpdate = new UserAvatarUpdateService();

			const user = await userAvatarUpdate.execute({
				user_id: request.user.id,
				avatarFilename: request.file.filename
			});

			return response.json(classToClass(user));
		} catch (err) {
			return response.status(400).json({ error: err.message });
		}
	}
}