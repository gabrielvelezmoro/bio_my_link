import { Router } from 'express';

import userRouter from './user.routes';
import admRouter from './adm.routes';
import sessionRouter from './session.routes';
import moduleRouter from './module.routes';
import menuOptionRouter from './menuOption.routes';
import profileRouter from './profile.routes';

const routes = Router();

routes.use('/user', userRouter);
routes.use('/adm', admRouter);
routes.use('/session', sessionRouter);
routes.use('/module', moduleRouter);
routes.use('/menu-option', menuOptionRouter);
routes.use('/profiles', profileRouter);

export default routes;
