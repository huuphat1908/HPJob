import  mongoose from 'mongoose';

const Schema = mongoose.Schema;

const NoteSchema = new Schema({
    id: mongoose.ObjectId,
    title: { type: String, maxLength: 255, required: true },
    
}, {
    timestamps: true,
});

const Note =  mongoose.model('Note', NoteSchema);

export default Note;