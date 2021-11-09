//dependency
import express from 'express';
const userRouter = express.Router();

//controller
import { userController } from '../app/controllers/index.js';

userRouter.get('/', userController.getAllUser);
userRouter.get('/:id', userController.getOneUser);

userRouter.post('/sign-up', userController.createUser);
userRouter.post('/sign-in', userController.authenticateUser);

userRouter.delete('/', userController.deleteAllUser);
userRouter.delete('/:id', userController.deleteOneUser);

userRouter.patch('/:id', userController.modifyUser);

export default userRouter;