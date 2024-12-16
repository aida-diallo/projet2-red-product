// controllers/getHotelById.js
const HotelModel = require('../models/hotel');

module.exports = async (req, res) => {
    const { id } = req.params;

    try {
        const hotel = await HotelModel.findById(id);
        if (!hotel) {
            return res.status(404).json({ message: "Hôtel non trouvé" });
        }
        res.status(200).json(hotel);
    } catch (error) {
        console.error("Erreur lors de la récupération de l'hôtel :", error.message);
        res.status(500).json({ message: "Erreur serveur" });
    }
};
