import  mongoose from 'mongoose';

const Schema = mongoose.Schema;

const TransactionSchema = new Schema({
    clientId: { type: mongoose.Types.ObjectId, ref: 'User' },
    price: { type: Number, required: true },
    time: { type: Date, default: Date.now },
});

const TransactionModel =  mongoose.model('Transaction', TransactionSchema);

export default TransactionModel;