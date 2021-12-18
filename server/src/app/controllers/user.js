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

    getOneUser = async (req, res) => {
        try {
            const id = req.params.id;
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
            input.password = await bcrypt.hash(input.password, saltRounds);
            const newUser = new UserModel(input);
            await newUser.save();
            res.status(201).json(newUser);
        } catch (error) {
            res.status(400).send(error);
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
                    error: 'Wrong email or passwor'
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
            const id = req.params.id;
            const userInput = req.body;
            const userModified = await UserModel.findOneAndUpdate({ _id: id }, { ...userInput }, { new: true });
            res.status(200).json(userModified);
        } catch (error) {
            res.status(400).send(error);
        }
    }
}

const userController = new UserController();
export default userController;