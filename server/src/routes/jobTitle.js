import express from 'express';

import { jobTitleController } from '../app/controllers/index.js';
import { checkAuth } from '../app/middlewares/auth.js';

const jobTitleRouter = express.Router();

jobTitleRouter.get('/', checkAuth, jobTitleController.getAllJobTitle);

jobTitleRouter.post('/', jobTitleController.createJobTitle);

jobTitleRouter.patch('/:id', checkAuth, jobTitleController.modifyJobTitle);

export default jobTitleRouter;