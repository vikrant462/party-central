import { useState } from 'react';
import { ChevronLeft, ChevronRight, Play } from 'lucide-react';
import { venues } from '../VenueGallery/venueData';
import VideoModal from '../VenueGallery/VideoModal';

export default function FeaturedVenues() {
  const [activeVenue, setActiveVenue] = useState(0);
  const [isVideoModalOpen, setIsVideoModalOpen] = useState(false);

  const nextVenue = () => {
    setActiveVenue((prev) => (prev + 1) % venues.length);
  };

  const prevVenue = () => {
    setActiveVenue((prev) => (prev - 1 + venues.length) % venues.length);
  };

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold gradient-text mb-6">Our Stunning Venues</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Discover the perfect space for your next celebration
          </p>
        </div>

        <div className="relative mb-12 group">
          <div className="relative h-[600px] rounded-2xl overflow-hidden">
            <img
              src={venues[activeVenue].image}
              alt={venues[activeVenue].name}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
            
            {venues[activeVenue].videoUrl && (
              <button
                onClick={() => setIsVideoModalOpen(true)}
                className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-white/25 hover:bg-white/40 backdrop-blur-sm p-6 rounded-full transition-all"
              >
                <Play className="w-12 h-12 text-white" fill="white" />
              </button>
            )}

            <div className="absolute bottom-0 left-0 right-0 p-8">
              <h3 className="text-3xl font-bold text-white mb-2">
                {venues[activeVenue].name}
              </h3>
              <p className="text-white/90 mb-4">{venues[activeVenue].description}</p>
              <div className="flex flex-wrap gap-4">
                {venues[activeVenue].features.map((feature, index) => (
                  <span
                    key={index}
                    className="px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full text-white text-sm"
                  >
                    {feature}
                  </span>
                ))}
              </div>
            </div>
          </div>

          <button
            onClick={prevVenue}
            className="absolute left-4 top-1/2 -translate-y-1/2 p-2 bg-white/10 hover:bg-white/20 backdrop-blur-sm rounded-full text-white opacity-0 group-hover:opacity-100 transition-opacity"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>
          <button
            onClick={nextVenue}
            className="absolute right-4 top-1/2 -translate-y-1/2 p-2 bg-white/10 hover:bg-white/20 backdrop-blur-sm rounded-full text-white opacity-0 group-hover:opacity-100 transition-opacity"
          >
            <ChevronRight className="w-6 h-6" />
          </button>
        </div>

        <div className="flex gap-4 overflow-x-auto pb-4 mt-8">
          {venues.map((venue, index) => (
            <button
              key={index}
              onClick={() => setActiveVenue(index)}
              className={`flex-shrink-0 relative rounded-lg overflow-hidden ${
                activeVenue === index ? 'ring-4 ring-primary' : ''
              }`}
            >
              <img
                src={venue.image}
                alt={venue.name}
                className="w-32 h-24 object-cover"
              />
              <div className="absolute inset-0 bg-black/25" />
            </button>
          ))}
        </div>

        <VideoModal
          isOpen={isVideoModalOpen}
          onClose={() => setIsVideoModalOpen(false)}
          videoUrl={venues[activeVenue].videoUrl}
        />
      </div>
    </section>
  );
}