import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';

import { JobTitleModel } from '../models/index.js';

const saltRounds = 7;

class JobTitleController {
    //GET
    getAllJobTitle = async (req, res) => {
        try {
            const jobTitles = await JobTitleModel.find({});
            res.status(200).json(jobTitles);
        } catch (error) {
            res.status(400).send(error);
        }
    };

    //POST
    createJobTitle = async (req, res) => {
        const input = req.body;
        try {
            const newJobTitle = new JobTitleModel(input);
            await newJobTitle.save();
            res.status(201).json(newJobTitle);
        } catch (error) {
            res.status(400).send(error);
        }
    }

    //PUT
    modifyJobTitle = async (req, res) => {
        try {
            const id = req.params.id;
            const jobTitleInput = req.body;
            const jobModified = await JobTitleModel.findOneAndUpdate({ _id: id }, { ...jobTitleInput }, { new: true });
            res.status(200).json(jobModified);
        } catch (error) {
            res.status(400).send(error);
        }
    }
}

const jobTitleController = new JobTitleController();
export default jobTitleController;