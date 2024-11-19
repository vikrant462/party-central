import React from 'react';
import MenuItem from './MenuItem';

type MenuItemProps = {
  id: number;
  name: string;
  price: number;
  description: string;
  image: string;
};

type MenuSectionProps = {
  menuItems: MenuItemProps[];
};

const MenuSection: React.FC<MenuSectionProps> = ({ menuItems }) => {
  return (
    <section id="menu" className="max-w-7xl mx-auto px-4 py-16">
      <h2 className="text-3xl font-bold text-center mb-4 gradient-text">Party Food Menu</h2>
      <p className="text-center text-gray-600 mb-12">Fuel your celebration with our amazing party treats!</p>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {menuItems.map((item) => (
          <MenuItem key={item.id} {...item} />
        ))}
      </div>
    </section>
  );
};

export default MenuSection;
