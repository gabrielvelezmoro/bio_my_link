import { Request, Response } from 'express';
import { classToClass } from 'class-transformer';

import AdmCreateService from '../services/Adm/AdmCreateService';

export default class AdmController {
	public async create(request: Request, response: Response): Promise<Response> {
		try {
			const { 
				admName, 
				admEmail, 
				admPassword 
			} = request.body;

			const admCreate = new AdmCreateService();

			const adm = await admCreate.execute({
				adm_name: admName,
				adm_email: admEmail,
				adm_password: admPassword
			});

			return response.json(classToClass(adm));
		} catch (err) {
			return response.status(400).json({ error: err.message });
		}
	}
}
