import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gradient-to-r from-purple-900/95 to-pink-900/95 text-white py-12">       
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          <div>
            <h3 className="text-2xl font-bold mb-4 text-[#f1f1f1]">Party Central</h3>
            <p className="text-gray-200">Your ultimate destination for food and celebrations!</p>
          </div>
          <div>
            <h3 className="text-2xl font-bold mb-4 text-[#f1f1f1]">Quick Links</h3>
            <ul className="space-y-2">
              <li><a href="#menu" className="text-gray-200 hover:text-[#a5b4fc]">Menu</a></li>
              <li><a href="/events" className="text-gray-200 hover:text-[#a5b4fc]">Events</a></li>
              <li><a href="/rewards" className="text-gray-200 hover:text-[#a5b4fc]">Rewards</a></li>
            </ul>
          </div>
          <div>
            <h3 className="text-2xl font-bold mb-4 text-[#f1f1f1]">Connect</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-200 hover:text-[#a5b4fc]">Instagram</a></li>
              <li><a href="#" className="text-gray-200 hover:text-[#a5b4fc]">Facebook</a></li>
              <li><a href="#" className="text-gray-200 hover:text-[#a5b4fc]">Twitter</a></li>
            </ul>
          </div>
        </div>
        <div className="text-center pt-8 border-t border-gray-800">
          <p className="text-gray-200">© 2024 Party Central. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
