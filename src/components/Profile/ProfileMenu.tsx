import { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { useAuthStore } from '../../store/authStore';
import {
  User, Settings, Gift, Calendar, CreditCard,
  Bell, HelpCircle, Users, LogOut, ChevronRight,
  Crown, Wallet, History, Heart, Star, MessageSquare,
  LayoutDashboard, Package
} from 'lucide-react';

export default function ProfileMenu() {
  const navigate = useNavigate();
  const { user, logout } = useAuthStore();
  const [isOpen, setIsOpen] = useState(false);

  if (!user) return null;

  const menuItems = [
    // Admin Section
    ...(user.role === 'admin' ? [
      [
        {
          icon: LayoutDashboard,
          label: 'Admin Dashboard',
          path: '/admin',
          description: 'Manage store and orders',
          badge: 'Admin'
        }
      ]
    ] : []),

    // Orders & Tracking
    [
      {
        icon: Package,
        label: 'Track Orders',
        path: '/track-orders',
        description: 'View and track your orders',
        badge: '2 Active'
      }
    ],

    // Profile & Points
    [
      {
        icon: User,
        label: 'My Profile',
        path: '/profile',
        description: 'View and edit profile'
      },
      {
        icon: Crown,
        label: 'Party Points',
        path: '/rewards',
        description: '2,450 points available'
      }
    ],

    // Orders & Events
    [
      {
        icon: Calendar,
        label: 'My Events',
        path: '/events',
        description: 'Upcoming party events'
      },
      {
        icon: History,
        label: 'Order History',
        path: '/orders',
        description: 'Past orders and reviews'
      }
    ],

    // Support & Settings
    [
      {
        icon: MessageSquare,
        label: 'Feedback',
        path: '/feedback',
        description: 'Share your experience'
      },
      {
        icon: Bell,
        label: 'Notifications',
        path: '/notifications',
        description: '3 new updates',
        badge: '3'
      },
      {
        icon: Settings,
        label: 'Settings',
        path: '/settings',
        description: 'Preferences and account'
      }
    ],

    // Additional Options
    [
      {
        icon: Users,
        label: 'Refer Friends',
        path: '/refer',
        description: 'Earn rewards',
        badge: 'Earn $10'
      },
      {
        icon: LogOut,
        label: 'Sign Out',
        onClick: () => {
          logout();
          navigate('/login');
        },
        description: 'Logout from account'
      }
    ]
  ];

  return (
    <div className="bg-white rounded-xl shadow-sm p-4">
      {/* User Profile Header */}
      <div className="flex items-center gap-4 mb-6 p-4">
        <div className="w-12 h-12 rounded-full bg-gradient-to-r from-primary to-primary-dark flex items-center justify-center">
          <span className="text-white text-lg font-bold">
            {user.name.charAt(0).toUpperCase()}
          </span>
        </div>
        <div>
          <h3 className="font-semibold text-gray-900">{user.name}</h3>
          <p className="text-sm text-gray-500">{user.email}</p>
        </div>
      </div>

      {/* Menu Items */}
      <nav className="space-y-1">
        {menuItems.map((section, sectionIndex) => (
          <div key={sectionIndex}>
            {section.map((item, itemIndex) => (
              item.onClick ? (
                <button
                  key={itemIndex}
                  onClick={item.onClick}
                  className="w-full flex items-center justify-between p-3 rounded-lg hover:bg-gray-50 transition-colors"
                >
                  <div className="flex items-center gap-3">
                    <div className="p-2 rounded-lg bg-gray-100">
                      <item.icon className="w-5 h-5 text-gray-600" />
                    </div>
                    <div>
                      <span className="font-medium text-gray-900">{item.label}</span>
                      <p className="text-sm text-gray-500">{item.description}</p>
                    </div>
                  </div>
                  <ChevronRight className="w-5 h-5 text-gray-400" />
                </button>
              ) : (
                <Link
                  key={itemIndex}
                  to={item.path!}
                  className="flex items-center justify-between p-3 rounded-lg hover:bg-gray-50 transition-colors"
                >
                  <div className="flex items-center gap-3">
                    <div className="p-2 rounded-lg bg-gray-100">
                      <item.icon className="w-5 h-5 text-gray-600" />
                    </div>
                    <div>
                      <span className="font-medium text-gray-900">{item.label}</span>
                      <p className="text-sm text-gray-500">{item.description}</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-2">
                    {item.badge && (
                      <span className="px-2 py-1 text-xs rounded-full bg-primary/10 text-primary">
                        {item.badge}
                      </span>
                    )}
                    <ChevronRight className="w-5 h-5 text-gray-400" />
                  </div>
                </Link>
              )
            ))}
            {sectionIndex < menuItems.length - 1 && (
              <div className="my-2 border-t border-gray-100" />
            )}
          </div>
        ))}
      </nav>
    </div>
  );
}