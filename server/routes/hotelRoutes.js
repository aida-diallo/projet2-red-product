// routes/hotelRoutes.js
const express = require('express');
const router = express.Router();
const { addHotel, getAllHotels } = require('../controllers/hotel');

router.post('/hotels', addHotel);
router.get('/hotels', getAllHotels);

module.exports = router;



