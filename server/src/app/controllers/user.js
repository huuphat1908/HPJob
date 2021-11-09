import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';

import { UserModel } from '../models/index.js';

import { userValidationSchema } from '../validations/index.js';

const saltRounds = 7;

class UserController {
    //GET
    getAllUser = async (req, res) => {
        try {
            const users = await UserModel.find({});
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
        const inputValidated = userValidationSchema.validate(input);
        if (inputValidated.error) {
            return res.status(400).send(inputValidated.error.details[0].message);
        }
        inputValidated.value.password = await bcrypt.hash(inputValidated.value.password, saltRounds);
        try {
            const newUser = new UserModel(inputValidated.value);
            await newUser.save();
            res.status(201).json(newUser);
        } catch (error) {
            res.status(400).send(error);
        }
    }

    authenticateUser = async (req, res) => {
        const input = req.body;
        const inputValidated = userValidationSchema.validate(input);
        if (inputValidated.error) {
            return res.status(400).send(inputValidated.error.details[0].message);
        }
        const user = await UserModel.findOne({ email: inputValidated.value.email });
        const isValidPassword = await bcrypt.compare(inputValidated.value.password, user.password);
        if (isValidPassword) {
            const token = jwt.sign({
                username: user.username,
                role: user.role
            },
            process.env.PRIVATE_KEY_JWT, {
                expiresIn: '14d'
            });
            res.status(200).json(token);
        } else {
            res.status(400).json('Wrong email or password');
        }
    }

    //DELETE
    deleteAllUser = async (req, res) => {
        try {
            const userDeleted = await UserModel.deleteMany({});
            res.status(200).json(userDeleted);
        } catch (error) {
            res.status(400).send(error);
        }
    }

    deleteOneUser = async (req, res) => {
        try {
            const id = req.params.id;
            const userDeleted = await UserModel.deleteOne({ _id: id });
            res.status(200).json(userDeleted);
        } catch (error) {
            res.status(400).send(error);
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