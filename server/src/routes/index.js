//router
import userRouter from './user.js';
import stadiumRouter from './stadium.js';
import transactionRouter from './transaction.js';

//authMiddleware
import checkAuth from '../app/middlewares/auth.js';

const route = (app) => {
    app.use('/api/users', userRouter);
    app.use('/api/stadiums', checkAuth, stadiumRouter);
    app.use('/api/transactions', checkAuth, transactionRouter);
}

export default route;