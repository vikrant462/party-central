import React from 'react';
import Hero from './Hero';
import MenuSection from './Menu/MenuSection';
import DealsSection from './DealsSection';
import LocationsSection from './LocationsSection';
import { menuItems } from '../Data/MenuItems';

const HomePage: React.FC = () => {
  return (
    <>
      <Hero />
      <MenuSection menuItems={menuItems} />
      <DealsSection />
      <LocationsSection />
    </>
  );
};

export default HomePage;
