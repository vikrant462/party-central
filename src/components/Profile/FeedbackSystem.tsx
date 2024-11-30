import { useState } from 'react';
import { Star, Upload, Send, MessageSquare } from 'lucide-react';
import { Feedback } from '../../types/user';

export default function FeedbackSystem() {
  const [rating, setRating] = useState(0);
  const [comment, setComment] = useState('');
  const [images, setImages] = useState<File[]>([]);
  const [feedback, setFeedback] = useState<Feedback[]>([]);
  const [chatOpen, setChatOpen] = useState(false);
  const [message, setMessage] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In a real app, this would make an API call
    const newFeedback: Feedback = {
      id: Math.random().toString(),
      userId: '1',
      rating,
      comment,
      images: images.map(URL.createObjectURL),
      createdAt: new Date(),
      status: 'pending'
    };
    setFeedback([newFeedback, ...feedback]);
    setRating(0);
    setComment('');
    setImages([]);
  };

  const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      setImages([...images, ...Array.from(e.target.files)]);
    }
  };

  return (
    <div className="max-w-7xl mx-auto p-8">
      <h2 className="text-2xl font-bold mb-8 gradient-text">Feedback & Support</h2>

      <div className="grid md:grid-cols-2 gap-8">
        {/* Feedback Form */}
        <div className="bg-white rounded-xl shadow-sm p-6">
          <h3 className="text-xl font-semibold mb-6">Share Your Experience</h3>
          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Rating */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Rating
              </label>
              <div className="flex gap-2">
                {[1, 2, 3, 4, 5].map((star) => (
                  <button
                    key={star}
                    type="button"
                    onClick={() => setRating(star)}
                    className={`p-1 rounded-full transition-colors ${
                      rating >= star ? 'text-yellow-400' : 'text-gray-300'
                    }`}
                  >
                    <Star className="w-8 h-8" fill={rating >= star ? 'currentColor' : 'none'} />
                  </button>
                ))}
              </div>
            </div>

            {/* Comment */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Your Feedback
              </label>
              <textarea
                value={comment}
                onChange={(e) => setComment(e.target.value)}
                rows={4}
                className="w-full border rounded-lg p-3 focus:ring-2 focus:ring-primary"
                placeholder="Tell us about your experience..."
              />
            </div>

            {/* Image Upload */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Add Photos
              </label>
              <div className="flex flex-wrap gap-4">
                {images.map((image, index) => (
                  <div key={index} className="relative">
                    <img
                      src={URL.createObjectURL(image)}
                      alt={`Upload ${index + 1}`}
                      className="w-20 h-20 object-cover rounded-lg"
                    />
                    <button
                      type="button"
                      onClick={() => setImages(images.filter((_, i) => i !== index))}
                      className="absolute -top-2 -right-2 bg-red-500 text-white rounded-full p-1"
                    >
                      ×
                    </button>
                  </div>
                ))}
                <label className="w-20 h-20 border-2 border-dashed rounded-lg flex items-center justify-center cursor-pointer hover:border-primary">
                  <Upload className="w-6 h-6 text-gray-400" />
                  <input
                    type="file"
                    multiple
                    accept="image/*"
                    className="hidden"
                    onChange={handleImageUpload}
                  />
                </label>
              </div>
            </div>

            <button
              type="submit"
              className="w-full bg-primary text-white py-3 rounded-lg hover:opacity-90"
            >
              Submit Feedback
            </button>
          </form>
        </div>

        {/* Live Chat */}
        <div className="bg-white rounded-xl shadow-sm p-6">
          <h3 className="text-xl font-semibold mb-6">Live Support</h3>
          
          {chatOpen ? (
            <div className="h-[400px] flex flex-col">
              <div className="flex-1 border rounded-lg p-4 mb-4 overflow-y-auto">
                {/* Chat messages would go here */}
                <div className="text-center text-gray-500">
                  Chat with our support team
                </div>
              </div>
              
              <div className="flex gap-2">
                <input
                  type="text"
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  className="flex-1 border rounded-lg px-4 py-2"
                  placeholder="Type your message..."
                />
                <button
                  className="bg-primary text-white p-2 rounded-lg hover:opacity-90"
                >
                  <Send className="w-5 h-5" />
                </button>
              </div>
            </div>
          ) : (
            <button
              onClick={() => setChatOpen(true)}
              className="w-full flex items-center justify-center gap-2 bg-primary text-white py-3 rounded-lg hover:opacity-90"
            >
              <MessageSquare className="w-5 h-5" />
              Start Chat
            </button>
          )}
        </div>
      </div>

      {/* Previous Feedback */}
      {feedback.length > 0 && (
        <div className="mt-8">
          <h3 className="text-xl font-semibold mb-6">Your Previous Feedback</h3>
          <div className="space-y-4">
            {feedback.map((item) => (
              <div
                key={item.id}
                className="bg-white rounded-xl shadow-sm p-6"
              >
                <div className="flex justify-between items-start mb-4">
                  <div className="flex gap-1">
                    {[1, 2, 3, 4, 5].map((star) => (
                      <Star
                        key={star}
                        className="w-5 h-5"
                        fill={item.rating >= star ? '#FBBF24' : 'none'}
                        stroke={item.rating >= star ? '#FBBF24' : 'currentColor'}
                      />
                    ))}
                  </div>
                  <span className="text-sm text-gray-500">
                    {new Date(item.createdAt).toLocaleDateString()}
                  </span>
                </div>
                <p className="text-gray-700 mb-4">{item.comment}</p>
                {item.images && item.images.length > 0 && (
                  <div className="flex gap-2">
                    {item.images.map((image, index) => (
                      <img
                        key={index}
                        src={image}
                        alt={`Feedback ${index + 1}`}
                        className="w-20 h-20 object-cover rounded-lg"
                      />
                    ))}
                  </div>
                )}
                <div className="mt-4 flex items-center gap-2">
                  <div
                    className={`px-2 py-1 rounded-full text-sm ${
                      item.status === 'resolved'
                        ? 'bg-green-100 text-green-800'
                        : 'bg-yellow-100 text-yellow-800'
                    }`}
                  >
                    {item.status}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}