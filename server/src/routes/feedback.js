//import dependency
import express from 'express';
const feedbackRouter = express.Router();

//import controller
import { feedbackController } from '../app/controllers/index.js';

feedbackRouter.get('/', feedbackController.getAllFeedback);
feedbackRouter.get('/:id', feedbackController.getOneFeedback);

feedbackRouter.post('/', feedbackController.createFeedback);

feedbackRouter.delete('/', feedbackController.deleteAllFeedback);
feedbackRouter.delete('/:id', feedbackController.deleteOneFeedback);

feedbackRouter.patch('/:id', feedbackController.modifyFeedback);

export default feedbackRouter;