import React from 'react';
import { render, fireEvent, waitFor } from '@testing-library/react';
import App from './App';
import axios from 'axios';

jest.mock('axios');

describe('App', () => {
  beforeEach(() => {
    axios.get.mockImplementation((url) => {
      if (url === 'http://localhost:8080/api/airports') {
        return Promise.resolve({ data: [{ id: '1', name: 'JFK' }, { id: '2', name: 'LAX' }] });
      }
      if (url.startsWith('http://localhost:8080/api/airports/')) {
        return Promise.resolve({ data: [{ id: 'AA123', airline: 'American Airlines' }] });
      }
      return Promise.reject(new Error('Not Found'));
    });
  });

  it('renders airport list', async () => {
    const { getByText } = render(<App />);
    await waitFor(() => expect(getByText('Airports')).toBeInTheDocument());
  });

  it('renders flight list', async () => {
    const { getByText } = render(<App />);
    await waitFor(() => expect(getByText('Flights')).toBeInTheDocument());
  });

  it('handles airport selection', async () => {
    const { getByRole, getByText } = render(<App />);
    const airportSelect = getByRole('combobox');
    fireEvent.change(airportSelect, { target: { value: '1' } });
    await waitFor(() => expect(getByText('American Airlines AA123')).toBeInTheDocument());
  });
});