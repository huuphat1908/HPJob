import express from 'express';

import { cityController } from '../app/controllers/index.js';
import { checkAdmin } from '../app/middlewares/auth.js';

const cityRouter = express.Router();

cityRouter.get('/', cityController.getAllCity);
cityRouter.get('/search', cityController.getCityBaseOnName);

cityRouter.post('/', checkAdmin, cityController.createCity);

cityRouter.put('/:id', checkAdmin, cityController.modifyCity);

cityRouter.delete('/:id', checkAdmin, cityController.deleteCity);

export default cityRouter;