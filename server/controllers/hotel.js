// controllers/hotelController.js
const HotelModel = require('../models/hotel');

exports.addHotel = async (req, res) => {
    const { name, email, tel, pricePerNight, currency, imageUrl, address, userId } = req.body;

    try {
        if (!name || !email || !tel || !pricePerNight || !address) {
            return res.status(400).json({
                message: "Champs obligatoires manquants",
                missingFields: {
                    name: !name,
                    email: !email,
                    tel: !tel,
                    pricePerNight: !pricePerNight,
                    address: !address
                }
            });
        }

       
        if (pricePerNight <= 0) {
            return res.status(400).json({ message: "Le prix doit être supérieur à zéro" });
        }

        
        const newHotel = new HotelModel({
            name,
            email,
            tel,
            pricePerNight,
            currency: currency || 'EUR',
            imageUrl: imageUrl || 'https://via.placeholder.com/300x200',
            address,
            userId  
        });

        
        const savedHotel = await newHotel.save();

        res.status(201).json({
            message: "Hôtel ajouté avec succès",
            hotel: savedHotel
        });
        
    } catch (error) {
        console.error("Erreur lors de l'ajout de l'hôtel:", error);
        res.status(500).json({ 
            message: "Erreur interne du serveur", 
            error: error.message 
        });
    }
};

exports.getAllHotels = async (req, res) => {
    try {
        const hotels = await HotelModel.find().sort({ createdAt: -1 });
        res.status(200).json({ hotels });
    } catch (error) {
        console.error("Erreur lors de la récupération des hôtels:", error);
        res.status(500).json({ 
            message: "Erreur interne du serveur", 
            error: error.message 
        });
    }
};