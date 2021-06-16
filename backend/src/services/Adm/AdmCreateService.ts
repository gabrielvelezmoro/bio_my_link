import { getRepository } from 'typeorm';
import { hash } from 'bcryptjs';

import Adm from '../../models/Adm';

interface Request {
	adm_name: string;
	adm_email: string;
	adm_password: string;
}

class AdmCreateService {
	public async execute({ adm_name, adm_email, adm_password }: Request): Promise<Adm> {
		const admsRepository = getRepository(Adm);

		const checkIfUserExists = await admsRepository.findOne({
			where: { adm_email }
		});

		if (checkIfUserExists) {
			throw new Error('Email address already exists.')
		}

		const hashedPassword = await hash(adm_password, 8);

		const adm = admsRepository.create({
			adm_name,
			adm_email,
			adm_password: hashedPassword
		});

		await admsRepository.save(adm);

		return adm;
	}
}

export default AdmCreateService;
