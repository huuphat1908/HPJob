import  mongoose from 'mongoose';

const Schema = mongoose.Schema;

const UserSchema = new Schema({
    role: { type: String, required: true, enum : ['user','admin'], default: 'user' },
    username: { type: String, minLength: 6, maxLength: 20, required: true },
    email: { type: String, required: true },
    password: { type: String, required: true },
    labels: [
        {
            name: { type: String, required: true }, 
            colorId: { type: mongoose.Types.ObjectId, required: true, ref: 'Color' },
        }
    ],
    feedbacks: [
        {
            feedbackId: { type: mongoose.Types.ObjectId, required: true, ref: 'Feedback' }
        }
    ],
    notes: [
        {
            noteId : { type: mongoose.Types.ObjectId, required: true, ref: 'Note' }
        }
    ]
}, {
    timestamps: true,
});

const UserModel =  mongoose.model('User', UserSchema);

export default UserModel;