import { JobTitleModel } from '../models/index.js';

class JobTitleController {
    //GET
    getAllJobTitle = async (req, res) => {
        try {
            const jobTitles = await JobTitleModel.find({});
            res.status(200).json(jobTitles);
        } catch (error) {
            res.status(500).json({
                error: 'Internal server error'
            });
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
            res.status(500).json({
                error: 'Internal server error'
            });
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
            res.status(500).json({
                error: 'Internal server error'
            });
        }
    }
}

const jobTitleController = new JobTitleController();
export default jobTitleController;