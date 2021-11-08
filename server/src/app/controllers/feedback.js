import { FeedbackModel } from '../models/index.js';

import { feedbackValidationSchema } from '../validations/index.js';

class FeedbackController {
    //GET
    getAllFeedback = async (req, res) => {
        try {
            const feedbacks = await FeedbackModel.find({});
            res.status(200).json(feedbacks);
        } catch (error) {
            res.status(400).send(error);
        }
    };

    getOneFeedback = async (req, res) => {
        try {
            const id = req.params.id;
            const feedbackFound = await FeedbackModel.findById(id);
            res.status(200).json(feedbackFound); 
        } catch (error) {
            res.status(400).send(error);
        }
    }

    //POST
    createFeedback = async (req, res) => {
        const input = req.body;
        const inputValidated = feedbackValidationSchema.validate(input);
        if (inputValidated.error) {
            return res.status(400).send(inputValidated.error.details[0].message);
        }
        try {
            const newFeedback = new FeedbackModel(inputValidated.value);
            await newFeedback.save();
            res.status(201).json(newFeedback);
        } catch (error) {
            res.status(400).send(error);
        }
    }

    //DELETE
    deleteAllFeedback = async (req, res) => {
        try {
            const feedbackDeleted = await FeedbackModel.deleteMany({});
            res.status(200).json(feedbackDeleted);
        } catch (error) {
            res.status(400).send(error);
        }
    }

    deleteOneFeedback = async (req, res) => {
        try {
            const id = req.params.id;
            const feedbackDeleted = await FeedbackModel.deleteOne({ _id: id });
            res.status(200).json(feedbackDeleted);
        } catch (error) {
            res.status(400).send(error);
        }
    }

    //PUT
    modifyFeedback = async (req, res) => {
        try {
            const id = req.params.id;
            const feedbackInput = req.body;
            const feedbackModified = await FeedbackModel.findOneAndUpdate({ _id: id }, { ...feedbackInput }, { new: true });
            res.status(200).json(feedbackModified);
        } catch (error) {
            res.status(400).send(error);
        }
    }
}

const feedbackController = new FeedbackController();
export default feedbackController;