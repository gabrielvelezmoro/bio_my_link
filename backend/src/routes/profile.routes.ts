import { Router } from 'express';

import ProfileController from '../controllers/ProfileController';

import ensureAuthenticated from '../middlewares/ensureAuthenticated';

const profileRouter = Router();
const profileController = new ProfileController();

profileRouter.post('/', profileController.create);
profileRouter.post('/list', profileController.index);
profileRouter.post('/count', profileController.count);
profileRouter.get('/select', profileController.select);
profileRouter.get('/get/:id', profileController.get);
profileRouter.put('/:id', profileController.update);
profileRouter.delete('/:id', profileController.delete);

export default profileRouter;
