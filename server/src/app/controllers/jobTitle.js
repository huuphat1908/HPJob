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

    getJobTitleBaseOnTitle = async (req, res) => {
        const { title } = req.query;
        try {
            let jobTitleList = await JobTitleModel.find({});
            jobTitleList = jobTitleList.filter(jobTitle => jobTitle.title.toLowerCase().indexOf(title.toLowerCase()) !== -1);
            return res.status(200).json(jobTitleList);
        } catch (error) {
            return res.status(500).json({
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
            const jobTitleModified = await JobTitleModel.findOneAndUpdate({ _id: id }, { ...jobTitleInput }, { new: true });
            return res.status(200).json(jobTitleModified);
        } catch (error) {
            return res.status(500).json({
                error: 'Internal server error'
            });
        }
    }

    //DELETE
    deleteJobTitle = async (req, res) => {
        try {
            const id = req.params.id;
            const jobTitleDeleted = await JobTitleModel.deleteOne({ _id: id });
            return res.status(200).json(jobTitleDeleted);
        } catch (error) {
            return res.status(500).json({
                error: 'Internal server error'
            });
        }
    }
}

const jobTitleController = new JobTitleController();
export default jobTitleController;