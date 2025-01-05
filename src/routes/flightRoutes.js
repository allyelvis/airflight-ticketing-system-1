const express = require('express');
const { createFlight, getAllFlights, getFlightById } = require('../controllers/flightController');

const router = express.Router();

// Create a new flight
router.post('/', createFlight);

// Get all flights
router.get('/', getAllFlights);

// Get flight by ID
router.get('/:id', getFlightById);

module.exports = router;
