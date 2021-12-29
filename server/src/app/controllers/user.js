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
            res.status(500).json({
                error: 'Internal server error'
            });
        }
    };

    getUserInfo = async (req, res) => {
        try {
            const id = res.locals.userId;
            const userFound = await UserModel.findById(id);
            res.status(200).json(userFound);
        } catch (error) {
            res.status(500).json({
                error: 'Internal server error'
            });
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
                error: 'Internal server error'
            })
        }
        try {
            input.password = await bcrypt.hash(input.password, saltRounds);
            const newUser = new UserModel(input);
            await newUser.save();
            return res.status(201).json(newUser);
        } catch (error) {
            return res.status(500).json({
                error: 'Internal server error'
            });
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

    //PATCH
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
            res.status(500).json({
                error: 'Internal server error'
            });
        }
    }

    setBackground = async (req, res) => {
        try {
            const background = `/img/${req.file.filename}`;
            const userId = res.locals.userId;
            const currentUser = await UserModel.findById(userId).lean();
            await UserModel.findOneAndUpdate({ _id: userId }, { ...currentUser, background });
            return res.status(200).json({
                success: 'Set background successfully'
            })
        } catch(error) {
            return res.status(500).json({
                error: 'Internal server error'
            })
        }
    }

    setAvatar = async (req, res) => {
        console.log(req.file);
        try {
            const avatar = `/img/${req.file.filename}`;
            const userId = res.locals.userId;
            const currentUser = await UserModel.findById(userId).lean();
            await UserModel.findOneAndUpdate({ _id: userId }, { ...currentUser, avatar });
            return res.status(200).json({
                success: 'Set avatar successfully'
            })
        } catch(error) {
            return res.status(500).json({
                error: 'Internal server error'
            })
        }
    }
}

const userController = new UserController();
export default userController;