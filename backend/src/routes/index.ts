import { Router } from 'express';

import userRouter from './user.routes';
import sessionRouter from './session.routes';
import moduleRouter from './module.routes';
import menuOptionRouter from './menuOption.routes';

const routes = Router();

routes.use('/user', userRouter);
routes.use('/session', sessionRouter);
routes.use('/module', moduleRouter);
routes.use('/menu-option', menuOptionRouter);

export default routes;
