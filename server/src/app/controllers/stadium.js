import { StadiumModel } from '../models/index.js';


class StadiumController {
    //GET
    getAllStadium = async (req, res) => {
        try {
            const stadiums = await StadiumModel.find({});
            res.status(200).json(stadiums);
        } catch (error) {
            res.status(400).send(error);
        }
    };

    getOneStadium = async (req, res) => {
        try {
            const id = req.params.id;
            const stadium = await StadiumModel.findById(id);
            res.status(200).json(stadium);
        } catch (error) {
            res.status(400).send(error);
        }
    }

    //POST
    createStadium = async (req, res) => {
        const stadium = req.body;
        try {
            const newStadium = new UserModel(stadium);
            await newStadium.save();
            res.status(201).json(newStadium);
        } catch (error) {
            res.status(400).send(error);
        }
    }

    //PUT
    modifyStadium = async (req, res) => {
        try {
            const id = req.params.id;
            const stadium = req.body;
            const stadiumModified = await StadiumModel.findOneAndUpdate({ _id: id }, { ...stadium }, { new: true });
            res.status(200).json(stadiumModified);
        } catch (error) {
            res.status(400).send(error);
        }
    }
}

const stadiumController = new StadiumController();
export default stadiumController;