import jwt from 'jsonwebtoken';

export const checkAuth = (req, res, next) => {
    try {
        const authorizationHeader = req.headers['authorization'];
        const token = authorizationHeader.split(' ')[1];
        if (token) {
            const tokenDecoded = jwt.verify(token, process.env.ACCESS_TOKEN_KEY);
            console.log(tokenDecoded);
            res.locals.token = tokenDecoded;
            next();
        }
    } catch(err) {
        return res.status(401).json({
            error: 'Unauthorized'
        });
    }
    
}

export const checkAdmin = (req, res, next) => {
    if (res.locals.token.role == 'admin') {
        next();
    }
    return res.json(403).json({
        error: 'Dont have permission to access api'
    });
}