// controllers/getAllHotels.js
const HotelModel = require('../models/hotel');

module.exports = async (req, res) => {
    try {
        const hotels = await HotelModel.find();
        res.status(200).json(hotels);
    } catch (error) {
        console.error("Erreur lors de la récupération des hôtels :", error.message);
        res.status(500).json({ message: "Erreur serveur" });
    }
};
