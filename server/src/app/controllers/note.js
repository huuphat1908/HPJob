import { NoteModel } from '../models/index.js';

import { noteValidationSchema } from '../validations/index.js';

class NoteController {
    //GET
    getAllNote = async (req, res) => {
        try {
            const notes = await NoteModel.find({});
            res.status(200).json(notes);
        } catch (error) {
            res.status(400).send(error);
        }
    };

    getOneNote = async (req, res) => {
        try {
            const id = req.params.id;
            const noteFound = await NoteModel.findById(id);
            res.status(200).json(noteFound); 
        } catch (error) {
            res.status(400).send(error);
        }
    }

    //POST
    createNote = async (req, res) => {
        const input = req.body;
        const inputValidated = noteValidationSchema.validate(input);
        if (inputValidated.error) {
            return res.status(400).send(inputValidated.error.details[0].message);
        }
        try {
            const newNote = new NoteModel(inputValidated.value);
            await newNote.save();
            res.status(201).json(newNote);
        } catch (error) {
            res.status(400).send(error);
        }
    }

    //DELETE
    deleteAllNote = async (req, res) => {
        try {
            const noteDeleted = await NoteModel.deleteMany({});
            res.status(200).json(noteDeleted);
        } catch (error) {
            res.status(400).send(error);
        }
    }

    deleteOneNote = async (req, res) => {
        try {
            const id = req.params.id;
            const noteDeleted = await NoteModel.deleteOne({ _id: id });
            res.status(200).json(noteDeleted);
        } catch (error) {
            res.status(400).send(error);
        }
    }

    //PUT
    modifyNote = async (req, res) => {
        try {
            const id = req.params.id;
            const noteInput = req.body;
            const noteModified = await NoteModel.findOneAndUpdate({ _id: id }, { ...noteInput }, { new: true });
            res.status(200).json(noteModified);
        } catch (error) {
            res.status(400).send(error);
        }
    }
}

const noteController = new NoteController();
export default noteController;