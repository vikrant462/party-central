import { useState } from 'react';
import CategoryBar from './CategoryBar';
import MenuCard from './MenuCard';
import { categories, menuItems } from './data/menuData';

export default function MenuPage() {
  const [activeCategory, setActiveCategory] = useState(categories[0].id);

  const handleCategoryClick = (categoryId: string) => {
    setActiveCategory(categoryId);
  };

  const activeItems = menuItems.filter(item => item.category === activeCategory);
  const activeCategory_data = categories.find(cat => cat.id === activeCategory);

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

      {activeCategory_data && (
        <div className="mb-8">
          <h2 className="text-2xl font-bold gradient-text mb-2">{activeCategory_data.name}</h2>
          <p className="text-gray-600">{activeCategory_data.description}</p>
        </div>
      )}

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {activeItems.map((item) => (
          <MenuCard key={item.id} item={item} />
        ))}
      </div>
    </div>
  );
}