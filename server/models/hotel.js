
// models/hotel.js
const mongoose = require('mongoose');

const hotelSchema = new mongoose.Schema({
    name: { 
        type: String, 
        required: true,
        trim: true 
    },
    description: { 
        type: String, 
        default: '' 
    },
    email: { 
        type: String, 
        required: true,
        lowercase: true, 
        trim: true 
    },
    tel: { 
        type: String, 
        required: true 
    },
    pricePerNight: { 
        type: Number, 
        required: true, 
        min: 1 
    },
    currency: { 
        type: String, 
        default: 'EUR' 
    },
    address: { 
        type: String, 
        required: true 
    },
    imageUrl: { 
        type: String, 
        default: 'https://via.placeholder.com/300x200' 
    },
    userId: { 
        type: mongoose.Schema.Types.ObjectId, 
        ref: 'User',
        required: true 
    }
}, {
    timestamps: true
});

module.exports = mongoose.model('Hotel', hotelSchema);


