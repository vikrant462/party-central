import { useCartStore } from '../../../store/cartStore';
import { Plus, Star } from 'lucide-react';

interface MenuItemProps {
  id: number;
  name: string;
  price: number;
  description: string;
  image: string;
}

export default function MenuItem({ id, name, price, description, image }: MenuItemProps) {
  const addItem = useCartStore((state) => state.addItem);

  return (
    <div className="menu-item bg-white rounded-xl shadow-md overflow-hidden">
      <div className="relative">
        <img 
          src={image} 
          alt={name} 
          className="w-full h-48 object-cover"
        />
        <div className="absolute top-2 right-2 bg-accent-yellow text-gray-900 px-2 py-1 rounded-full text-sm font-semibold flex items-center gap-1">
          <Star className="h-4 w-4" fill="currentColor" />
          4.5
        </div>
      </div>
      <div className="p-4">
        <div className="flex justify-between items-center mb-2">
          <h3 className="text-lg font-semibold">{name}</h3>
          <span className="text-primary font-bold">${price.toFixed(2)}</span>
        </div>
        <p className="text-gray-600 text-sm mb-4">{description}</p>
        <button 
          className="w-full bg-gradient-to-r from-primary to-primary-dark text-white py-2 rounded-full font-semibold hover:opacity-90 transition-opacity flex items-center justify-center gap-2"
          onClick={() => addItem({ id, name, price, image })}
        >
          <Plus className="h-5 w-5" />
          Add to Cart
        </button>
      </div>
    </div>
  );
}