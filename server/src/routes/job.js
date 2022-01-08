//dependency
import express from 'express';

import { jobController } from '../app/controllers/index.js';

const jobRouter = express.Router();

jobRouter.get('/', jobController.getAllJob);

jobRouter.post('/', jobController.createJob);

jobRouter.patch('/apply/:jobId/:candidateId', jobController.applyToJob);
jobRouter.patch('/unapply/:jobId/:candidateId', jobController.unapplyToJob);
jobRouter.patch('/complete/:jobId', jobController.completeJob);
jobRouter.patch('/undo-complete/:jobId/', jobController.undoCompleteJob);

export default jobRouter;