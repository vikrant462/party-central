import { Star, Quote } from 'lucide-react';
import { testimonials } from '../VenueGallery/venueData';

export default function Testimonials() {
  return (
    <section className="py-20 bg-gradient-to-r from-purple-50 to-pink-50">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold gradient-text mb-6">What Our Guests Say</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Read about the experiences of our valued customers
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-white rounded-xl shadow-md p-8 hover:shadow-lg transition-shadow relative"
            >
              <Quote className="absolute top-4 right-4 w-8 h-8 text-primary/10" />
              
              <div className="flex items-center gap-4 mb-6">
                <img
                  src={testimonial.avatar}
                  alt={testimonial.name}
                  className="w-16 h-16 rounded-full object-cover"
                />
                <div>
                  <h4 className="font-semibold text-lg">{testimonial.name}</h4>
                  <p className="text-sm text-gray-500">{testimonial.eventType}</p>
                </div>
              </div>

              <div className="flex gap-1 mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className="w-5 h-5"
                    fill={i < testimonial.rating ? '#FFD700' : 'none'}
                    stroke={i < testimonial.rating ? '#FFD700' : 'currentColor'}
                  />
                ))}
              </div>

              <p className="text-gray-600 italic relative z-10">
                "{testimonial.comment}"
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}