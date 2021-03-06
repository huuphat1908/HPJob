//dependency
import express from 'express';
import multer from 'multer';

import { userController } from '../app/controllers/index.js';
import { checkAuth, checkAdmin } from '../app/middlewares/auth.js';

const userRouter = express.Router();
const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, './src/public/img/')
    },
    filename: (req, file, cb) => {
        const uniqueSuffix = Date.now();
        cb(null, `${uniqueSuffix}-${file.originalname}`)
    }
});
const upload = multer({ storage: storage });  

userRouter.get('/', checkAuth, checkAdmin, userController.getAllUser);
userRouter.get('/me', checkAuth, userController.getUserInfo);

userRouter.post('/sign-up', userController.createUser);
userRouter.post('/sign-in', userController.authenticateUser);

userRouter.patch('/background', checkAuth, upload.single('background'), userController.setBackground);
userRouter.patch('/avatar', checkAuth, upload.single('avatar'), userController.setAvatar);
userRouter.patch('/reset-password', userController.resetPassword);
userRouter.patch('/change-password', checkAuth, userController.changePassword);
userRouter.patch('/interview/:candidateId/:jobId', userController.interview);
userRouter.patch('/recruit/:candidateId/:jobId', userController.recruit);
userRouter.patch('/', checkAuth, userController.modifyUser);

export default userRouter;