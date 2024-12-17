import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Header from './Header';
import AirportList from './AirportList';
import FlightList from './FlightList';
import AddFlightForm from './AddFlightForm';
import AdminDashboard from './AdminDashboard';
import Loader from './Loader';

function App() {
  const [airports, setAirports] = useState([]);
  const [flights, setFlights] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchAirports = async () => {
      try {
        const response = await axios.get('http://localhost:8080/api/airports');
        setAirports(response.data);
      } catch (error) {
        console.error(error);
      } finally {
        setLoading(false);
      }
    };
    fetchAirports();
  }, []);

  const handleAirportChange = async (airportId) => {
    setLoading(true);
    try {
      const response = await axios.get(`http://localhost:8080/api/airports/${airportId}/flights`);
      setFlights(response.data);
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  if (loading) return <Loader />;

  return (
    <Router>
      <Header />
      <Switch>
        <Route path="/" exact>
          <AirportList airports={airports} onAirportChange={handleAirportChange} />
          <FlightList flights={flights} />
        </Route>
        <Route path="/admin" component={AdminDashboard} />
        <Route path="/add-flight" component={AddFlightForm} />
      </Switch>
    </Router>
  );
}

export default App;