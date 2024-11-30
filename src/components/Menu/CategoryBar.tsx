import { useRef } from 'react';
import { MenuCategory } from './types';
import { ChevronLeft, ChevronRight } from 'lucide-react';

interface CategoryBarProps {
  categories: MenuCategory[];
  activeCategory: string;
  onCategoryClick: (categoryId: string) => void;
}

export default function CategoryBar({ 
  categories, 
  activeCategory, 
  onCategoryClick 
}: CategoryBarProps) {
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: 'left' | 'right') => {
    if (scrollContainerRef.current) {
      const scrollAmount = 200;
      scrollContainerRef.current.scrollBy({
        left: direction === 'left' ? -scrollAmount : scrollAmount,
        behavior: 'smooth'
      });
    }
  };

  return (
    <div className="relative bg-white shadow-md rounded-lg p-2 mb-8">
      <button
        onClick={() => scroll('left')}
        className="absolute left-0 top-1/2 -translate-y-1/2 bg-white/90 p-2 rounded-full shadow-md z-10 hover:bg-gray-50"
      >
        <ChevronLeft className="h-5 w-5 text-gray-600" />
      </button>

      <div
        ref={scrollContainerRef}
        className="overflow-x-auto scrollbar-hide flex gap-6 px-8 py-4"
        style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
      >
        {categories.map((category) => (
          <button
            key={category.id}
            onClick={() => onCategoryClick(category.id)}
            className={`flex flex-col items-center min-w-[120px] transition-all`}
          >
            <div
              className={`w-20 h-20 rounded-full overflow-hidden mb-3 ring-4 transition-all ${
                activeCategory === category.id
                  ? 'ring-primary scale-110'
                  : 'ring-gray-100 hover:ring-primary/50'
              }`}
            >
              <img
                src={category.image}
                alt={category.name}
                className="w-full h-full object-cover"
              />
            </div>
            <span className={`text-sm font-medium whitespace-nowrap ${
              activeCategory === category.id ? 'text-primary' : 'text-gray-700'
            }`}>
              {category.name}
            </span>
          </button>
        ))}
      </div>

      <button
        onClick={() => scroll('right')}
        className="absolute right-0 top-1/2 -translate-y-1/2 bg-white/90 p-2 rounded-full shadow-md z-10 hover:bg-gray-50"
      >
        <ChevronRight className="h-5 w-5 text-gray-600" />
      </button>
    </div>
  );
}