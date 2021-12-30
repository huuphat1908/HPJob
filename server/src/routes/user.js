//dependency
import express from 'express';
import multer from 'multer';

import { userController } from '../app/controllers/index.js';
import { checkAuth } from '../app/middlewares/auth.js';

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

userRouter.get('/', checkAuth, userController.getAllUser);
userRouter.get('/me', checkAuth, userController.getUserInfo);

userRouter.post('/sign-up', userController.createUser);
userRouter.post('/sign-in', userController.authenticateUser);

userRouter.patch('/background', checkAuth, upload.single('background'), userController.setBackground);
userRouter.patch('/avatar', checkAuth, upload.single('avatar'), userController.setAvatar);
userRouter.patch('/', checkAuth, userController.modifyUser);

export default userRouter;