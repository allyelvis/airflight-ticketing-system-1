const { Pool } = require('pg');
const pool = new Pool({
  connectionString: process.env.DATABASE_URL,
});

const Flight = {
  create: async (flightData) => {
    const { flightNumber, origin, destination, departureTime, arrivalTime, price } = flightData;
    const result = await pool.query(
      'INSERT INTO flights (flight_number, origin, destination, departure_time, arrival_time, price) VALUES (, , , , , ) RETURNING *',
      [flightNumber, origin, destination, departureTime, arrivalTime, price]
    );
    return result.rows[0];
  },

  getAll: async () => {
    const result = await pool.query('SELECT * FROM flights');
    return result.rows;
  },

  getById: async (id) => {
    const result = await pool.query('SELECT * FROM flights WHERE id = ', [id]);
    return result.rows[0];
  },
};

module.exports = Flight;
