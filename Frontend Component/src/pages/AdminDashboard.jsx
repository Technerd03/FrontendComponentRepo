import React, { useState } from 'react';
import { addFlight } from '../services/api';

const AdminDashboard = () => {
  const [flightData, setFlightData] = useState({
    type: '',
    airlineName: '',
    numberOfPassengers: 0,
  });

  const handleChange = (e) => {
    setFlightData({ ...flightData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    await addFlight(flightData);
    alert('Flight added successfully!');
  };

  return (
    <div>
      <h2>Admin Dashboard</h2>
      <form onSubmit={handleSubmit}>
        <input name="type" placeholder="Type" onChange={handleChange} />
        <input name="airlineName" placeholder="Airline Name" onChange={handleChange} />
        <input name="numberOfPassengers" placeholder="Passengers" onChange={handleChange} />
        <button type="submit">Add Flight</button>
      </form>
    </div>
  );
};

export default AdminDashboard;