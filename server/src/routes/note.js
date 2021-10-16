//import dependency
import express from 'express';
const noteRouter = express.Router();

//import controller
import noteController from '../app/controllers/note.js';

noteRouter.get('/', noteController.getAllNote);

export default noteRouter;