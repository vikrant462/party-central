import { Camera, Image, Video, Download, Share2, Heart } from 'lucide-react';

const packages = [
  {
    title: 'Basic Package',
    price: '$299',
    features: [
      '2-hour photo session',
      '100 edited photos',
      'Online gallery',
      'Digital downloads'
    ]
  },
  {
    title: 'Premium Package',
    price: '$499',
    features: [
      '4-hour photo & video session',
      '200 edited photos',
      '5-minute highlight video',
      'Online gallery',
      'Digital downloads',
      'Same-day preview'
    ]
  },
  {
    title: 'Ultimate Package',
    price: '$799',
    features: [
      'Full-day coverage',
      'Unlimited photos',
      '10-minute highlight video',
      'Drone footage',
      'Online gallery',
      'Digital downloads',
      'Same-day preview',
      'Photo booth setup'
    ]
  }
];

export default function PhotoSession() {
  return (
    <div className="mt-16">
      <div className="text-center mb-12">
        <Camera className="h-12 w-12 text-white mx-auto mb-4" />
        <h3 className="text-2xl font-bold text-white mb-4">Professional Photography</h3>
        <p className="text-white/90">Capture your special moments with our premium photo packages</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {packages.map((pkg, index) => (
          <div
            key={index}
            className="bg-white/10 backdrop-blur-md rounded-xl p-6 hover:bg-white/20 transition-all duration-300"
          >
            <h4 className="text-xl font-bold text-white mb-2">{pkg.title}</h4>
            <p className="text-2xl font-bold text-white mb-4">{pkg.price}</p>
            <ul className="space-y-3">
              {pkg.features.map((feature, idx) => (
                <li key={idx} className="flex items-center gap-2 text-white/90">
                  <div className="h-1.5 w-1.5 rounded-full bg-white/90" />
                  {feature}
                </li>
              ))}
            </ul>
            <button className="mt-6 w-full py-3 rounded-xl bg-white/20 text-white hover:bg-white/30 transition-all duration-300">
              Select Package
            </button>
          </div>
        ))}
      </div>

      <div className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-4">
        <div className="bg-white/10 backdrop-blur-md rounded-xl p-4 text-center">
          <Image className="h-6 w-6 text-white mx-auto mb-2" />
          <p className="text-white">High Resolution</p>
        </div>
        <div className="bg-white/10 backdrop-blur-md rounded-xl p-4 text-center">
          <Video className="h-6 w-6 text-white mx-auto mb-2" />
          <p className="text-white">4K Video</p>
        </div>
        <div className="bg-white/10 backdrop-blur-md rounded-xl p-4 text-center">
          <Download className="h-6 w-6 text-white mx-auto mb-2" />
          <p className="text-white">Quick Delivery</p>
        </div>
        <div className="bg-white/10 backdrop-blur-md rounded-xl p-4 text-center">
          <Share2 className="h-6 w-6 text-white mx-auto mb-2" />
          <p className="text-white">Easy Sharing</p>
        </div>
      </div>
    </div>
  );
}