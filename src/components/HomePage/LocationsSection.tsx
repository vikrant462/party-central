import React from 'react';
import { Clock, MapPin, Phone } from 'lucide-react';

interface CardProps {
  icon: React.ElementType;
  title: string;
  children: React.ReactNode;
}

const Card: React.FC<CardProps> = ({ icon: Icon, title, children }) => (
  <div className="bg-gradient-to-r from-pink-600/90 to-pink-900/90 p-8 rounded-2xl shadow-md hover:shadow-xl transition-shadow">
    <Icon className="h-8 w-8 text-white mb-4" />
    <h3 className="text-xl font-semibold text-white mb-2">{title}</h3>
    <div className="text-pink-100">{children}</div>
  </div>
);

const LocationsSection: React.FC = () => {
  return (
    <section id="locations" className="max-w-7xl mx-auto px-4 py-16">
      <h2 className="text-3xl font-bold text-center mb-12 bg-gradient-to-r from-pink-600/90 to-pink-900/90 text-transparent bg-clip-text"> Find Us </h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <Card icon={Clock} title="Party Hours">
          <p>Mon - Thu: 11AM - 11PM</p>
          <p>Fri - Sun: 11AM - 2AM</p>
        </Card>
        <Card icon={MapPin} title="Party Zone">
          <p>123 Party Avenue</p>
          <p>Celebration City, PC 12345</p>
        </Card>
        <Card icon={Phone} title="Get in Touch">
          <p>Phone: (555) 123-PARTY</p>
          <p>Email: party@central.com</p>
        </Card>
      </div>
    </section>
  );
};

export default LocationsSection;
