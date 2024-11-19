import { PartyPopper, Music, Gift } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Hero() {
  return (
    <section id="home">
      <div className="relative h-[600px]">
        <div className="absolute inset-0 bg-gradient-to-r from-purple-900/85 to-pink-900/85 z-10" />
        <img 
          src="https://images.unsplash.com/photo-1533777857889-4be7c70b33f7?auto=format&fit=crop&w=2000&q=80" 
          alt="Hero" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 flex items-center justify-center z-20">
          <div className="text-center text-white max-w-4xl px-4">
            <h1 className="text-6xl font-bold mb-6">
              <span className="block text-accent-yellow">Party Central</span>
              <span className="block text-4xl mt-2">Your Ultimate Hangout Spot!</span>
            </h1>
            <p className="text-xl mb-8 text-gray-200">Where great food meets unforgettable celebrations. Perfect for students, perfect for fun!</p>
            <div className="flex flex-wrap justify-center gap-4 mb-8">
              <div className="flex items-center gap-2 bg-white/10 backdrop-blur-md px-4 py-2 rounded-full">
                <PartyPopper className="h-5 w-5 text-accent-yellow" />
                <span>Birthday Specials</span>
              </div>
              <div className="flex items-center gap-2 bg-white/10 backdrop-blur-md px-4 py-2 rounded-full">
                <Music className="h-5 w-5 text-accent-pink" />
                <span>Live Music</span>
              </div>
              <div className="flex items-center gap-2 bg-white/10 backdrop-blur-md px-4 py-2 rounded-full">
                <Gift className="h-5 w-5 text-accent-purple" />
                <span>Student Discounts</span>
              </div>
            </div>
            <div className="flex flex-wrap justify-center gap-4">
              <a 
                href="#menu" 
                className="bg-accent-yellow text-gray-900 px-8 py-3 rounded-full font-semibold hover:bg-yellow-400 transition-colors"
              >
                Order Now
              </a>
              <Link 
                to="/plan-your-party" 
                className="bg-accent-purple text-white px-8 py-3 rounded-full font-semibold hover:bg-purple-600 transition-colors"
              >
                Plan Your Party
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}