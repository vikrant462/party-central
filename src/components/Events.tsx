import { Calendar, Users, Music, Gift } from 'lucide-react';

export default function Events() {
  return (
    <div className="max-w-7xl mx-auto px-4 py-16">
      <h2 className="text-3xl font-bold text-center mb-4 gradient-text">Plan Your Perfect Party</h2>
      <p className="text-center text-gray-600 mb-12">Choose from our exciting party packages or customize your own!</p>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        <div className="party-card p-6 text-white rounded-xl">
          <Calendar className="h-8 w-8 mb-4" />
          <h3 className="text-xl font-bold mb-2">Birthday Bash</h3>
          <p className="mb-4">Make your birthday unforgettable with our special party package!</p>
          <ul className="space-y-2 mb-6">
            <li>• Custom cake included</li>
            <li>• Party decorations</li>
            <li>• Special menu options</li>
            <li>• Party games</li>
          </ul>
          <button className="w-full bg-white text-primary py-2 rounded-full font-semibold hover:bg-gray-100 transition-colors">
            Book Now
          </button>
        </div>

        <div className="party-card p-6 text-white rounded-xl">
          <Users className="h-8 w-8 mb-4" />
          <h3 className="text-xl font-bold mb-2">Group Celebration</h3>
          <p className="mb-4">Perfect for team events and friend gatherings!</p>
          <ul className="space-y-2 mb-6">
            <li>• Group discounts</li>
            <li>• Reserved seating</li>
            <li>• Customizable menu</li>
            <li>• Party favors</li>
          </ul>
          <button className="w-full bg-white text-primary py-2 rounded-full font-semibold hover:bg-gray-100 transition-colors">
            Book Now
          </button>
        </div>

        <div className="party-card p-6 text-white rounded-xl">
          <Music className="h-8 w-8 mb-4" />
          <h3 className="text-xl font-bold mb-2">Music Night</h3>
          <p className="mb-4">Live music and great food - the perfect combo!</p>
          <ul className="space-y-2 mb-6">
            <li>• Live band performance</li>
            <li>• Dance floor access</li>
            <li>• Special drink menu</li>
            <li>• VIP seating</li>
          </ul>
          <button className="w-full bg-white text-primary py-2 rounded-full font-semibold hover:bg-gray-100 transition-colors">
            Book Now
          </button>
        </div>
      </div>
    </div>
  );
}