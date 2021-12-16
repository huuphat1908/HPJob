import  mongoose from 'mongoose';

const Schema = mongoose.Schema;

const UserSchema = new Schema({
    role: { type: String, required: true, enum : ['user','admin'], default: 'user' },
    username: { type: String, minLength: 6, maxLength: 20, required: true },
    email: { type: String, required: true },
    password: { type: String, required: true },
    phoneNumber: { type: String, length: 10, default: '' },
    address: { type: String, default: '' },
    budget: { type: Number, default: 0 },
    moneyUsed: { type: Number, default: 0 },
    transaction: [{ type: mongoose.Types.ObjectId, ref: 'Transaction'}],
});

const UserModel =  mongoose.model('User', UserSchema);

export default UserModel;