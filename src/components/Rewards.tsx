import { Star, Gift, Trophy, Ticket } from 'lucide-react';

export default function Rewards() {
  return (
    <div className="max-w-7xl mx-auto px-4 py-16">
      <h2 className="text-3xl font-bold text-center mb-4 gradient-text">Party Rewards</h2>
      <p className="text-center text-gray-600 mb-12">Earn points with every order and unlock amazing rewards!</p>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-xl transition-shadow">
          <Star className="h-8 w-8 text-accent-yellow mb-4" />
          <h3 className="text-lg font-bold mb-2">Bronze Level</h3>
          <p className="text-gray-600 mb-4">Earn 1 point per $1 spent</p>
          <ul className="text-sm space-y-2 text-gray-600">
            <li>• Free birthday dessert</li>
            <li>• Special member pricing</li>
          </ul>
        </div>

        <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-xl transition-shadow">
          <Gift className="h-8 w-8 text-accent-purple mb-4" />
          <h3 className="text-lg font-bold mb-2">Silver Level</h3>
          <p className="text-gray-600 mb-4">Earn 1.5 points per $1 spent</p>
          <ul className="text-sm space-y-2 text-gray-600">
            <li>• All Bronze benefits</li>
            <li>• Free delivery</li>
            <li>• Priority seating</li>
          </ul>
        </div>

        <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-xl transition-shadow">
          <Trophy className="h-8 w-8 text-accent-pink mb-4" />
          <h3 className="text-lg font-bold mb-2">Gold Level</h3>
          <p className="text-gray-600 mb-4">Earn 2 points per $1 spent</p>
          <ul className="text-sm space-y-2 text-gray-600">
            <li>• All Silver benefits</li>
            <li>• Monthly bonus rewards</li>
            <li>• Exclusive event access</li>
          </ul>
        </div>

        <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-xl transition-shadow">
          <Ticket className="h-8 w-8 text-primary mb-4" />
          <h3 className="text-lg font-bold mb-2">VIP Level</h3>
          <p className="text-gray-600 mb-4">Earn 3 points per $1 spent</p>
          <ul className="text-sm space-y-2 text-gray-600">
            <li>• All Gold benefits</li>
            <li>• Personal party planner</li>
            <li>• Custom party packages</li>
          </ul>
        </div>
      </div>

      <div className="mt-12 text-center">
        <button className="bg-gradient-to-r from-primary to-primary-dark text-white px-8 py-3 rounded-full font-semibold hover:opacity-90 transition-opacity">
          Join Rewards Program
        </button>
      </div>
    </div>
  );
}