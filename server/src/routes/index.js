//router
import userRouter from './user.js';
import jobTitleRouter from './jobTitle.js';

//authMiddleware
import { checkAuth } from '../app/middlewares/auth.js';

const route = (app) => {
    app.use('/api/users', userRouter);
    app.use('/api/job-titles', checkAuth, jobTitleRouter);
}

export default route;