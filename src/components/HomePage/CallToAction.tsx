import { Link } from 'react-router-dom';
import { PartyPopper, Calendar, Gift } from 'lucide-react';

export default function CallToAction() {
  return (
    <section className="py-20 bg-gradient-to-r from-primary to-primary-dark relative overflow-hidden">
      <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1533174072545-7a4b6ad7a6c3?auto=format&fit=crop&w=2000&q=80')] opacity-10 bg-cover bg-center" />
      
      <div className="max-w-7xl mx-auto px-4 relative z-10">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-white mb-6">Ready to Start Planning?</h2>
          <p className="text-xl text-white/90 max-w-3xl mx-auto">
            Let us help you create the perfect celebration. Book your venue, plan your menu, and let the party begin!
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 text-white text-center">
            <PartyPopper className="w-12 h-12 mx-auto mb-4" />
            <h3 className="text-xl font-semibold mb-2">Book a Venue</h3>
            <p className="text-white/80 mb-4">Find the perfect space for your celebration</p>
            <Link
              to="/plan-your-party"
              className="inline-block bg-white text-primary px-6 py-2 rounded-full hover:bg-gray-100 transition-colors"
            >
              View Venues
            </Link>
          </div>

          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 text-white text-center">
            <Calendar className="w-12 h-12 mx-auto mb-4" />
            <h3 className="text-xl font-semibold mb-2">Plan Your Menu</h3>
            <p className="text-white/80 mb-4">Customize your perfect party menu</p>
            <Link
              to="/menu"
              className="inline-block bg-white text-primary px-6 py-2 rounded-full hover:bg-gray-100 transition-colors"
            >
              Browse Menu
            </Link>
          </div>

          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 text-white text-center">
            <Gift className="w-12 h-12 mx-auto mb-4" />
            <h3 className="text-xl font-semibold mb-2">Special Packages</h3>
            <p className="text-white/80 mb-4">Explore our curated party packages</p>
            <Link
              to="/events"
              className="inline-block bg-white text-primary px-6 py-2 rounded-full hover:bg-gray-100 transition-colors"
            >
              View Packages
            </Link>
          </div>
        </div>

        <div className="text-center">
          <Link
            to="/contact"
            className="inline-block bg-white text-primary px-8 py-3 rounded-full font-semibold hover:bg-gray-100 transition-colors"
          >
            Contact Us
          </Link>
        </div>
      </div>
    </section>
  );
}