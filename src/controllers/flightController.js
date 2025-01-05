const Flight = require('../models/flightModel');

const createFlight = async (req, res) => {
  try {
    const flight = await Flight.create(req.body);
    res.status(201).json(flight);
  } catch (error) {
    res.status(500).json({ error: 'Failed to create flight' });
  }
};

const getAllFlights = async (req, res) => {
  try {
    const flights = await Flight.getAll();
    res.status(200).json(flights);
  } catch (error) {
    res.status(500).json({ error: 'Failed to retrieve flights' });
  }
};

const getFlightById = async (req, res) => {
  try {
    const flight = await Flight.getById(req.params.id);
    if (!flight) {
      return res.status(404).json({ error: 'Flight not found' });
    }
    res.status(200).json(flight);
  } catch (error) {
    res.status(500).json({ error: 'Failed to retrieve flight' });
  }
};

module.exports = {
  createFlight,
  getAllFlights,
  getFlightById,
};
