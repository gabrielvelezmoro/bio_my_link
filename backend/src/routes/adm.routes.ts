import { Router } from 'express';
import multer from 'multer';
import uploadConfig from '../config/upload';

import AdmController from '../controllers/AdmController';


import ensureAuthenticated from '../middlewares/ensureAuthenticated';

const admRouter = Router();
const admController = new AdmController();


const upload = multer(uploadConfig);

admRouter.post('/', admController.create);


export default admRouter;
