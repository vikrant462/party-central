import { BarChart, DollarSign, Users, TrendingUp } from 'lucide-react';

export default function Analytics() {
  const stats = [
    {
      icon: DollarSign,
      label: 'Total Revenue',
      value: '$12,345',
      change: '+12.5%',
      positive: true
    },
    {
      icon: Users,
      label: 'Total Customers',
      value: '1,234',
      change: '+8.2%',
      positive: true
    },
    {
      icon: BarChart,
      label: 'Orders',
      value: '456',
      change: '-2.4%',
      positive: false
    },
    {
      icon: TrendingUp,
      label: 'Average Order',
      value: '$27.50',
      change: '+5.1%',
      positive: true
    }
  ];

  return (
    <div className="space-y-6">
      <h2 className="text-2xl font-bold gradient-text">Analytics Overview</h2>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {stats.map((stat, index) => {
          const Icon = stat.icon;
          return (
            <div
              key={index}
              className="bg-white p-6 rounded-xl shadow-sm"
            >
              <div className="flex items-center gap-4">
                <div className="p-3 bg-primary/10 rounded-lg">
                  <Icon className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <p className="text-sm text-gray-600">{stat.label}</p>
                  <p className="text-2xl font-bold">{stat.value}</p>
                  <p className={`text-sm ${
                    stat.positive ? 'text-green-600' : 'text-red-600'
                  }`}>
                    {stat.change}
                  </p>
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {/* Add more analytics components here */}
    </div>
  );
}