const { Pool } = require('pg');
const pool = new Pool({
  connectionString: process.env.DATABASE_URL,
});

const Booking = {
  create: async (bookingData) => {
    const { flightId, passengerName, email, seats } = bookingData;
    const result = await pool.query(
      'INSERT INTO bookings (flight_id, passenger_name, email, seats) VALUES (, , , ) RETURNING *',
      [flightId, passengerName, email, seats]
    );
    return result.rows[0];
  },

  getAll: async () => {
    const result = await pool.query('SELECT * FROM bookings');
    return result.rows;
  },

  getById: async (id) => {
    const result = await pool.query('SELECT * FROM bookings WHERE id = ', [id]);
    return result.rows[0];
  },
};

module.exports = Booking;
