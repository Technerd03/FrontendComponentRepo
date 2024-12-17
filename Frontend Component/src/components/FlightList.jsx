import React from 'react';

function FlightList({ flights }) {
  return (
    <div>
      <h1>Flights</h1>
      <ul>
        {flights.map(flight => (
          <li key={flight.id}>{flight.airline} {flight.flightNumber}</li>
        ))}
      </ul>
    </div>
  );
}

export default FlightList;