import { Music, Camera, Gift, Star, Users, Sparkles } from 'lucide-react';

const features = [
  {
    icon: Music,
    title: 'Professional DJ & Sound',
    description: 'State-of-the-art sound system with experienced DJs'
  },
  {
    icon: Camera,
    title: 'Professional Photography',
    description: 'Capture every moment with our expert photographers'
  },
  {
    icon: Gift,
    title: 'Custom Themes',
    description: 'Personalized decorations for your special event'
  },
  {
    icon: Star,
    title: 'Premium Service',
    description: 'Dedicated event coordinator for your celebration'
  },
  {
    icon: Users,
    title: 'Experienced Staff',
    description: 'Professional and friendly team at your service'
  },
  {
    icon: Sparkles,
    title: 'Special Effects',
    description: 'Add magic with our premium lighting and effects'
  }
];

export default function WhyChooseUs() {
  return (
    <div className="mt-16 bg-white/10 backdrop-blur-md rounded-2xl p-8">
      <h3 className="text-2xl font-bold text-white text-center mb-8">Why Choose Us?</h3>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {features.map((feature, index) => (
          <div
            key={index}
            className="bg-white/10 backdrop-blur-md rounded-xl p-6 hover:bg-white/20 transition-all duration-300"
          >
            <div className="flex items-center gap-4">
              <div className="p-3 bg-white/10 rounded-lg">
                <feature.icon className="h-6 w-6 text-white" />
              </div>
              <div>
                <h4 className="font-semibold text-white">{feature.title}</h4>
                <p className="text-sm text-white/80">{feature.description}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}