import { Link, useLocation } from 'react-router-dom';
import { LayoutDashboard, Menu, Package, BarChart } from 'lucide-react';

const menuItems = [
  {
    icon: LayoutDashboard,
    label: 'Dashboard',
    path: '/admin'
  },
  {
    icon: Menu,
    label: 'Menu Management',
    path: '/admin/menu'
  },
  {
    icon: Package,
    label: 'Orders',
    path: '/admin/orders'
  },
  {
    icon: BarChart,
    label: 'Analytics',
    path: '/admin/analytics'
  }
];

export default function AdminSidebar() {
  const location = useLocation();

  return (
    <div className="bg-white rounded-xl shadow-sm p-4">
      <h2 className="text-xl font-bold px-4 mb-6">Admin Panel</h2>
      <nav className="space-y-2">
        {menuItems.map((item) => {
          const Icon = item.icon;
          const isActive = location.pathname === item.path;

          return (
            <Link
              key={item.path}
              to={item.path}
              className={`flex items-center gap-3 px-4 py-2 rounded-lg transition-colors ${
                isActive
                  ? 'bg-primary text-white'
                  : 'text-gray-700 hover:bg-gray-100'
              }`}
            >
              <Icon className="w-5 h-5" />
              <span>{item.label}</span>
            </Link>
          );
        })}
      </nav>
    </div>
  );
}