import React from 'react';
import { ArrowRight } from 'lucide-react';
import { useCartStore } from '../../store/cartStore';
import { toast } from 'react-hot-toast';

const DealsSection: React.FC = () => {
  const addItem = useCartStore((state) => state.addItem);

  const partyPack = {
    id: 999, // Special ID for party pack
    name: "Party Pack Special",
    price: 39.99,
    image: "https://images.unsplash.com/photo-1594212699903-ec8a3eca50f5?auto=format&fit=crop&w=800&q=80",
    isSpecial: true,
    items: [
      { name: "Party Burger", quantity: 4 },
      { name: "Festival Fries", quantity: 2 },
      { name: "Party Shake", quantity: 4 }
    ]
  };

  const handleOrderPartyPack = () => {
    addItem(partyPack);
    toast.success('Party Pack added to cart!', {
      duration: 3000,
      position: 'top-center',
    });
  };

  return (
    <section id="deals" className="bg-gradient-to-r from-primary to-primary-dark py-16">
      <div className="max-w-7xl mx-auto px-4">
        <div className="bg-white/95 backdrop-blur-md rounded-2xl p-8 flex flex-col md:flex-row items-center justify-between">
          <div>
            <h3 className="text-2xl font-bold mb-4 gradient-text">Party Pack Special</h3>
            <p className="text-gray-600 mb-4">Perfect for 4 friends! Get 4 Party Burgers + 2 Festival Fries + 4 Party Shakes</p>
            <p className="text-3xl font-bold text-primary mb-4">$39.99</p>
            <button 
              onClick={handleOrderPartyPack}
              className="flex items-center gap-2 bg-gradient-to-r from-primary to-primary-dark text-white px-6 py-3 rounded-full hover:opacity-90 transition-all"
            >
              Order Now <ArrowRight className="h-5 w-5" />
            </button>
          </div>
          <img 
            src={partyPack.image}
            alt="Special Deal" 
            className="w-full md:w-1/2 h-64 object-cover rounded-2xl mt-6 md:mt-0 shadow-lg"
          />
        </div>
      </div>
    </section>
  );
};

export default DealsSection;