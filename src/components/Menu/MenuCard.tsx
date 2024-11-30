import { Flame, Leaf } from 'lucide-react';
import { MenuItem } from './types';
import { useCartStore } from '../../store/cartStore';
import { toast } from 'react-hot-toast';

interface MenuCardProps {
  item: MenuItem;
}

export default function MenuCard({ item }: MenuCardProps) {
  const addItem = useCartStore((state) => state.addItem);

  const handleAddToCart = () => {
    if (item.isSpecial) {
      addItem({
        id: item.id,
        name: item.name,
        price: item.price,
        image: item.image,
        isSpecial: true,
        quantity: 1
      });
    } else {
      addItem({
        id: item.id,
        name: item.name,
        price: item.price,
        image: item.image,
        quantity: 1
      });
    }
    toast.success(`${item.name} added to cart!`);
  };

  return (
    <div className="bg-white rounded-xl shadow-md overflow-hidden transform transition-all duration-300 hover:shadow-xl hover:scale-[1.02]">
      <div className="relative">
        <img 
          src={item.image} 
          alt={item.name} 
          className="w-full h-48 object-cover"
        />
        <div className="absolute top-4 right-4 flex gap-2">
          {item.spiceLevel && (
            <div className="bg-red-500 text-white px-2 py-1 rounded-full text-xs font-medium flex items-center gap-1">
              <Flame className="h-3 w-3" />
              {Array(item.spiceLevel).fill('🌶️').join('')}
            </div>
          )}
          {item.isVegetarian && (
            <div className="bg-green-500 text-white px-2 py-1 rounded-full text-xs font-medium flex items-center gap-1">
              <Leaf className="h-3 w-3" />
              Veg
            </div>
          )}
        </div>
        {item.isSpecial && (
          <div className="absolute top-4 left-4 bg-primary text-white px-3 py-1 rounded-full text-xs font-medium">
            Special
          </div>
        )}
      </div>

      <div className="p-4">
        <div className="flex justify-between items-start mb-2">
          <div>
            <h3 className="font-semibold text-lg">{item.name}</h3>
            <p className="text-sm text-gray-600 mb-2">{item.description}</p>
          </div>
          <span className="font-bold text-primary">${item.price.toFixed(2)}</span>
        </div>

        {item.calories && (
          <p className="text-xs text-gray-500 mb-4">{item.calories} calories</p>
        )}

        <button
          onClick={handleAddToCart}
          className="w-full bg-gradient-to-r from-primary to-primary-dark text-white py-2 rounded-lg font-medium hover:opacity-90 transition-opacity flex items-center justify-center gap-2"
        >
          Add to Cart
        </button>
      </div>
    </div>
  );
}