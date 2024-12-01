import { ArrowRight, Star } from 'lucide-react';
import { useCartStore } from '../../store/cartStore';
import { toast } from 'react-hot-toast';

export default function SpecialOffers() {
  const addItem = useCartStore((state) => state.addItem);

  const specialOffers = [
    {
      id: 'party-pack-1',
      name: "Ultimate Party Pack",
      price: 39.99,
      description: "Perfect for 4 friends! Get 4 Party Burgers + 2 Festival Fries + 4 Party Shakes",
      image: "https://images.unsplash.com/photo-1594212699903-ec8a3eca50f5?auto=format&fit=crop&w=800&q=80",
      isSpecial: true,
      items: [
        { name: "Party Burger", quantity: 4 },
        { name: "Festival Fries", quantity: 2 },
        { name: "Party Shake", quantity: 4 }
      ]
    },
    {
      id: 'party-pack-2',
      name: "Birthday Special",
      price: 49.99,
      description: "1 Rainbow Cake + 6 Party Burgers + 3 Sides + 6 Beverages",
      image: "https://images.unsplash.com/photo-1464349095431-e9a21285b5f3?auto=format&fit=crop&w=800&q=80",
      isSpecial: true,
      items: [
        { name: "Rainbow Cake", quantity: 1 },
        { name: "Party Burger", quantity: 6 },
        { name: "Assorted Sides", quantity: 3 },
        { name: "Beverages", quantity: 6 }
      ]
    }
  ];

  const handleAddToCart = (offer: typeof specialOffers[0]) => {
    addItem({
      id: parseInt(offer.id.split('-')[2]),
      name: offer.name,
      price: offer.price,
      image: offer.image,
      isSpecial: true,
      items: offer.items,
      quantity: 1
    });
    toast.success(`${offer.name} added to cart!`);
  };

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold gradient-text mb-6">Special Offers</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Exclusive party packages for unforgettable celebrations
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {specialOffers.map((offer) => (
            <div
              key={offer.id}
              className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow"
            >
              <div className="relative h-64">
                <img
                  src={offer.image}
                  alt={offer.name}
                  className="w-full h-full object-cover"
                />
                <div className="absolute top-4 left-4 bg-primary text-white px-4 py-2 rounded-full text-sm font-semibold flex items-center gap-2">
                  <Star className="w-4 h-4" fill="currentColor" />
                  Special Offer
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-2xl font-bold mb-2">{offer.name}</h3>
                <p className="text-gray-600 mb-4">{offer.description}</p>
                <div className="mb-6">
                  <h4 className="font-semibold mb-2">Includes:</h4>
                  <ul className="space-y-1">
                    {offer.items.map((item, index) => (
                      <li key={index} className="text-gray-600">
                        • {item.quantity}x {item.name}
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-3xl font-bold text-primary">
                    ${offer.price}
                  </span>
                  <button
                    onClick={() => handleAddToCart(offer)}
                    className="flex items-center gap-2 bg-gradient-to-r from-primary to-primary-dark text-white px-6 py-3 rounded-full hover:opacity-90 transition-opacity"
                  >
                    Add to Cart
                    <ArrowRight className="w-5 h-5" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}