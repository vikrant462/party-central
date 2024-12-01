import { Utensils, Music, Users, Star } from 'lucide-react';

const features = [
  {
    icon: Utensils,
    title: 'Gourmet Cuisine',
    description: 'Expertly crafted dishes for every palate'
  },
  {
    icon: Music,
    title: 'Live Entertainment',
    description: 'Vibrant music and performances'
  },
  {
    icon: Users,
    title: 'Perfect for Groups',
    description: 'Spacious venues for any gathering'
  },
  {
    icon: Star,
    title: 'Premium Service',
    description: 'Dedicated staff at your service'
  }
];

export default function WelcomeSection() {
  return (
    <section className="py-20 bg-gradient-to-r from-purple-50 to-pink-50">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold gradient-text mb-6">Welcome to Party Central</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Where extraordinary celebrations come to life. Experience the perfect blend of 
            exceptional cuisine, stunning venues, and unforgettable moments.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div 
              key={index}
              className="bg-white rounded-xl p-6 shadow-md hover:shadow-lg transition-shadow"
            >
              <div className="flex items-center gap-4 mb-4">
                <div className="p-3 bg-gradient-to-r from-primary/10 to-primary-dark/10 rounded-lg">
                  <feature.icon className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-xl font-semibold">{feature.title}</h3>
              </div>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}