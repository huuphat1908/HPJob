//dependency
import express from 'express';
const stadiumRouter = express.Router();

//controller
import { stadiumController } from '../app/controllers/index.js';

stadiumRouter.get('/', stadiumController.getAllStadium);
stadiumRouter.get('/:id', stadiumController.getOneStadium);

stadiumRouter.post('/', stadiumController.createStadium);

stadiumRouter.patch('/:id', stadiumController.modifyStadium);

export default stadiumRouter;