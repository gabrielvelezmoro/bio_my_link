import { Router } from 'express';

import MenuOptionController from '../controllers/MenuOptionController';

import ensureAuthenticated from '../middlewares/ensureAuthenticated';

const menuOptionRouter = Router();
const menuOptionController = new MenuOptionController();

menuOptionRouter.post('/', menuOptionController.create);

export default menuOptionRouter;
