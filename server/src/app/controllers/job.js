import { JobModel, UserModel } from '../models/index.js';

class JobController {
    //GET
    getAllJob = async (req, res) => {
        try {
            const jobs = await JobModel.find({}).populate('recruiter').populate('candidate');
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
            const currentUser = res.locals.currentUser;
            const newJob = new JobModel({ ...input, recruiter: currentUser._id });
            currentUser.jobPosted.push(newJob._id);
            await UserModel.findOneAndUpdate({ _id: currentUser._id }, { ...currentUser });
            await newJob.save();
            return res.status(201).json(newJob);
        } catch (error) {
            return res.status(500).json({
                error: 'Internal server error'
            });
        }
    };

    //PATCH
    applyToJob = async (req, res) => {
        const { jobId, candidateId } = req.params;
        try {
            const candidate = await UserModel.findById(candidateId);
            const job = await JobModel.findById(jobId);
            job.candidate.push(candidateId);
            candidate.jobApplied.push(jobId);
            await UserModel.findOneAndUpdate({ _id: candidate._id }, { ...candidate });
            await JobModel.findOneAndUpdate({ _id: job._id }, { ...job });
            return res.status(200).json({
                success: 'Apply successfully'
            });
        } catch (error) {
            return res.status(500).json({
                error: 'Internal server error'
            });
        }
    };
}

const jobController = new JobController();
export default jobController;