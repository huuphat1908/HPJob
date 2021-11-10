import  mongoose from 'mongoose';

const Schema = mongoose.Schema;

const FeedbackSchema = new Schema({
    contents: [
        {
            senderId: { type: mongoose.Types.ObjectId, ref: 'User' } ,
            contentSender: String
        }
    ]
}, {
    timestamps: true,
});

const FeedbackModel =  mongoose.model('Feedback', FeedbackSchema);

export default FeedbackModel;