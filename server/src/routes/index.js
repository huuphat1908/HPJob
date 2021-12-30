import userRouter from './user.js';
import jobTitleRouter from './jobTitle.js';
import jobRouter from './job.js';
import cityRouter from './city.js';

import { checkAuth } from '../app/middlewares/auth.js';

const route = (app) => {
    app.use('/api/users', userRouter);
    app.use('/api/jobs', checkAuth, jobRouter);
    app.use('/api/job-titles', checkAuth, jobTitleRouter);
    app.use('/api/cities', checkAuth, cityRouter);
}

export default route;