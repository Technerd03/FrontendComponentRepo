import React, { useState } from 'react';
import axios from 'axios';

function AddFlightForm() {
  const [flightNumber, setFlightNumber] = useState('');
  const [airline, setAirline] = useState('');
  const [airportId, setAirportId] = useState('');

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      await axios.post('http://localhost:8080/api/flights', { flightNumber, airline, airportId });
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" value={flightNumber} onChange={(e) => setFlightNumber(e.target.value)} placeholder="Flight Number" required />
      <input type="text" value={airline} onChange={(e) => setAirline(e.target.value)} placeholder="Airline" required />
      <select value={airportId} onChange={(e) => setAirportId(e.target.value)} required>
        <option value="">Select Airport</option>
      </select>
      <button type="submit">Add Flight</button>
    </form>
  );
}

export default AddFlightForm;