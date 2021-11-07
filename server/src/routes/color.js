//import dependency
import express from 'express';
const colorRouter = express.Router();

//import controller
import colorController from '../app/controllers/color.js';

colorRouter.get('/', colorController.getAllColor);
colorRouter.get('/:id', colorController.getOneColor);

colorRouter.post('/', colorController.createColor);

colorRouter.delete('/', colorController.deleteAllColor);
colorRouter.delete('/:id', colorController.deleteOneColor);

colorRouter.patch('/:id', colorController.modifyColor);

export default colorRouter;