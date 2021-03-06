import { Router } from 'express';
import multer from 'multer';
import uploadConfig from '../config/upload';

import UserController from '../controllers/UserController';
import UserAvatarControllers from '../controllers/UserAvatarController';

import ensureAuthenticated from '../middlewares/ensureAuthenticated';

const userRouter = Router();
const userController = new UserController();
const userAvatarControllers = new UserAvatarControllers();

const upload = multer(uploadConfig);

userRouter.post('/', userController.create);
userRouter.post('/list', userController.index);
userRouter.post('/count', userController.count);
userRouter.get('/select', userController.select);
userRouter.get('/get/:id', userController.get);
userRouter.put('/:id', userController.update);
userRouter.delete('/:id', userController.delete);
userRouter.patch('/avatar', ensureAuthenticated, upload.single('avatar'), userAvatarControllers.update);

export default userRouter;
