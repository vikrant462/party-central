import { useRef, useEffect } from 'react';
import { MenuItem, MenuCategory } from './types';
import MenuCard from './MenuCard';

interface MenuSectionProps {
  category: MenuCategory;
  items: MenuItem[];
  isActive: boolean;
}

export default function MenuSection({ category, items, isActive }: MenuSectionProps) {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (isActive && sectionRef.current) {
      sectionRef.current.scrollIntoView({ 
        behavior: 'smooth',
        block: 'start'
      });
    }
  }, [isActive]);

  return (
    <div ref={sectionRef} id={category.id} className="mb-12">
      <div className="mb-6">
        <h2 className="text-2xl font-bold gradient-text">{category.name}</h2>
        <p className="text-gray-600">{category.description}</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {items.map((item) => (
          <MenuCard key={item.id} item={item} />
        ))}
      </div>
    </div>
  );
}