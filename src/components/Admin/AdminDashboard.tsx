import { useState } from 'react';
import {
  Users,
  Calendar,
  DollarSign,
  TrendingUp,
  Package,
  Settings,
  Bell,
  ChevronRight,
} from 'lucide-react';

export default function AdminDashboard() {
  const [stats] = useState({
    totalOrders: 156,
    totalRevenue: 12580,
    activeEvents: 8,
    totalCustomers: 450,
  });

  const recentOrders = [
    { id: 1, customer: 'John Doe', amount: 89.99, status: 'Completed' },
    { id: 2, customer: 'Jane Smith', amount: 145.50, status: 'Processing' },
    { id: 3, customer: 'Mike Johnson', amount: 299.99, status: 'Pending' },
  ];

  const upcomingEvents = [
    { id: 1, name: 'Birthday Bash', date: '2024-03-25', guests: 50 },
    { id: 2, name: 'Corporate Event', date: '2024-03-28', guests: 100 },
    { id: 3, name: 'Wedding Reception', date: '2024-04-01', guests: 200 },
  ];

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold gradient-text">Admin Dashboard</h1>
          <p className="text-gray-600">Welcome back, Admin!</p>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          <StatCard
            title="Total Orders"
            value={stats.totalOrders}
            icon={Package}
            trend="+12.5%"
          />
          <StatCard
            title="Revenue"
            value={`$${stats.totalRevenue.toLocaleString()}`}
            icon={DollarSign}
            trend="+8.2%"
          />
          <StatCard
            title="Active Events"
            value={stats.activeEvents}
            icon={Calendar}
            trend="+5.1%"
          />
          <StatCard
            title="Total Customers"
            value={stats.totalCustomers}
            icon={Users}
            trend="+15.3%"
          />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Recent Orders */}
          <div className="bg-white rounded-xl shadow-sm p-6">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-xl font-semibold">Recent Orders</h2>
              <button className="text-primary hover:text-primary-dark">View all</button>
            </div>
            <div className="space-y-4">
              {recentOrders.map((order) => (
                <div
                  key={order.id}
                  className="flex items-center justify-between p-4 bg-gray-50 rounded-lg"
                >
                  <div>
                    <h3 className="font-medium">{order.customer}</h3>
                    <p className="text-sm text-gray-500">${order.amount}</p>
                  </div>
                  <div className="flex items-center gap-2">
                    <span
                      className={`px-3 py-1 rounded-full text-sm ${
                        order.status === 'Completed'
                          ? 'bg-green-100 text-green-800'
                          : order.status === 'Processing'
                          ? 'bg-blue-100 text-blue-800'
                          : 'bg-yellow-100 text-yellow-800'
                      }`}
                    >
                      {order.status}
                    </span>
                    <ChevronRight className="h-5 w-5 text-gray-400" />
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Upcoming Events */}
          <div className="bg-white rounded-xl shadow-sm p-6">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-xl font-semibold">Upcoming Events</h2>
              <button className="text-primary hover:text-primary-dark">View all</button>
            </div>
            <div className="space-y-4">
              {upcomingEvents.map((event) => (
                <div
                  key={event.id}
                  className="flex items-center justify-between p-4 bg-gray-50 rounded-lg"
                >
                  <div>
                    <h3 className="font-medium">{event.name}</h3>
                    <p className="text-sm text-gray-500">
                      {new Date(event.date).toLocaleDateString()} • {event.guests} guests
                    </p>
                  </div>
                  <ChevronRight className="h-5 w-5 text-gray-400" />
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Quick Actions */}
        <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-6">
          <QuickAction
            icon={Bell}
            title="Notifications"
            description="View and manage system notifications"
          />
          <QuickAction
            icon={Settings}
            title="Settings"
            description="Configure system preferences"
          />
          <QuickAction
            icon={TrendingUp}
            title="Analytics"
            description="View detailed performance metrics"
          />
        </div>
      </div>
    </div>
  );
}

function StatCard({ title, value, icon: Icon, trend }: any) {
  return (
    <div className="bg-white rounded-xl shadow-sm p-6">
      <div className="flex items-center justify-between">
        <div>
          <p className="text-sm text-gray-600">{title}</p>
          <p className="text-2xl font-semibold mt-1">{value}</p>
        </div>
        <div className="p-3 bg-primary/10 rounded-lg">
          <Icon className="h-6 w-6 text-primary" />
        </div>
      </div>
      <div className="mt-4 flex items-center text-sm">
        <span className="text-green-600 font-medium">{trend}</span>
        <span className="text-gray-600 ml-2">vs last month</span>
      </div>
    </div>
  );
}

function QuickAction({ icon: Icon, title, description }: any) {
  return (
    <button className="bg-white rounded-xl shadow-sm p-6 text-left hover:shadow-md transition-shadow">
      <div className="flex items-center gap-4">
        <div className="p-3 bg-primary/10 rounded-lg">
          <Icon className="h-6 w-6 text-primary" />
        </div>
        <div>
          <h3 className="font-medium">{title}</h3>
          <p className="text-sm text-gray-600">{description}</p>
        </div>
      </div>
    </button>
  );
}