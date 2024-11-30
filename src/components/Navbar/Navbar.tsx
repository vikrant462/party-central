import { Menu, ShoppingCart, Music2 } from 'lucide-react';
import { useState } from 'react';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import { useCartStore } from '../../store/cartStore';
import ProfileDropdown from './ProfileDropdown';
import './Navbar.css';

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();
  const items = useCartStore((state) => state.items);
  const itemCount = items.reduce((sum, item) => sum + item.quantity, 0);

  const isActive = (path: string) => location.pathname === path;

  return (
    <nav className="fixed top-0 w-full bg-white/95 backdrop-blur-md shadow-md z-50 navbar">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center">
            <Link to="/" className="flex items-center gap-2">
              <Music2 className="h-8 w-8 text-primary animate-bounce-slow" />
              <span className="text-2xl font-bold gradient-text">Party Central</span>
            </Link>
          </div>
          
          <div className="hidden md:flex items-center space-x-8">
            <Link 
              to="/" 
              className={`font-medium ${
                isActive('/') 
                  ? 'text-primary border-b-2 border-primary' 
                  : 'text-gray-700 hover:text-primary'
              }`}
            >
              Home
            </Link>
            <Link 
              to="/menu" 
              className={`font-medium ${
                isActive('/menu') 
                  ? 'text-primary border-b-2 border-primary' 
                  : 'text-gray-700 hover:text-primary'
              }`}
            >
              Menu
            </Link>
            <Link 
              to="/events" 
              className={`font-medium ${
                isActive('/events') 
                  ? 'text-primary border-b-2 border-primary' 
                  : 'text-gray-700 hover:text-primary'
              }`}
            >
              Events
            </Link>
            <Link 
              to="/rewards" 
              className={`font-medium ${
                isActive('/rewards') 
                  ? 'text-primary border-b-2 border-primary' 
                  : 'text-gray-700 hover:text-primary'
              }`}
            >
              Rewards
            </Link>
            <Link 
              to="/plan-your-party" 
              className={`font-medium ${
                isActive('/plan-your-party') 
                  ? 'text-primary border-b-2 border-primary' 
                  : 'text-gray-700 hover:text-primary'
              }`}
            >
              Plan Your Party
            </Link>
          </div>

          <div className="flex items-center space-x-4">
            <ProfileDropdown />
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

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden absolute top-16 left-0 right-0 bg-white/95 backdrop-blur-md shadow-lg">
          <div className="px-4 py-2 space-y-1">
            <Link 
              to="/" 
              className={`block px-4 py-2 rounded-lg text-base font-medium ${
                isActive('/') 
                  ? 'bg-primary text-white' 
                  : 'text-gray-700 hover:bg-gray-100'
              }`}
              onClick={() => setIsMenuOpen(false)}
            >
              Home
            </Link>
            <Link 
              to="/menu" 
              className={`block px-4 py-2 rounded-lg text-base font-medium ${
                isActive('/menu') 
                  ? 'bg-primary text-white' 
                  : 'text-gray-700 hover:bg-gray-100'
              }`}
              onClick={() => setIsMenuOpen(false)}
            >
              Menu
            </Link>
            <Link 
              to="/events" 
              className={`block px-4 py-2 rounded-lg text-base font-medium ${
                isActive('/events') 
                  ? 'bg-primary text-white' 
                  : 'text-gray-700 hover:bg-gray-100'
              }`}
              onClick={() => setIsMenuOpen(false)}
            >
              Events
            </Link>
            <Link 
              to="/rewards" 
              className={`block px-4 py-2 rounded-lg text-base font-medium ${
                isActive('/rewards') 
                  ? 'bg-primary text-white' 
                  : 'text-gray-700 hover:bg-gray-100'
              }`}
              onClick={() => setIsMenuOpen(false)}
            >
              Rewards
            </Link>
            <Link 
              to="/plan-your-party" 
              className={`block px-4 py-2 rounded-lg text-base font-medium ${
                isActive('/plan-your-party') 
                  ? 'bg-primary text-white' 
                  : 'text-gray-700 hover:bg-gray-100'
              }`}
              onClick={() => setIsMenuOpen(false)}
            >
              Plan Your Party
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
}