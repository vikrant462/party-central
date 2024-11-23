import { useState, useRef, useEffect } from 'react';
import { Link } from 'react-router-dom';
import {
  User, Settings, Gift, Calendar, CreditCard, 
  Bell, HelpCircle, Users, LogOut, ChevronRight,
  Crown, Wallet, History, Heart, Star
} from 'lucide-react';

interface MenuItem {
  icon: typeof User;
  label: string;
  path?: string;
  onClick?: () => void;
  badge?: string;
}

export default function ProfileDropdown() {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const menuItems: MenuItem[][] = [
    [
      { 
        icon: User, 
        label: 'My Profile',
        path: '/profile',
        badge: 'VIP'
      },
      { 
        icon: Crown, 
        label: 'Party Points',
        path: '/rewards',
        badge: '2,450'
      }
    ],
    [
      { 
        icon: Calendar, 
        label: 'My Reservations',
        path: '/reservations'
      },
      { 
        icon: History, 
        label: 'Order History',
        path: '/orders'
      },
      { 
        icon: Heart, 
        label: 'Favorites',
        path: '/favorites'
      }
    ],
    [
      { 
        icon: Wallet, 
        label: 'Party Wallet',
        path: '/wallet',
        badge: '$45.50'
      },
      { 
        icon: CreditCard, 
        label: 'Payment Methods',
        path: '/payment-methods'
      }
    ],
    [
      { 
        icon: Bell, 
        label: 'Notifications',
        path: '/notifications',
        badge: '3'
      },
      { 
        icon: Settings, 
        label: 'Settings',
        path: '/settings'
      },
      { 
        icon: HelpCircle, 
        label: 'Help & Support',
        path: '/support'
      }
    ],
    [
      { 
        icon: Users, 
        label: 'Refer Friends',
        path: '/refer',
        badge: 'Earn $10'
      },
      { 
        icon: Star, 
        label: 'Rate Us',
        path: '/rate'
      },
      { 
        icon: LogOut, 
        label: 'Sign Out',
        onClick: () => console.log('Sign out clicked')
      }
    ]
  ];

  return (
    <div className="relative" ref={dropdownRef}>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="p-2 hover:bg-gray-100 rounded-full transition-colors duration-200"
      >
        <User className="h-6 w-6 text-gray-700" />
      </button>

      {isOpen && (
        <div className="absolute right-0 mt-2 w-80 bg-white rounded-xl shadow-xl border border-gray-100 py-2 z-50">
          {/* Profile Header */}
          <div className="px-4 py-3 border-b border-gray-100">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-full bg-gradient-to-r from-primary to-primary-dark flex items-center justify-center">
                <span className="text-white text-lg font-bold">JD</span>
              </div>
              <div>
                <h4 className="font-semibold text-gray-900">John Doe</h4>
                <p className="text-sm text-gray-500">john.doe@example.com</p>
              </div>
            </div>
          </div>

          {/* Menu Sections */}
          {menuItems.map((section, idx) => (
            <div key={idx} className="py-1">
              {section.map((item, itemIdx) => (
                item.path ? (
                  <Link
                    key={itemIdx}
                    to={item.path}
                    className="flex items-center justify-between px-4 py-2 hover:bg-gray-50 transition-colors duration-200"
                    onClick={() => setIsOpen(false)}
                  >
                    <div className="flex items-center gap-3">
                      <item.icon className="h-5 w-5 text-gray-500" />
                      <span className="text-gray-700">{item.label}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      {item.badge && (
                        <span className="text-xs px-2 py-1 rounded-full bg-primary/10 text-primary">
                          {item.badge}
                        </span>
                      )}
                      <ChevronRight className="h-4 w-4 text-gray-400" />
                    </div>
                  </Link>
                ) : (
                  <button
                    key={itemIdx}
                    onClick={() => {
                      item.onClick?.();
                      setIsOpen(false);
                    }}
                    className="w-full flex items-center justify-between px-4 py-2 hover:bg-gray-50 transition-colors duration-200"
                  >
                    <div className="flex items-center gap-3">
                      <item.icon className="h-5 w-5 text-gray-500" />
                      <span className="text-gray-700">{item.label}</span>
                    </div>
                    <ChevronRight className="h-4 w-4 text-gray-400" />
                  </button>
                )
              ))}
              {idx < menuItems.length - 1 && (
                <div className="my-1 border-b border-gray-100" />
              )}
            </div>
          ))}
        </div>
      )}
    </div>
  );
}