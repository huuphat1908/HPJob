import jwt from 'jsonwebtoken';

import { UserModel } from '../models/index.js';

export const checkAuth = async (req, res, next) => {
    try {
        const authorizationHeader = req.headers['authorization'];
        const token = authorizationHeader.split(' ')[1];
        if (token) {
            const tokenDecoded = jwt.verify(token, process.env.ACCESS_TOKEN_KEY);
            const currentUser = await UserModel.findById(tokenDecoded.userId);
            res.locals.currentUser = currentUser;
            next();
        } else {
            return res.status(401).json({
                error: 'Unauthorized'
            })
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