import { Router } from 'express';

import ModuleController from '../controllers/ModuleController';

import ensureAuthenticated from '../middlewares/ensureAuthenticated';

const moduleRouter = Router();
const moduleController = new ModuleController();

moduleRouter.post('/', moduleController.create);
moduleRouter.post('/list', moduleController.index);
moduleRouter.post('/count', moduleController.count);
moduleRouter.get('/select', moduleController.select);
moduleRouter.get('/get/:id', moduleController.get);
moduleRouter.put('/:id', moduleController.update);
moduleRouter.delete('/:id', moduleController.delete);

export default moduleRouter;
