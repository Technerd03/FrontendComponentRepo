import axios from 'axios';

const API_BASE_URL = process.env.REACT_APP_API_BASE_URL || 'http://localhost:8080/api';

export const fetchAirports = async () => {
  const response = await axios.get(`${API_BASE_URL}/airports`);
  return response.data;
};

export const fetchFlights = async () => {
  const response = await axios.get(`${API_BASE_URL}/flights`);
  return response.data;
};

export const addFlight = async (flightData) => {
  const response = await axios.post(`${API_BASE_URL}/flights`, flightData);
  return response.data;
};