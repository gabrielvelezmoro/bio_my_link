import { Request, Response } from 'express';

import ProfileCreateService from '../services/Profile/ProfileCreateService';
import ProfileListAllService from '../services/Profile/ProfileListAllService';
import ProfileListFilteredCountService from '../services/Profile/ProfileListFilteredCountService';
import ProfileListFilteredService from '../services/Profile/ProfileListFilteredService';
import ProfileGetService from '../services/Profile/ProfileGetService';
import ProfileUpdateService from '../services/Profile/ProfileUpdateService';
import ProfileDeleteService from '../services/Profile/ProfileDeleteService';

export default class ProfileController {
	public async create(request: Request, response: Response): Promise<Response> {
		try {
			const { 
				user,
                profDescription,
                profLinks,
                profCustomUrl
			} = request.body;

			const profileCreate = new ProfileCreateService();

			const profile = await profileCreate.execute({
				user: user,
                prof_description: profDescription,
                prof_links: profLinks,
                prof_custom_url: profCustomUrl
			});

			return response.json(profile);
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
			
			const profileListFiltered = new ProfileListFilteredService();

			const profiles = await profileListFiltered.execute({ search, page, rowsPerPage });

			return response.json(profiles);
		} catch (err) {
			return response.status(400).json({ error: err.message });
		}
	}

	public async count(request: Request, response: Response): Promise<Response> {
		try {
			const { 
				search
			} = request.body;

			const profileListFilteredCount = new ProfileListFilteredCountService();

			const profilesCount = await profileListFilteredCount.execute({ search });

			return response.json({ count: profilesCount });
		} catch (err) {
			return response.status(400).json({ error: err.message });
		}
	}

	public async select(request: Request, response: Response): Promise<Response> {
		try {
			const profileListAll = new ProfileListAllService();

			const profiles = await profileListAll.execute();

			return response.json(profiles);
		} catch (err) {
			return response.status(400).json({ error: err.message });
		}
	}

	public async get(request: Request, response: Response): Promise<Response> {
		const id = request.params.id;

		try {
			const profileGet = new ProfileGetService();

			const profile = await profileGet.execute(id);

			return response.json(profile);
		} catch (err) {
			return response.status(400).json({ error: err.message });
		}
	}

	public async update(request: Request, response: Response): Promise<Response> {
		const id = request.params.id;

		const { 
			userId,
			profDescription,
            profLinks,
            profCustomUrl
		} = request.body;

		try {
			const profileUpdate = new ProfileUpdateService();

			const profile = await profileUpdate.execute({
				id,
				user: userId,
                prof_description: profDescription,
                prof_links: profLinks,
                prof_custom_url: profCustomUrl
			});

			return response.json(profile);
		} catch (err) {
			return response.status(400).json({ error: err.message });
		}
	}

	public async delete(request: Request, response: Response): Promise<Response> {
		const id = request.params.id;

		try {
			const profileDelete = new ProfileDeleteService();
			await profileDelete.execute(id);

			const profileListAll = new ProfileListAllService();
			const profiles = await profileListAll.execute();

			return response.json(profiles);
		} catch (err) {
			return response.status(400).json({ error: err.message });
		}
	}
}
