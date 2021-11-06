import  mongoose from 'mongoose';

const Schema = mongoose.Schema;

const NoteSchema = new Schema({
    id: mongoose.ObjectId,
    title: { type: String, maxLength: 255, required: true },
    content: { type: String, maxLength: 255, default: '' },
    label: { type: String, maxLength: 255, required: true },
    alarm: { type: String, maxLength: 255, default: '' },
    isInTrash: { type: Boolean, default: false},
    isInArchive: { type: Boolean, default: false},
    isLocked: { type: Boolean, default: false},
    password: { type: String, maxLength: 255, default: '' },
    color: { type: String, default: '' }
}, {
    timestamps: true,
});

const NoteModel =  mongoose.model('Note', NoteSchema);

export default NoteModel;