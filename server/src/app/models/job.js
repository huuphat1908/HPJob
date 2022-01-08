import mongoose from 'mongoose';

const Schema = mongoose.Schema;

const JobSchema = new Schema({
    title: { type: String, required: true },
    description: { type: String, required: true },
    type: { type: String, required: true, enum : ['Part-time','Full-time'] },
    minSalary: { type: Number, required: true },
    maxSalary: { type: Number, required: true },
    city: { type: String, required: true },
    candidate: [{
        info: { type: Schema.Types.ObjectId, ref: 'User' },
        interviewed: { type: Boolean, default: false },
        accepted: { type: Boolean, default: false }
    }],
    recruiter: { type: Schema.Types.ObjectId, ref: 'User' },
    isCompleted: { type: Boolean, default: false },
});

const JobModel =  mongoose.model('Job', JobSchema);

export default JobModel;