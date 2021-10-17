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

    getOneNote = async (req, res) => {
        try {
            const id = req.params.id;
            const noteFound = await Note.findById(id);
            res.status(200).json(noteFound); 
        } catch (error) {
            res.status(400).send(error);
        }
    }

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

    //DELETE
    deleteAllNote = async (req, res) => {
        try {
            const noteDeleted = await Note.deleteMany({});
            res.status(200).json(noteDeleted);
        } catch (error) {
            res.status(400).send(error);
        }
    }

    deleteOneNote = async (req, res) => {
        try {
            const id = req.params.id;
            const noteDeleted = await Note.deleteOne({ _id: id });
            res.status(200).json(noteDeleted);
        } catch (error) {
            res.status(400).send(error);
        }
    }

}

const noteController = new NoteController();
export default noteController;