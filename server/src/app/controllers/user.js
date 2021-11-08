import { UserModel } from '../models/index.js';

import { userValidationSchema } from '../validations/index.js';

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
        try {
            const newUser = new UserModel(inputValidated.value);
            await newUser.save();
            res.status(201).json(newUser);
        } catch (error) {
            res.status(400).send(error);
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