import { TransactionModel } from '../models/index.js';


class TransactionController {
    //GET
    getAllTransaction = async (req, res) => {
        try {
            const transactions = await TransactionModel.find({});
            res.status(200).json(transactions);
        } catch (error) {
            res.status(400).send(error);
        }
    };

    getOneTransaction = async (req, res) => {
        try {
            const id = req.params.id;
            const transaction = await TransactionModel.findById(id);
            res.status(200).json(transaction);
        } catch (error) {
            res.status(400).send(error);
        }
    }

    //POST
    createTransaction = async (req, res) => {
        const transaction = req.body;
        try {
            const newTransaction = new TransactionModel(transaction);
            await newTransaction.save();
            res.status(201).json(newTransaction);
        } catch (error) {
            res.status(400).send(error);
        }
    }

    //PUT
    modifyTransaction = async (req, res) => {
        try {
            const id = req.params.id;
            const transaction = req.body;
            const transactionModified = await TransactionModel.findOneAndUpdate({ _id: id }, { ...transaction }, { new: true });
            res.status(200).json(transactionModified);
        } catch (error) {
            res.status(400).send(error);
        }
    }
}

const transactionController = new TransactionController();
export default transactionController;