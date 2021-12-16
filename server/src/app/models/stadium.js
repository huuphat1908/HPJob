import  mongoose from 'mongoose';

const Schema = mongoose.Schema;

const StadiumSchema = new Schema({
    name: { type: String, required: true },
    address: { type: String, required: true },
    numberOfFiveField: { type: Number, required: true, default: '1' },
    numberOfSevenField: { type: Number, required: true, default: '0' },
    prices: [{ type: Map, of: String }],
    revenue: { type: Number, default: '0' }
});

const StadiumModel =  mongoose.model('Stadium', StadiumSchema);

export default StadiumModel;