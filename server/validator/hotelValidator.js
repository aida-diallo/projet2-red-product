// validators/hotelValidator.js
const { isEmail } = require('validator');

const validateHotelData = async (name, description, email, tel, pricePerNight) => {
    if (!name || !description || !email || !tel || pricePerNight == null) {
        throw new Error("Tous les champs sont requis");
    }
    
    if (!isEmail(email)) {
        throw new Error("Veuillez entrer un email valide");
    }

    if (typeof pricePerNight !== 'number' || pricePerNight < 0) {
        throw new Error("Le prix par nuit doit être un nombre positif");
    }
};

module.exports = validateHotelData;
