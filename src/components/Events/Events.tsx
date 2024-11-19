import { useState } from 'react';
import { Calendar, Users, Clock, Music, Cake, Camera } from 'lucide-react';

interface EventFormData {
  date: string;
  time: string;
  guests: number;
  eventType: string;
  name: string;
  email: string;
  phone: string;
  specialRequests: string;
}

export default function Events() {
  const [formData, setFormData] = useState<EventFormData>({
    date: '',
    time: '',
    guests: 1,
    eventType: 'birthday',
    name: '',
    email: '',
    phone: '',
    specialRequests: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    alert('Thank you! We will contact you shortly to confirm your event details.');
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const eventTypes = [
    { id: 'birthday', icon: Cake, label: 'Birthday Party', description: 'Make your birthday extra special!' },
    { id: 'graduation', icon: Users, label: 'Graduation Party', description: 'Celebrate your achievement!' },
    { id: 'social', icon: Music, label: 'Social Gathering', description: 'Perfect for casual meetups!' },
    { id: 'photoshoot', icon: Camera, label: 'Photo Session', description: 'Capture memories in style!' }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-r from-pink-800 to-purple-600 text-white px-4 py-16">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-extrabold mb-4 text-white">Plan Your Perfect Event</h2>
          <p className="text-lg">Let us make your celebration unforgettable!</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div>
            {/* Event Packages */}
            <div className="bg-white p-8 rounded-xl shadow-lg">
              <h3 className="text-2xl font-bold mb-6 text-gray-900">Event Packages</h3>
              <div className="space-y-6">
                {eventTypes.map(({ id, icon: Icon, label, description }) => (
                  <div
                    key={id}
                    className={`p-4 rounded-lg border-2 transition-all cursor-pointer ${
                      formData.eventType === id ? 'border-primary bg-red-50' : 'border-gray-200 hover:border-primary'
                    }`}
                    onClick={() => setFormData({ ...formData, eventType: id })}
                  >
                    <div className="flex items-center gap-4">
                      <div className="p-3 bg-gradient-to-r from-primary to-primary-dark rounded-lg">
                        <Icon className="h-6 w-6 text-white" />
                      </div>
                      <div>
                        <h4 className="font-semibold text-gray-900">{label}</h4>
                        <p className="text-sm text-gray-600">{description}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Why Choose Us */}
            <div className="mt-8 bg-gradient-to-r from-purple-700 to-pink-600 p-8 rounded-xl text-white shadow-lg">
              <h3 className="text-2xl font-bold mb-4">Why Choose Us?</h3>
              <ul className="space-y-4">
                <li className="flex items-center gap-3">
                  <div className="p-2 bg-white/10 rounded-lg">
                    <Music className="h-5 w-5" />
                  </div>
                  <span>Professional DJ & Sound System</span>
                </li>
                <li className="flex items-center gap-3">
                  <div className="p-2 bg-white/10 rounded-lg">
                    <Cake className="h-5 w-5" />
                  </div>
                  <span>Custom Theme Decorations</span>
                </li>
                <li className="flex items-center gap-3">
                  <div className="p-2 bg-white/10 rounded-lg">
                    <Camera className="h-5 w-5" />
                  </div>
                  <span>Professional Photography</span>
                </li>
              </ul>
            </div>
          </div>

          {/* Book Your Event Form */}
          <div className="bg-white p-8 rounded-xl shadow-lg">
            <h3 className="text-2xl font-bold mb-6 text-gray-900">Book Your Event</h3>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    <Calendar className="h-4 w-4 inline mr-2" />
                    Date
                  </label>
                  <input
                    type="date"
                    name="date"
                    required
                    className="w-full border-2 border-gray-300 rounded-lg py-2 px-4 text-gray-700 focus:outline-none focus:ring-2 transition duration-300"
                    onChange={handleChange}
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    <Clock className="h-4 w-4 inline mr-2" />
                    Time
                  </label>
                  <input
                    type="time"
                    name="time"
                    required
                    className="w-full border-2 border-gray-300 rounded-lg py-2 px-4 text-gray-700 focus:outline-none focus:ring-2 transition duration-300"
                    onChange={handleChange}
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  <Users className="h-4 w-4 inline mr-2" />
                  Number of Guests
                </label>
                <input
                  type="number"
                  name="guests"
                  min="1"
                  required
                  className="w-full border-2 border-gray-300 rounded-lg py-2 px-4 text-gray-700 focus:outline-none focus:ring-2 transition duration-300"
                  onChange={handleChange}
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Name</label>
                <input
                  type="text"
                  name="name"
                  required
                  className="w-full border-2 border-gray-300 rounded-lg py-2 px-4 text-gray-700 focus:outline-none focus:ring-2 transition duration-300"
                  onChange={handleChange}
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Email</label>
                <input
                  type="email"
                  name="email"
                  required
                  className="w-full border-2 border-gray-300 rounded-lg py-2 px-4 text-gray-700 focus:outline-none focus:ring-2 transition duration-300"
                  onChange={handleChange}
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Phone</label>
                <input
                  type="tel"
                  name="phone"
                  required
                  className="w-full border-2 border-gray-300 rounded-lg py-2 px-4 text-gray-700 focus:outline-none focus:ring-2 transition duration-300"
                  onChange={handleChange}
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Special Requests</label>
                <textarea
                  name="specialRequests"
                  rows={4}
                  className="w-full border-2 border-gray-300 rounded-lg py-2 px-4 text-gray-700 focus:outline-none focus:ring-2 transition duration-300"
                  onChange={handleChange}
                />
              </div>

              <button
                type="submit"
                className="w-full bg-gradient-to-r from-primary to-primary-dark text-white py-3 rounded-lg font-semibold hover:opacity-90 transition-opacity"
              >
                Book Event
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
