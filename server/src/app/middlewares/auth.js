import jwt from 'jsonwebtoken';

const checkAuth = (req, res, next) => {
    try {
        const authorizationHeader = req.headers['authorization'];
        const token = authorizationHeader.split(' ')[1];
        if (token) {
            const tokenDecoded = jwt.verify(token, process.env.ACCESS_TOKEN_KEY);
            res.locals.token = tokenDecoded;
            console.log(res.locals.token);
            next();
        }
    } catch(err) {
        return res.status(401).json({
            error: 'Unauthorized'
        });
    }
    
}

export default checkAuth;