import express from 'express';

import { cityController } from '../app/controllers/index.js';

const cityRouter = express.Router();

cityRouter.get('/', cityController.getAllCity);

cityRouter.post('/', cityController.createCity);

cityRouter.patch('/:id', cityController.modifyCity);

export default cityRouter;