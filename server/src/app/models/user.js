import  mongoose from 'mongoose';

const Schema = mongoose.Schema;

const UserSchema = new Schema({
    role: { type: String, required: true, enum : ['user','admin'], default: 'user' },
    username: { type: String, minLength: 6, maxLength: 20, required: true },
    email: { type: String, required: true },
    password: { type: String, minLength: 6, maxLength: 20, required: true },
    label: [
        {
            name: { type: String, required: true }, 
            colorId: { type: mongoose.Types.ObjectId, required: true, ref: 'Color' },
        }
    ],
    feedback: [
        {
            feedbackId: { type: mongoose.Types.ObjectId, required: true, ref: 'Feedback' }
        }
    ],
    note: [
        {
            noteId : { type: mongoose.Types.ObjectId, required: true, ref: 'Note' }
        }
    ]
}, {
    timestamps: true,
});

const UserModel =  mongoose.model('User', UserSchema);

export default UserModel;