import express from 'express';
import { jobTitleController } from '../app/controllers/index.js';

const jobTitleRouter = express.Router();

import { checkAuth } from '../app/middlewares/auth.js';

jobTitleRouter.get('/', checkAuth, jobTitleController.getAllJobTitle);

jobTitleRouter.post('/', jobTitleController.createJobTitle);

jobTitleRouter.patch('/:id', checkAuth, jobTitleController.modifyJobTitle);

export default jobTitleRouter;