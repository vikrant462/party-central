import { useState } from 'react';
import PartyTheme from './PartyTheme';

const PlanYourParty: React.FC = () => {
  const [formData, setFormData] = useState({
    date: '',
    guests: '',
    specialRequests: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Party Details:', formData);
    alert('Your party has been planned successfully!');
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <PartyTheme>
      {/* Left Column - Party Planning Form */}
      <div className="flex flex-col justify-start space-y-8 shadow-lg rounded-xl p-6 bg-gradient-to-r from-purple-800/90 to-pink-800/90">
        <h1 className="text-4xl font-extrabold text-center mb-6 text-white">Plan Your Dream Party</h1>

        <p className="text-lg text-center mb-6 text-gray-200">
          Whether it's a birthday, anniversary, or any special occasion, we are here to help you plan the perfect party. Fill out the details below, and we'll take care of the rest!
        </p>

        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Event Date */}
          <div>
            <label htmlFor="date" className="block text-lg font-medium text-gray-200 mb-2">Event Date</label>
            <input
              type="date"
              id="date"
              name="date"
              value={formData.date}
              onChange={handleChange}
              className="w-full border-2 border-gray-300 rounded-lg py-2 px-4 text-gray-700 focus:outline-none focus:ring-2 focus:ring-accent-yellow transition duration-300"
            />
          </div>

          {/* Number of Guests */}
          <div>
            <label htmlFor="guests" className="block text-lg font-medium text-gray-200 mb-2">Number of Guests</label>
            <input
              type="number"
              id="guests"
              name="guests"
              value={formData.guests}
              onChange={handleChange}
              className="w-full border-2 border-gray-300 rounded-lg py-2 px-4 text-gray-700 focus:outline-none focus:ring-2 focus:ring-accent-yellow transition duration-300"
            />
          </div>

          {/* Special Requests */}
          <div>
            <label htmlFor="specialRequests" className="block text-lg font-medium text-gray-200 mb-2">Special Requests</label>
            <textarea
              id="specialRequests"
              name="specialRequests"
              value={formData.specialRequests}
              onChange={handleChange}
              rows={4}
              className="w-full border-2 border-gray-300 rounded-lg py-2 px-4 text-gray-700 focus:outline-none focus:ring-2 focus:ring-accent-yellow transition duration-300"
            ></textarea>
          </div>

          {/* Submit Button */}
          <div className="flex justify-center">
            <button
              type="submit"
              className="w-full sm:w-auto bg-accent-yellow text-gray-900 py-3 rounded-lg hover:bg-yellow-400 focus:ring-4 focus:ring-accent-yellow transition duration-300 ease-in-out transform hover:scale-105 p-4"
            >
              Plan My Party
            </button>
          </div>
        </form>
      </div>

      {/* Right Column - Party Packages */}
      <div className="flex flex-col space-y-12">
        <h2 className="text-2xl font-semibold mb-4 text-center text-white">Popular Party Packages</h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
          {/* Basic Package Card */}
          <div className="bg-gradient-to-r from-purple-700 to-pink-700 rounded-xl shadow-xl transform hover:scale-105 transition-all duration-300 ease-in-out">
            <div className="p-6">
              <h3 className="text-2xl font-semibold text-accent-yellow mb-4">Basic Package</h3>
              <p className="text-sm text-gray-200 mb-4">Includes event planning, venue selection, and basic decorations.</p>
              <p className="text-xl font-semibold text-accent-yellow">₹10,000</p>
            </div>
          </div>

          {/* Premium Package Card */}
          <div className="bg-gradient-to-r from-purple-700 to-pink-700 rounded-xl shadow-xl transform hover:scale-105 transition-all duration-300 ease-in-out">
            <div className="p-6">
              <h3 className="text-2xl font-semibold text-accent-yellow mb-4">Premium Package</h3>
              <p className="text-sm text-gray-200 mb-4">Includes everything in the basic package plus catering, entertainment, and photography services.</p>
              <p className="text-xl font-semibold text-accent-yellow">₹25,000</p>
            </div>
          </div>
        </div>

        {/* Contact Information */}
        <div className="text-center mt-6">
          <p className="text-sm text-gray-300">For more details or custom packages, feel free to <a href="mailto:contact@partyplanner.com" className="text-accent-yellow hover:underline">contact us</a>.</p>            
        </div>
      </div>
    </PartyTheme>
  );
};

export default PlanYourParty;
