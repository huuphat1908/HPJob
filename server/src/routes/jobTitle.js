//dependency
import express from 'express';
const jobTitleRouter = express.Router();

//controller
import { jobTitleController } from '../app/controllers/index.js';

//authMiddleware
import { checkAuth } from '../app/middlewares/auth.js';

jobTitleRouter.get('/', checkAuth, jobTitleController.getAllJobTitle);

jobTitleRouter.post('/', jobTitleController.createJobTitle);

jobTitleRouter.patch('/:id', checkAuth, jobTitleController.modifyJobTitle);

export default jobTitleRouter;