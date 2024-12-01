import React from 'react';
import Hero from './Hero';
import WelcomeSection from './WelcomeSection';
import FeaturedVenues from './FeaturedVenues';
import PopularCategories from './PopularCategories';
import SpecialOffers from './SpecialOffers';
import Testimonials from './Testimonials';
import CallToAction from './CallToAction';

const HomePage: React.FC = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Hero />
      <WelcomeSection />
      <FeaturedVenues />
      <PopularCategories />
      <SpecialOffers />
      <Testimonials />
      <CallToAction />
    </div>
  );
};

export default HomePage;