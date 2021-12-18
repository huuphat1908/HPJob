//dependency
import express from 'express';
const userRouter = express.Router();

//controller
import { userController } from '../app/controllers/index.js';

//authMiddleware
import { checkAuth } from '../app/middlewares/auth.js';

userRouter.get('/', checkAuth, userController.getAllUser);
userRouter.get('/me', checkAuth, userController.getUserInfo);

userRouter.post('/sign-up', userController.createUser);
userRouter.post('/sign-in', userController.authenticateUser);

userRouter.patch('/:id', checkAuth, userController.modifyUser);

export default userRouter;