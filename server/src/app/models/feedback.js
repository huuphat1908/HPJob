import  mongoose from 'mongoose';

const Schema = mongoose.Schema;

const FeedbackSchema = new Schema({
    id: mongoose.ObjectId,
    content: [
        {
            sender: mongoose.Types.ObjectId,
            contentSender: String
        }
    ]
}, {
    timestamps: true,
});

const FeedbackModel =  mongoose.model('Feedback', FeedbackSchema);

export default FeedbackModel;