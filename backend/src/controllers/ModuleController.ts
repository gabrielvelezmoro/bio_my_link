import { Request, Response } from 'express';

import ModuleCreateService from '../services/Module/ModuleCreateService';
import ModuleListAllService from '../services/Module/ModuleListAllService';
import ModuleListFilteredCountService from '../services/Module/ModuleListFilteredCountService';
import ModuleListFilteredService from '../services/Module/ModuleListFilteredService';
import ModuleGetService from '../services/Module/ModuleGetService';
import ModuleUpdateService from '../services/Module/ModuleUpdateService';
import ModuleDeleteService from '../services/Module/ModuleDeleteService';

export default class ModuleController {
	public async create(request: Request, response: Response): Promise<Response> {
		try {
			const { 
				moduName,
				moduSeq
			} = request.body;

			const moduleCreate = new ModuleCreateService();

			const module = await moduleCreate.execute({
				modu_name: moduName,
				modu_seq: moduSeq
			});

			return response.json(module);
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
			
			const moduleListFiltered = new ModuleListFilteredService();

			const modules = await moduleListFiltered.execute({ search, page, rowsPerPage });

			return response.json(modules);
		} catch (err) {
			return response.status(400).json({ error: err.message });
		}
	}

	public async count(request: Request, response: Response): Promise<Response> {
		try {
			const { 
				search
			} = request.body;

			const moduleListFilteredCount = new ModuleListFilteredCountService();

			const modulesCount = await moduleListFilteredCount.execute({ search });

			return response.json({ count: modulesCount });
		} catch (err) {
			return response.status(400).json({ error: err.message });
		}
	}

	public async select(request: Request, response: Response): Promise<Response> {
		try {
			const moduleListAll = new ModuleListAllService();

			const modules = await moduleListAll.execute();

			return response.json(modules);
		} catch (err) {
			return response.status(400).json({ error: err.message });
		}
	}

	public async get(request: Request, response: Response): Promise<Response> {
		const id = request.params.id;

		try {
			const moduleGet = new ModuleGetService();

			const module = await moduleGet.execute(id);

			return response.json(module);
		} catch (err) {
			return response.status(400).json({ error: err.message });
		}
	}

	public async update(request: Request, response: Response): Promise<Response> {
		const id = request.params.id;

		const { 
			moduName,
			moduSeq
		} = request.body;

		try {
			const moduleUpdate = new ModuleUpdateService();

			const module = await moduleUpdate.execute({
				id,
				modu_name: moduName,
				modu_seq: moduSeq
			});

			return response.json(module);
		} catch (err) {
			return response.status(400).json({ error: err.message });
		}
	}

	public async delete(request: Request, response: Response): Promise<Response> {
		const id = request.params.id;

		try {
			const moduleDelete = new ModuleDeleteService();
			await moduleDelete.execute(id);

			const moduleListAll = new ModuleListAllService();
			const modules = await moduleListAll.execute();

			return response.json(modules);
		} catch (err) {
			return response.status(400).json({ error: err.message });
		}
	}
}
