import Note from '../models/note.js';

class NoteController {
    //GET
    getAllNote = async (req, res) => {
        try {
            const notes = await Note.find({});
            res.status(200).json(notes);
        } catch (error) {
            res.status(400).send(error);
        }
    };

    //POST
    createNote = async (req, res) => {
        try {
            const input = req.body;
            const newNote = new Note(input);
            await newNote.save();
            res.status(201).json(newNote);
        } catch (error) {
            res.status(400).send(error);
        }
    }
}

const noteController = new NoteController();
export default noteController;