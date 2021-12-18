import  mongoose from 'mongoose';

const Schema = mongoose.Schema;

const JobTitleSchema = new Schema({
    title: { type: String, required: true },
});

const JobTitleModel =  mongoose.model('JobTitle', JobTitleSchema);

export default JobTitleModel;