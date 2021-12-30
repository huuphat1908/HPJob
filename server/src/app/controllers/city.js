import { CityModel } from '../models/index.js';

class CityController {
    //GET
    getAllCity = async (req, res) => {
        try {
            const cities = await CityModel.find({});
            res.status(200).json(cities);
        } catch (error) {
            res.status(500).json({
                error: 'Internal server error'
            });
        }
    };

    //POST
    createCity = async (req, res) => {
        try {
            const input = req.body;
            const newCity = new CityModel(input);
            await newCity.save();
            res.status(201).json(newCity);
        } catch (error) {
            res.status(500).json({
                error: 'Internal server error'
            });
        }
    }

    //PUT
    modifyCity = async (req, res) => {
        try {
            const id = req.params.id;
            const cityInput = req.body;
            const cityModified = await CityModel.findOneAndUpdate({ _id: id }, { ...cityInput }, { new: true });
            return res.status(200).json(cityModified);
        } catch (error) {
            return res.status(500).json({
                error: 'Internal server error'
            });
        }
    }
}

const cityController = new CityController();
export default cityController;