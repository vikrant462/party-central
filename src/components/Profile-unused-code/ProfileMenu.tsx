import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useUserStore } from '../../store/userStore';
import {
  User, Settings, Gift, Calendar, CreditCard,
  Bell, HelpCircle, Users, LogOut, ChevronRight,
  Crown, Wallet, History, Heart
} from 'lucide-react';

export default function ProfileMenu() {
  const navigate = useNavigate();
  const user = useUserStore((state) => state.user);
  const logout = useUserStore((state) => state.logout);
  const [isOpen, setIsOpen] = useState(false);

  if (!user) return null;

  const menuItems = [
    // Admin-only items
    ...(user.role === 'admin' ? [
      {
        icon: Settings,
        label: 'Admin Dashboard',
        path: '/admin',
        description: 'Manage menu and orders'
      }
    ] : []),
    
    // Common items
    {
      icon: User,
      label: 'My Profile',
      path: '/profile',
      description: 'View and edit your profile'
    },
    {
      icon: Crown,
      label: 'Party Points',
      path: '/rewards',
      description: `${user.points} points available`
    },
    {
      icon: Calendar,
      label: 'My Events',
      path: '/events',
      description: 'View your upcoming events'
    },
    {
      icon: History,
      label: 'Order History',
      path: '/orders',
      description: 'Track your orders'
    },
    {
      icon: Heart,
      label: 'Favorites',
      path: '/favorites',
      description: 'Your favorite items'
    },
    {
      icon: Bell,
      label: 'Notifications',
      path: '/notifications',
      description: 'Manage your alerts'
    },
    {
      icon: HelpCircle,
      label: 'Support',
      path: '/support',
      description: '24/7 customer service'
    }
  ];

  return (
    <div className="relative">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center gap-2 px-4 py-2 rounded-full hover:bg-gray-100"
      >
        <div className="w-8 h-8 rounded-full bg-gradient-to-r from-primary to-primary-dark flex items-center justify-center">
          <span className="text-white text-sm font-bold">
            {user.name.charAt(0)}
          </span>
        </div>
        <span className="hidden md:block text-sm font-medium">
          {user.name}
        </span>
      </button>

      {isOpen && (
        <div className="absolute right-0 mt-2 w-72 bg-white rounded-xl shadow-xl border border-gray-100 overflow-hidden">
          <div className="p-4 border-b border-gray-100">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-full bg-gradient-to-r from-primary to-primary-dark flex items-center justify-center">
                <span className="text-white text-lg font-bold">
                  {user.name.charAt(0)}
                </span>
              </div>
              <div>
                <h4 className="font-semibold">{user.name}</h4>
                <p className="text-sm text-gray-500">{user.email}</p>
              </div>
            </div>
          </div>

          <div className="py-2">
            {menuItems.map((item, index) => (
              <button
                key={index}
                onClick={() => {
                  navigate(item.path);
                  setIsOpen(false);
                }}
                className="w-full px-4 py-2 hover:bg-gray-50 flex items-center gap-3"
              >
                <item.icon className="w-5 h-5 text-gray-500" />
                <div className="flex-1 text-left">
                  <div className="text-sm font-medium">{item.label}</div>
                  <div className="text-xs text-gray-500">
                    {item.description}
                  </div>
                </div>
                <ChevronRight className="w-4 h-4 text-gray-400" />
              </button>
            ))}

            <div className="border-t border-gray-100 mt-2">
              <button
                onClick={() => {
                  logout();
                  navigate('/login');
                  setIsOpen(false);
                }}
                className="w-full px-4 py-2 hover:bg-gray-50 flex items-center gap-3 text-red-600"
              >
                <LogOut className="w-5 h-5" />
                <span className="text-sm font-medium">Sign Out</span>
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}