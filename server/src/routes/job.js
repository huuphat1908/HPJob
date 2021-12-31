//dependency
import express from 'express';

import { jobController } from '../app/controllers/index.js';

const jobRouter = express.Router();

jobRouter.get('/', jobController.getAllJob);

jobRouter.post('/', jobController.createJob);

export default jobRouter;