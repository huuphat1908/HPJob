//router
import userRouter from './user.js';

//authMiddleware
import checkAuth from '../app/middlewares/auth.js';

const route = (app) => {
    app.use('/api/users', userRouter);
}

export default route;