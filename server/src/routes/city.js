import express from 'express';

import { cityController } from '../app/controllers/index.js';
import { checkAdmin } from '../app/middlewares/auth.js';

const cityRouter = express.Router();

cityRouter.get('/', cityController.getAllCity);

cityRouter.post('/', checkAdmin, cityController.createCity);

cityRouter.patch('/:id', checkAdmin, cityController.modifyCity);

export default cityRouter;