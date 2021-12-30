import { JobModel } from '../models/index.js';

class JobController {
    //GET
    getAllJob = async (req, res) => {
        try {
            const jobs = await JobModel.find({});
            return res.status(200).json(jobs);
        } catch (error) {
            return res.status(500).json({
                error: 'Internal server error'
            });
        }
    };

    //POST
    createJob = async (req, res) => {
        try {
            const input = req.body;
            const newJob = new JobModel(input);
            await newJob.save();
            return res.status(201).json(newJob);
        } catch (error) {
            return res.status(500).json({
                error: 'Internal server error'
            });
        }
    }

    //PATCH
    /* modifyUser = async (req, res) => {
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
            const userId = res.locals.currentUser._id;
            const currentUser = res.locals.currentUser;
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
            const userId = res.locals.currentUser._id;
            const currentUser = res.locals.currentUser;
            await UserModel.findOneAndUpdate({ _id: userId }, { ...currentUser, avatar });
            return res.status(200).json({
                success: 'Set avatar successfully'
            })
        } catch(error) {
            return res.status(500).json({
                error: 'Internal server error'
            })
        }
    } */
}

const jobController = new JobController();
export default jobController;