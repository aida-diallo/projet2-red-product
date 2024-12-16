// controllers/updateHotel.js
const HotelModel = require('../models/hotel');

module.exports = async (req, res) => {
    const { id } = req.params;
    const updateData = req.body;

    try {
        const hotel = await HotelModel.findByIdAndUpdate(id, updateData, { new: true });
        if (!hotel) {
            return res.status(404).json({ message: "Hôtel non trouvé" });
        }
        res.status(200).json({
            message: "Hôtel mis à jour avec succès",
            hotel
        });
    } catch (error) {
        console.error("Erreur lors de la mise à jour de l'hôtel :", error.message);
        res.status(500).json({ message: "Erreur serveur" });
    }
};
