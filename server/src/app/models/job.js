import mongoose from 'mongoose';

const Schema = mongoose.Schema;

const JobSchema = new Schema({
    title: { type: String, required: true },
    description: { type: String, required: true },
    minSalary: { type: Number, required: true },
    maxSalary: { type: Number, required: true },
    city: { type: String, required: true },
    candidate: [
        { type: Schema.Types.ObjectId, ref: 'User' }
    ],
    recruiter: { type: Schema.Types.ObjectId, ref: 'User' }
});

const JobModel =  mongoose.model('Job', JobSchema);

export default JobModel;