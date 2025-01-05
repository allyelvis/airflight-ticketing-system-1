const express = require('express');
const { createBooking, getAllBookings, getBookingById } = require('../controllers/bookingController');

const router = express.Router();

// Create a new booking
router.post('/', createBooking);

// Get all bookings
router.get('/', getAllBookings);

// Get booking by ID
router.get('/:id', getBookingById);

module.exports = router;
