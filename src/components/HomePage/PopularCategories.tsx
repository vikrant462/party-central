import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { categories } from '../Menu/data/menuData';

export default function PopularCategories() {
  return (
    <section className="py-20 bg-gradient-to-r from-purple-50 to-pink-50">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold gradient-text mb-6">Popular Categories</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Explore our diverse menu selections
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {categories.slice(0, 6).map((category) => (
            <Link
              key={category.id}
              to={`/menu?category=${category.id}`}
              className="group relative h-64 rounded-2xl overflow-hidden"
            >
              <img
                src={category.image}
                alt={category.name}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-6">
                <h3 className="text-2xl font-bold text-white mb-2">{category.name}</h3>
                <p className="text-white/90 mb-4">{category.description}</p>
                <div className="flex items-center gap-2 text-white">
                  <span>View Menu</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-2 transition-transform" />
                </div>
              </div>
            </Link>
          ))}
        </div>

        <div className="text-center">
          <Link
            to="/menu"
            className="inline-flex items-center gap-2 bg-gradient-to-r from-primary to-primary-dark text-white px-8 py-3 rounded-full hover:opacity-90 transition-opacity"
          >
            View Full Menu
            <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </div>
    </section>
  );
}