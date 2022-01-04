import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import nodemailer from 'nodemailer';
import randomstring from 'randomstring';

import { UserModel } from '../models/index.js';

const saltRounds = 7;

class UserController {
    //GET
    getAllUser = async (req, res) => {
        try {
            const users = await UserModel.find({ role: 'user' });
            return res.status(200).json(users);
        } catch (error) {
            return res.status(500).json({
                error: 'Internal server error'
            });
        }
    };

    getUserInfo = async (req, res) => {
        try {
            return res.status(200).json(res.locals.currentUser);
        } catch (error) {
            return res.status(500).json({
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
        try {
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
        } catch (error) {
            return res.status(500).json({
                error: 'Internal server error'
            })
        }
    }

    //PATCH
    modifyUser = async (req, res) => {
        try {
            const userId = res.locals.currentUser._id;
            const userInput = req.body;
            const listUser = await UserModel.find({});
            const currentUser = res.locals.currentUser;
            for (let i = 0; i < listUser.length; i++) {
                if (listUser[i].email === req.body.email && currentUser.email != req.body.email) {
                    return res.status(409).json({
                        error: 'This email has already been registered'
                    })
                }
            }
            const userModified = await UserModel.findOneAndUpdate({ _id: userId }, { ...userInput }, { new: true });
            return res.status(200).json(userModified);
        } catch (error) {
            return res.status(500).json({
                error: 'Internal server error'
            });
        }
    }

    setBackground = async (req, res) => {
        try {
            const background = `/img/${req.file.filename}`;
            const userId = res.locals.currentUser._id;
            const currentUser = res.locals.currentUser;
            await UserModel.findOneAndUpdate({ _id: userId }, { ...currentUser, background });
            return res.status(200).json({
                success: 'Set background successfully'
            })
        } catch (error) {
            return res.status(500).json({
                error: 'Internal server error'
            })
        }
    }

    setAvatar = async (req, res) => {
        try {
            const avatar = `/img/${req.file.filename}`;
            const userId = res.locals.currentUser._id;
            const currentUser = res.locals.currentUser;
            await UserModel.findOneAndUpdate({ _id: userId }, { ...currentUser, avatar });
            return res.status(200).json({
                success: 'Set avatar successfully'
            })
        } catch (error) {
            return res.status(500).json({
                error: 'Internal server error'
            })
        }
    }

    resetPassword = async (req, res) => {
        const receiverEmail = req.body.email;
        const senderEmail = 'huuphatauto1908@gmail.com';
        const newPassword = randomstring.generate(7);
        const transporter = nodemailer.createTransport({
            service: 'gmail',
            auth: {
                user: senderEmail,
                pass: process.env.GMAIL_PASSWORD,
            },
        });

        const mailOptions = {
            from: senderEmail,
            to: receiverEmail,
            subject: 'HPJob - Reset password',
            text: `Your new password is ${newPassword}`
        };

        try {
            await transporter.sendMail(mailOptions);
            const newHashedPassword = await bcrypt.hash(newPassword, saltRounds);
            const receiverUser = await UserModel.findOne({ email: receiverEmail }).lean();
            if (!receiverUser) {
                return res.status(400).json({
                    error: 'This email has been not registered'
                })
            }
            await UserModel.findOneAndUpdate({ _id: receiverUser._id }, { ...receiverUser, password: newHashedPassword });
            return res.status(200).json({
                success: 'Reset password successfully'
            })
        } catch (error) {
            return res.status(500).json({
                error: 'Internal server error'
            })
        }
    }

    changePassword = async (req, res) => {
        const input = req.body;
        const currentUser = res.locals.currentUser;
        try {
            const isValidPassword = await bcrypt.compare(input.oldPassword, currentUser.password);
            if (isValidPassword) {
                const newHashedPassword = await bcrypt.hash(input.newPassword, saltRounds);
                await UserModel.findOneAndUpdate({ _id: currentUser._id }, { ...currentUser, password: newHashedPassword });
                return res.status(200).json({
                    success: 'Change password successfully'
                })
            } else {
                return res.status(400).json({
                    error: 'Wrong password'
                })
            }
        } catch (error) {
            return res.status(500).json({
                error: 'Internal server error'
            })
        }
    }
}

const userController = new UserController();
export default userController;