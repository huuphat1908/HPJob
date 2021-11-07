//import dependency
import express from 'express';
const noteRouter = express.Router();

//import controller
import noteController from '../app/controllers/note.js';

noteRouter.get('/', noteController.getAllNote);
noteRouter.get('/:id', noteController.getOneNote);

noteRouter.post('/', noteController.createNote);

noteRouter.delete('/', noteController.deleteAllNote);
noteRouter.delete('/:id', noteController.deleteOneNote);

noteRouter.patch('/:id', noteController.modifyNote);

export default noteRouter;