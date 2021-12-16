//dependency
import express from 'express';
const transactionRouter = express.Router();

//controller
import { transactionController } from '../app/controllers/index.js';

transactionRouter.get('/', transactionController.getAllTransaction);
transactionRouter.get('/:id', transactionController.getOneTransaction);

transactionRouter.post('/', transactionController.createTransaction);

transactionRouter.patch('/:id', transactionController.modifyTransaction);

export default transactionRouter;