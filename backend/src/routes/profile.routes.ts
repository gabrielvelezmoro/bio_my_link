import { Router } from 'express';

import ProfileController from '../controllers/ProfileController';

import ensureAuthenticated from '../middlewares/ensureAuthenticated';

const profileRouter = Router();
const profileController = new ProfileController();

profileRouter.post('/',ensureAuthenticated, profileController.create);
profileRouter.post('/list',ensureAuthenticated, profileController.index);
profileRouter.post('/count',ensureAuthenticated, profileController.count);
profileRouter.get('/select',ensureAuthenticated, profileController.select);
profileRouter.get('/get/:id',ensureAuthenticated, profileController.get);
profileRouter.put('/:id',ensureAuthenticated, profileController.update);
profileRouter.delete('/:id',ensureAuthenticated, profileController.delete);

export default profileRouter;
