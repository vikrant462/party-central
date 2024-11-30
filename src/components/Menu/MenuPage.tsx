import { useState, useEffect } from 'react';
import CategoryBar from './CategoryBar';
import MenuSection from './MenuSection';
import { categories, menuItems } from './data/menuData';

export default function MenuPage() {
  const [activeCategory, setActiveCategory] = useState(categories[0].id);

  const handleCategoryClick = (categoryId: string) => {
    setActiveCategory(categoryId);
  };

  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      <div className="text-center mb-8">
        <h1 className="text-4xl font-bold gradient-text mb-4">Our Menu</h1>
        <p className="text-gray-600">Discover our delicious party treats and celebrations specials</p>
      </div>

      <CategoryBar
        categories={categories}
        activeCategory={activeCategory}
        onCategoryClick={handleCategoryClick}
      />

      <div className="space-y-12">
        {categories.map((category) => (
          <MenuSection
            key={category.id}
            category={category}
            items={menuItems.filter(item => item.category === category.id)}
            isActive={activeCategory === category.id}
          />
        ))}
      </div>
    </div>
  );
}