import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import MenuItem from './components/MenuItem';
import Cart from './components/Cart';
import Checkout from './components/Checkout';
import OrderSuccess from './components/OrderSuccess';
import Events from './components/Events';
import Rewards from './components/Rewards';
import { ArrowRight, Clock, MapPin, Phone } from 'lucide-react';

const menuItems = [
  {
    id: 1,
    name: "Party Burger",
    price: 8.99,
    description: "Double patty with special party sauce and crispy onions",
    image: "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?auto=format&fit=crop&w=800&q=80"
  },
  {
    id: 2,
    name: "Disco Chicken Wings",
    price: 7.99,
    description: "Crispy wings with our signature neon glow sauce",
    image: "https://images.unsplash.com/photo-1626082927389-6cd097cdc6ec?auto=format&fit=crop&w=800&q=80"
  },
  {
    id: 3,
    name: "Festival Fries",
    price: 5.99,
    description: "Loaded with cheese sauce and party confetti seasoning",
    image: "https://images.unsplash.com/photo-1573080496219-bb080dd4f877?auto=format&fit=crop&w=800&q=80"
  },
  {
    id: 4,
    name: "Party Shake",
    price: 4.99,
    description: "Color-changing shake with sparkle sprinkles",
    image: "https://images.unsplash.com/photo-1572490122747-3968b75cc699?auto=format&fit=crop&w=800&q=80"
  }
];

function HomePage() {
  return (
    <>
      <Hero />
      
      <section id="menu" className="max-w-7xl mx-auto px-4 py-16">
        <h2 className="text-3xl font-bold text-center mb-4 gradient-text">Party Food Menu</h2>
        <p className="text-center text-gray-600 mb-12">Fuel your celebration with our amazing party treats!</p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {menuItems.map((item) => (
            <MenuItem key={item.id} {...item} />
          ))}
        </div>
      </section>

      <section id="deals" className="bg-gradient-to-r from-primary to-primary-dark py-16">
        <div className="max-w-7xl mx-auto px-4">
          <div className="bg-white/95 backdrop-blur-md rounded-2xl p-8 flex flex-col md:flex-row items-center justify-between">
            <div>
              <h3 className="text-2xl font-bold mb-4 gradient-text">Party Pack Special</h3>
              <p className="text-gray-600 mb-4">Perfect for 4 friends! Get 4 Party Burgers + 2 Festival Fries + 4 Party Shakes</p>
              <p className="text-3xl font-bold text-primary mb-4">$39.99</p>
              <button className="flex items-center gap-2 bg-gradient-to-r from-primary to-primary-dark text-white px-6 py-3 rounded-full hover:opacity-90 transition-all">
                Order Now <ArrowRight className="h-5 w-5" />
              </button>
            </div>
            <img 
              src="https://images.unsplash.com/photo-1594212699903-ec8a3eca50f5?auto=format&fit=crop&w=800&q=80" 
              alt="Special Deal" 
              className="w-full md:w-1/2 h-64 object-cover rounded-2xl mt-6 md:mt-0 shadow-lg"
            />
          </div>
        </div>
      </section>

      <section id="locations" className="max-w-7xl mx-auto px-4 py-16">
        <h2 className="text-3xl font-bold text-center mb-12 gradient-text">Find Us</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-white p-8 rounded-2xl shadow-md hover:shadow-xl transition-shadow">
            <Clock className="h-8 w-8 text-primary mb-4" />
            <h3 className="text-xl font-semibold mb-2">Party Hours</h3>
            <p className="text-gray-600">Mon - Thu: 11AM - 11PM</p>
            <p className="text-gray-600">Fri - Sun: 11AM - 2AM</p>
          </div>
          <div className="bg-white p-8 rounded-2xl shadow-md hover:shadow-xl transition-shadow">
            <MapPin className="h-8 w-8 text-primary mb-4" />
            <h3 className="text-xl font-semibold mb-2">Party Zone</h3>
            <p className="text-gray-600">123 Party Avenue</p>
            <p className="text-gray-600">Celebration City, PC 12345</p>
          </div>
          <div className="bg-white p-8 rounded-2xl shadow-md hover:shadow-xl transition-shadow">
            <Phone className="h-8 w-8 text-primary mb-4" />
            <h3 className="text-xl font-semibold mb-2">Get in Touch</h3>
            <p className="text-gray-600">Phone: (555) 123-PARTY</p>
            <p className="text-gray-600">Email: party@central.com</p>
          </div>
        </div>
      </section>
    </>
  );
}

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-gray-50">
        <Navbar />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/checkout" element={<Checkout />} />
          <Route path="/order-success" element={<OrderSuccess />} />
          <Route path="/events" element={<Events />} />
          <Route path="/rewards" element={<Rewards />} />
        </Routes>
        <footer className="bg-gradient-to-r from-gray-900 to-gray-800 text-white py-12">
          <div className="max-w-7xl mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
              <div>
                <h3 className="text-xl font-bold mb-4">Party Central</h3>
                <p className="text-gray-400">Your ultimate destination for food and celebrations!</p>
              </div>
              <div>
                <h3 className="text-xl font-bold mb-4">Quick Links</h3>
                <ul className="space-y-2">
                  <li><a href="#menu" className="text-gray-400 hover:text-white">Menu</a></li>
                  <li><a href="/events" className="text-gray-400 hover:text-white">Events</a></li>
                  <li><a href="/rewards" className="text-gray-400 hover:text-white">Rewards</a></li>
                </ul>
              </div>
              <div>
                <h3 className="text-xl font-bold mb-4">Connect</h3>
                <ul className="space-y-2">
                  <li><a href="#" className="text-gray-400 hover:text-white">Instagram</a></li>
                  <li><a href="#" className="text-gray-400 hover:text-white">Facebook</a></li>
                  <li><a href="#" className="text-gray-400 hover:text-white">Twitter</a></li>
                </ul>
              </div>
            </div>
            <div className="text-center pt-8 border-t border-gray-800">
              <p className="text-gray-400">© 2024 Party Central. All rights reserved.</p>
            </div>
          </div>
        </footer>
      </div>
    </Router>
  );
}