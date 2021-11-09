import  mongoose from 'mongoose';

const Schema = mongoose.Schema;

const ColorSchema = new Schema({
    name: { type: String, maxLength: 255, required: true },
    hexCode: { type: String, length: 7, required: true }
});

const ColorModel =  mongoose.model('Color', ColorSchema);

export default ColorModel;