import mongoose from 'mongoose';

const Schema = mongoose.Schema;

const UserSchema = new Schema({
    role: { type: String, required: true, enum : ['user','admin'], default: 'user' },
    username: { type: String, minLength: 5, maxLength: 20, required: true },
    email: { type: String, required: true },
    password: { type: String, required: true, minLength: 6 },
    phoneNumber: { type: String, length: 10 },
    jobTitle: { type: String, default: '' },
    coverLetter: { type: String, default: '' },
    portfolio: { type: String, default: '' },
    avatar: { type: String, default: '' },
    background: { type: String, default: '' },
    jobApplied: [{
        info: { type: Schema.Types.ObjectId, ref: 'Job' },
        interviewed: { type: Boolean, default: false },
        accepted: { type: Boolean, default: false }
    }],
    jobPosted: [
        { type: Schema.Types.ObjectId, ref: 'Job' }
    ]
});

const UserModel =  mongoose.model('User', UserSchema);

export default UserModel;