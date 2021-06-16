import { getRepository } from 'typeorm';
import { compare } from 'bcryptjs';
import { sign } from 'jsonwebtoken';

import authConfig from '../../config/auth';
import Adm from '../../models/Adm';

interface Request {
 	adm_email: string;
	adm_password: string;
}

interface Response {
	adm: Adm;
	token: string;
}

class AdmAuthenticateService {
	public async execute({ adm_email, adm_password}: Request): Promise<Response> {
		const admsRepository = getRepository(Adm);

		const adm = await admsRepository.findOne({
			where: { adm_email }
		});

		if (!adm) {
			throw new Error('Incorrect adm Email/password combination.');
		}

		const passwordMatched = await compare(adm_password, adm.adm_password);

		if (!passwordMatched) {
			throw new Error('Incorrect email/password combination.');
		}

		const { secret, expiresIn } = authConfig.jwt;

		const token = sign({}, secret, {
			subject: adm.id,
			expiresIn
		});

		return { adm, token };
	}
}

export default AdmAuthenticateService;