const express = require('express');
const flightRoutes = require('./routes/flightRoutes');
const bookingRoutes = require('./routes/bookingRoutes');
const dotenv = require('dotenv');

dotenv.config();

const app = express();
app.use(express.json());

// Routes
app.use('/api/flights', flightRoutes);
app.use('/api/bookings', bookingRoutes);

// Health check route
app.get('/', (req, res) => {
  res.send('Welcome to the Airflight Ticketing System!');
});

module.exports = app;
