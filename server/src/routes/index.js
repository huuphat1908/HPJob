//router
import noteRouter from './note.js';
import colorRouter from './color.js';
import userRouter from './user.js';
import feedbackRouter from './feedback.js';

//authMiddleware
import checkAuth from '../app/middlewares/auth.js';

const route = (app) => {
    app.use('/api/notes', checkAuth, noteRouter);
    app.use('/api/colors', checkAuth, colorRouter);
    app.use('/api/feedbacks', checkAuth, feedbackRouter);
    app.use('/api/users', userRouter);
}

export default route;