//router
import noteRouter from './note.js';
import colorRouter from './color.js';
import userRouter from './user.js';
import feedbackRouter from './feedback.js';

const route = (app) => {
    app.use('/api/notes', noteRouter);
    app.use('/api/colors', colorRouter);
    app.use('/api/users', userRouter);
    app.use('/feedback', feedbackRouter);
}

export default route;