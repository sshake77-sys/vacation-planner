import React from 'react';

const mockData = {
  Bali: {
    flights: [
      { airline: 'Singapore Airlines', route: 'Dallas → Bali', cost: '$1100', duration: '23h 45m' },
      { airline: 'Emirates', route: 'Dallas → Dubai → Bali', cost: '$1250', duration: '26h' },
    ],
    hotels: [
      { name: 'The Kayon Resort', rating: 4.8, cost: '$150/night' },
      { name: 'Alila Villas Uluwatu', rating: 4.7, cost: '$200/night' },
    ],
  },
  Tokyo: {
    flights: [
      { airline: 'ANA', route: 'Dallas → Tokyo', cost: '$950', duration: '14h' },
      { airline: 'United', route: 'Dallas → San Francisco → Tokyo', cost: '$1000', duration: '16h' },
    ],
    hotels: [
      { name: 'Park Hyatt Tokyo', rating: 4.9, cost: '$300/night' },
      { name: 'Shinjuku Granbell Hotel', rating: 4.3, cost: '$120/night' },
    ],
  },
};

const Suggestions = ({ destination }) => {
  const data = mockData[destination];

  if (!data) return null;

  return (
    <div className="mt-6 p-4 bg-white rounded-lg shadow-md">
      <h3 className="text-xl font-bold mb-2">✈️ Flight Options</h3>
      {data.flights.map((flight, i) => (
        <div key={i} className="border p-2 mb-2 rounded">
          <p><strong>{flight.airline}</strong> - {flight.route}</p>
          <p>Duration: {flight.duration}, Cost: {flight.cost}</p>
        </div>
      ))}

      <h3 className="text-xl font-bold mt-4 mb-2">🏨 Hotel Options</h3>
      {data.hotels.map((hotel, i) => (
        <div key={i} className="border p-2 mb-2 rounded">
          <p><strong>{hotel.name}</strong> - {hotel.rating} ⭐</p>
          <p>Cost: {hotel.cost}</p>
        </div>
      ))}
    </div>
  );
};

export default Suggestions;
