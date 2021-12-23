import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';

import { UserModel } from '../models/index.js';

const saltRounds = 7;

class UserController {
    //GET
    getAllUser = async (req, res) => {
        try {
            const users = await UserModel.find({ role: 'user' });
            res.status(200).json(users);
        } catch (error) {
            res.status(400).send(error);
        }
    };

    getUserInfo = async (req, res) => {
        try {
            const id = res.locals.userId;
            const userFound = await UserModel.findById(id);
            res.status(200).json(userFound);
        } catch (error) {
            res.status(400).send(error);
        }
    }

    //POST
    createUser = async (req, res) => {
        const input = req.body;
        try {
            const duplicateUser = await UserModel.find({ email: input.email });
            if (duplicateUser.length != 0) {
                return res.status(409).json({
                    error: 'This email has already been registered'
                });
            }
        } catch (error) {
            return res.status(500).json({
                error: 'Something went wrong'
            })
        }
        try {
            input.password = await bcrypt.hash(input.password, saltRounds);
            const newUser = new UserModel(input);
            await newUser.save();
            return res.status(201).json(newUser);
        } catch (error) {
            return res.status(500).send(error);
        }
    }

    authenticateUser = async (req, res) => {
        const input = req.body;
        const user = await UserModel.findOne({ email: input.email });
        if (user) {
            const isValidPassword = await bcrypt.compare(input.password, user.password);
            if (isValidPassword) {
                const token = jwt.sign({
                    userId: user.id
                },
                    process.env.ACCESS_TOKEN_KEY
                );
                return res.status(200).json({ token });
            } else {
                return res.status(400).json({
                    error: 'Wrong email or password'
                })
            }
        } else {
            return res.status(400).json({
                error: 'Wrong email or password'
            });
        }
    }

    //PUT
    modifyUser = async (req, res) => {
        try {
            const id = res.locals.userId;
            const userInput = req.body;
            const listUser = await UserModel.find({});
            const currentUser = await UserModel.findById(id);
            for (let i = 0; i < listUser.length; i++) {
                if (listUser[i].email === req.body.email && currentUser.email != req.body.email) {
                    return res.status(409).json({
                        error: 'This email has already been registered'
                    })
                }
            }
            const userModified = await UserModel.findOneAndUpdate({ _id: id }, { ...userInput }, { new: true });
            res.status(200).json(userModified);
        } catch (error) {
            res.status(400).send(error);
        }
    }
}

const userController = new UserController();
export default userController;