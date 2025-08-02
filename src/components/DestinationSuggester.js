import React, { useState } from 'react';

const destinations = [
  {
    name: 'Bali, Indonesia',
    type: ['beach', 'culture'],
    cost: 1200,
    image: 'https://source.unsplash.com/featured/?bali',
    bestTime: 'April to October',
  },
  {
    name: 'Kyoto, Japan',
    type: ['culture', 'food'],
    cost: 1800,
    image: 'https://source.unsplash.com/featured/?kyoto',
    bestTime: 'March to May, October to November',
  },
  {
    name: 'Goa, India',
    type: ['beach', 'food'],
    cost: 900,
    image: 'https://source.unsplash.com/featured/?goa',
    bestTime: 'November to February',
  },
  {
    name: 'Peru',
    type: ['adventure', 'culture'],
    cost: 1500,
    image: 'https://source.unsplash.com/featured/?peru',
    bestTime: 'May to September',
  },
  {
    name: 'New Orleans, USA',
    type: ['food', 'culture'],
    cost: 1000,
    image: 'https://source.unsplash.com/featured/?neworleans',
    bestTime: 'February to May',
  },
];

const DestinationSuggester = () => {
  const [preferences, setPreferences] = useState({
    budget: '',
    interest: '',
  });
  const [suggestions, setSuggestions] = useState([]);

  const handleChange = (e) => {
    setPreferences({ ...preferences, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const filtered = destinations.filter(
      (d) =>
        d.type.includes(preferences.interest.toLowerCase()) &&
        d.cost <= parseInt(preferences.budget)
    );
    setSuggestions(filtered);
  };

  return (
    <div className="p-4 max-w-3xl mx-auto">
      <h2 className="text-2xl font-semibold mb-4">Find Your Ideal Destination</h2>
      <form onSubmit={handleSubmit} className="space-y-4 bg-gray-100 p-4 rounded-xl shadow">
        <div>
          <label className="block text-sm font-medium mb-1">Budget (USD)</label>
          <input
            type="number"
            name="budget"
            value={preferences.budget}
            onChange={handleChange}
            className="w-full border p-2 rounded"
            required
          />
        </div>
        <div>
          <label className="block text-sm font-medium mb-1">Interest</label>
          <select
            name="interest"
            value={preferences.interest}
            onChange={handleChange}
            className="w-full border p-2 rounded"
            required
          >
            <option value="">-- Select Interest --</option>
            <option value="beach">Beach</option>
            <option value="adventure">Adventure</option>
            <option value="culture">Culture</option>
            <option value="food">Food</option>
          </select>
        </div>
        <button type="submit" className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700">
          Suggest Destinations
        </button>
      </form>

      {suggestions.length > 0 && (
        <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-6">
          {suggestions.map((dest, index) => (
            <div key={index} className="bg-white shadow-lg rounded-xl overflow-hidden">
              <img src={dest.image} alt={dest.name} className="w-full h-48 object-cover" />
              <div className="p-4">
                <h3 className="text-lg font-semibold">{dest.name}</h3>
                <p>Est. Cost: ${dest.cost}</p>
                <p>Best Time: {dest.bestTime}</p>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default DestinationSuggester;
