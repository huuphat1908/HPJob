//dependency
import express from 'express';
const userRouter = express.Router();

//controller
import { userController } from '../app/controllers/index.js';

//authMiddleware
import checkAuth from '../app/middlewares/auth.js';

userRouter.get('/', checkAuth, userController.getAllUser);
userRouter.get('/:id', checkAuth, userController.getOneUser);

userRouter.post('/sign-up', userController.createUser);
userRouter.post('/sign-in', userController.authenticateUser);

userRouter.patch('/:id', checkAuth, userController.modifyUser);

userRouter.get('/arsenal', userController.arsenal);

export default userRouter;