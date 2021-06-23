import { Router } from 'express';

import userRouter from './user.routes';
import sessionRouter from './session.routes';
import menuOptionRouter from './menuOption.routes';
import profileRouter from './profile.routes';

const routes = Router();

routes.use('/user', userRouter);
routes.use('/session', sessionRouter);
routes.use('/menu-option', menuOptionRouter);
routes.use('/profiles', profileRouter);

export default routes;
