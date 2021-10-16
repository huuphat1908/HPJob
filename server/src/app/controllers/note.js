import Note from '../models/note.js';

class NoteController {
    //GET
    getAllNote = async (req, res) => {
        const notes = await Note.find({});
        res.json(notes);
    };

    //POST
    createNote = async (req, res) => {
        const newNote = new Note({
            title: 'Arsenal'
        });
        await newNote.save();
        res.send('Created');
    }
}

const noteController = new NoteController();
export default noteController;