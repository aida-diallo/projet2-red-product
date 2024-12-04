const mongoose = require('mongoose');

const HotelSchema = new mongoose.Schema({
    name: { type: String, required: true },
    description: { type: String, required: true },
    email: { type: String, required: true },
    tel: { type: String, required: true },
    pricePerNight: { type: Number, required: true },
    currency: { type: String, required: true },
    imageUrl: { type: String },
});

const HotelModel = mongoose.model('Hotel', HotelSchema);
module.exports = HotelModel;
