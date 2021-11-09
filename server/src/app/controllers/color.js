import { ColorModel }  from '../models/index.js';

import { colorValidationSchema } from '../validations/index.js';

class ColorController {
    //GET
    getAllColor = async (req, res) => {
        try {
            const colors = await ColorModel.find({});
            res.status(200).json(colors);
        } catch (error) {
            res.status(400).send(error);
        }
    };

    getOneColor = async (req, res) => {
        try {
            const id = req.params.id;
            const colorFound = await ColorModel.findById(id);
            res.status(200).json(colorFound); 
        } catch (error) {
            res.status(400).send(error);
        }
    }

    //POST
    createColor = async (req, res) => {
        const input = req.body;
        const inputValidated = colorValidationSchema.validate(input);
        if (inputValidated.error) {
            return res.status(400).send(inputValidated.error.details[0].message);
        }
        try {
            const newColor = new ColorModel(inputValidated.value);
            await newColor.save();
            res.status(201).json(newColor);
        } catch (error) {
            res.status(400).send(error);
        }
    }

    //DELETE
    deleteAllColor = async (req, res) => {
        try {
            const colorDeleted = await ColorModel.deleteMany({});
            res.status(200).json(colorDeleted);
        } catch (error) {
            res.status(400).send(error);
        }
    }

    deleteOneColor = async (req, res) => {
        try {
            const id = req.params.id;
            const colorDeleted = await ColorModel.deleteOne({ _id: id });
            res.status(200).json(colorDeleted);
        } catch (error) {
            res.status(400).send(error);
        }
    }

    //PUT
    modifyColor = async (req, res) => {
        try {
            const id = req.params.id;
            const colorInput = req.body;
            const colorModified = await ColorModel.findOneAndUpdate({ _id: id }, { ...colorInput }, { new: true });
            res.status(200).json(colorModified);
        } catch (error) {
            res.status(400).send(error);
        }
    }
}

const colorController = new ColorController();
export default colorController;