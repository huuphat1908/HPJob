import express from 'express';

import { jobTitleController } from '../app/controllers/index.js';
import { checkAdmin } from '../app/middlewares/auth.js';

const jobTitleRouter = express.Router();

jobTitleRouter.get('/', jobTitleController.getAllJobTitle);

jobTitleRouter.post('/', checkAdmin, jobTitleController.createJobTitle);

jobTitleRouter.patch('/:id', checkAdmin, jobTitleController.modifyJobTitle);

jobTitleRouter.delete('/:id', checkAdmin, jobTitleController.deleteJobTitle);

export default jobTitleRouter;