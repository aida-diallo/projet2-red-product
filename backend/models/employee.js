
// const mongoose = require('mongoose');

// const EmployeeSchema = new mongoose.Schema({
//     name: { type: String, required: true },
//     email: { type: String, required: true },
//     password: { type: String, required: true },
// });

// const EmployeeModel = mongoose.model("Employee", EmployeeSchema);

// module.exports = EmployeeModel;



const mongoose = require('mongoose');

const HotelSchema = new mongoose.Schema({
    name: { type: String, required: true },
    email: { type: String, required: true },
    password: { type: String, required: true },  // Si vous souhaitez avoir un mot de passe pour l'hôtel (par exemple pour un admin)
    
    // Champs pour les informations sur l'hôtel
    description: { type: String },
    tel: { type: String },
    pricePerNight: { type: Number },
    currency: { type: String },
    imageUrl: { type: String },
});

const HotelModel = mongoose.model("Hotel", HotelSchema); // Renommé en HotelModel

module.exports = HotelModel;  // Exportez maintenant HotelModel


