//dependency
import express from 'express';

const jobRouter = express.Router();

import { jobController } from '../app/controllers/index.js';

jobRouter.get('/', jobController.getAllJob);

jobRouter.post('/', jobController.createJob);

export default jobRouter;