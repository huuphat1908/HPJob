import { JobModel, UserModel } from '../models/index.js';

class JobController {
    //GET
    getAllJob = async (req, res) => {
        const { title, type, city } = req.query;
        const filter = {
            ...(title && { title }),
            ...(type && { type }),
            ...(city && { city })
        };
        const currentUser = res.locals.currentUser;
        try {
            const jobs = await JobModel
                .find({ recruiter: { $ne: currentUser._id }, isCompleted: false, ...filter })
                .populate('recruiter')
                .populate('candidate');
            return res.status(200).json(jobs);
        } catch (error) {
            return res.status(500).json({
                error: 'Internal server error'
            });
        }
    };

    /* searchJob = async (req, res) => {
        const { title, type, city } = req.query;
        try {
            let jobList = await JobModel.find({ title, type, city });
            return res.status(200).json(jobList);
        } catch (error) {
            return res.status(500).json({
                error: 'Internal server error'
            });
        }
    }; */

    getOneJob = async (req, res) => {
        try {
            const { jobId } = req.params;
            const job = await JobModel.findOne({ _id: jobId }).populate('recruiter').populate('candidate.info');
            return res.status(200).json(job);
        } catch (error) {
            return res.status(500).json({
                error: 'Internal server error'
            })
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
            const indexOfCandidateInJob = job.candidate.findIndex(candidate => candidate.info == candidateId);
            if (indexOfCandidateInJob > -1) {
                return res.status(400).json({
                    error: `Can't apply because you have applied this job before`
                });
            }
            job.candidate.push({ info: candidateId });
            candidate.jobApplied.push({ info: jobId });
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

    unapplyToJob = async (req, res) => {
        const { jobId, candidateId } = req.params;
        try {
            const candidate = await UserModel.findById(candidateId);
            const job = await JobModel.findById(jobId);
            const indexOfCandidateInJob = job.candidate.findIndex(candidate => candidate.info == candidateId);
            const indexOfJobInCandidate = candidate.jobApplied.findIndex(job => job.info == jobId);
            if (indexOfCandidateInJob == -1 || indexOfJobInCandidate == -1) {
                return res.status(400).json({
                    error: `Can't unapply`
                })
            }
            if (indexOfCandidateInJob > -1) {
                job.candidate.splice(indexOfCandidateInJob, 1);
            }
            if (indexOfJobInCandidate > -1) {
                candidate.jobApplied.splice(indexOfJobInCandidate, 1);
            }
            await UserModel.findOneAndUpdate({ _id: candidate._id }, { ...candidate });
            await JobModel.findOneAndUpdate({ _id: job._id }, { ...job });
            return res.status(200).json({
                success: 'Unapply successfully'
            });
        } catch (error) {
            return res.status(500).json({
                error: 'Internal server error'
            });
        }
    };

    completeJob = async (req, res) => {
        const { jobId } = req.params;
        try {
            const job = await JobModel.findById(jobId);
            job.isCompleted = true;
            await JobModel.findOneAndUpdate({ _id: job._id }, { ...job });
            return res.status(200).json({
                success: 'Completed job'
            });
        } catch (error) {
            return res.status(500).json({
                error: 'Internal server error'
            });
        }
    }

    undoCompleteJob = async (req, res) => {
        const { jobId } = req.params;
        try {
            const job = await JobModel.findById(jobId);
            job.isCompleted = false;
            await JobModel.findOneAndUpdate({ _id: job._id }, { ...job });
            return res.status(200).json({
                success: 'Undo completed job'
            });
        } catch (error) {
            return res.status(500).json({
                error: 'Internal server error'
            });
        }
    }
}

const jobController = new JobController();
export default jobController;