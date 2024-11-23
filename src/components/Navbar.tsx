import { Menu, ShoppingCart, User, Music2 } from 'lucide-react';
import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useCartStore } from '../store/cartStore';

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navigate = useNavigate();
  const items = useCartStore((state) => state.items);
  const itemCount = items.reduce((sum, item) => sum + item.quantity, 0);

  return (
    <nav className="fixed top-0 w-full bg-white/80 backdrop-blur-md shadow-md z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center">
            <Link to="/" className="flex items-center gap-2">
              <Music2 className="h-8 w-8 text-primary animate-bounce-slow" />
              <span className="text-2xl font-bold gradient-text">Party Central</span>
            </Link>
          </div>
          
          <div className="hidden md:flex items-center space-x-8">
            <a href="#home" className="text-gray-700 hover:text-primary font-medium">Home</a>
            <a href="#menu" className="text-gray-700 hover:text-primary font-medium">Menu</a>
            <a href="#events" className="text-gray-700 hover:text-primary font-medium">Events</a>
            <a href="#rewards" className="text-gray-700 hover:text-primary font-medium">Rewards</a>
          </div>

          <div className="flex items-center space-x-4">
            <button className="p-2 hover:bg-gray-100 rounded-full">
              <User className="h-6 w-6 text-gray-700" />
            </button>
            <button 
              className="p-2 hover:bg-gray-100 rounded-full relative"
              onClick={() => navigate('/cart')}
            >
              <ShoppingCart className="h-6 w-6 text-gray-700" />
              {itemCount > 0 && (
                <span className="absolute -top-1 -right-1 bg-primary text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
                  {itemCount}
                </span>
              )}
            </button>
            <button 
              className="md:hidden p-2 hover:bg-gray-100 rounded-full"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              <Menu className="h-6 w-6 text-gray-700" />
            </button>
          </div>
        </div>
      </div>

      {isMenuOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white/80 backdrop-blur-md">
            <a href="#home" className="block px-3 py-2 text-gray-700 hover:bg-gray-100 rounded-lg">Home</a>
            <a href="#menu" className="block px-3 py-2 text-gray-700 hover:bg-gray-100 rounded-lg">Menu</a>
            <a href="#events" className="block px-3 py-2 text-gray-700 hover:bg-gray-100 rounded-lg">Events</a>
            <a href="#rewards" className="block px-3 py-2 text-gray-700 hover:bg-gray-100 rounded-lg">Rewards</a>
          </div>
        </div>
      )}
    </nav>
  );
}