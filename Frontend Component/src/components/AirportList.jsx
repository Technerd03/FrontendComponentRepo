import React from 'react';

function AirportList({ airports, onAirportChange }) {
  return (
    <div>
      <h1>Airports</h1>
      <select onChange={(e) => onAirportChange(e.target.value)}>
        <option value="">Select an airport</option>
        {airports.map(airport => (
          <option key={airport.id} value={airport.id}>{airport.name}</option>
        ))}
      </select>
    </div>
  );
}

export default AirportList;