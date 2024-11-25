import { useState } from 'react';
import { MessageSquare, ThumbsUp, Star, Send } from 'lucide-react';
import RatingModal from './RatingModal';

export default function FeedbackPage() {
  const [isRatingModalOpen, setIsRatingModalOpen] = useState(false);
  const [feedback, setFeedback] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleRatingSubmit = (rating: number, feedback: string) => {
    console.log('Rating:', rating, 'Feedback:', feedback);
    // In a real app, you would send this to your API
    setSubmitted(true);
  };

  const handleFeedbackSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('General Feedback:', feedback);
    // In a real app, you would send this to your API
    setSubmitted(true);
    setFeedback('');
  };

  if (submitted) {
    return (
      <div className="min-h-screen bg-gray-50 py-16">
        <div className="max-w-2xl mx-auto px-4">
          <div className="text-center">
            <ThumbsUp className="h-16 w-16 text-primary mx-auto mb-4" />
            <h1 className="text-3xl font-bold gradient-text mb-4">Thank You!</h1>
            <p className="text-gray-600 mb-8">
              We appreciate your feedback. It helps us improve our services.
            </p>
            <button
              onClick={() => setSubmitted(false)}
              className="bg-primary text-white px-6 py-2 rounded-lg hover:opacity-90"
            >
              Submit Another Response
            </button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 py-16">
      <div className="max-w-4xl mx-auto px-4">
        <div className="text-center mb-12">
          <h1 className="text-3xl font-bold gradient-text mb-4">
            We Value Your Feedback
          </h1>
          <p className="text-gray-600">
            Help us improve your experience at Party Central
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          {/* Rate Us Card */}
          <div className="bg-white rounded-xl shadow-sm p-6 hover:shadow-md transition-shadow">
            <div className="flex items-center gap-4 mb-4">
              <div className="p-3 bg-primary/10 rounded-lg">
                <Star className="h-6 w-6 text-primary" />
              </div>
              <div>
                <h2 className="text-xl font-semibold">Rate Your Experience</h2>
                <p className="text-gray-600">Share your rating and review</p>
              </div>
            </div>
            <button
              onClick={() => setIsRatingModalOpen(true)}
              className="w-full py-3 bg-gradient-to-r from-primary to-primary-dark text-white rounded-lg font-medium hover:opacity-90"
            >
              Rate Now
            </button>
          </div>

          {/* General Feedback Card */}
          <div className="bg-white rounded-xl shadow-sm p-6 hover:shadow-md transition-shadow">
            <div className="flex items-center gap-4 mb-4">
              <div className="p-3 bg-primary/10 rounded-lg">
                <MessageSquare className="h-6 w-6 text-primary" />
              </div>
              <div>
                <h2 className="text-xl font-semibold">General Feedback</h2>
                <p className="text-gray-600">Share your suggestions with us</p>
              </div>
            </div>
            <form onSubmit={handleFeedbackSubmit}>
              <textarea
                value={feedback}
                onChange={(e) => setFeedback(e.target.value)}
                className="w-full h-32 p-3 mb-4 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent resize-none"
                placeholder="Your feedback helps us serve you better..."
              />
              <button
                type="submit"
                disabled={!feedback.trim()}
                className="w-full py-3 bg-gradient-to-r from-primary to-primary-dark text-white rounded-lg font-medium hover:opacity-90 disabled:opacity-50 flex items-center justify-center gap-2"
              >
                <Send className="h-5 w-5" />
                Submit Feedback
              </button>
            </form>
          </div>
        </div>

        {/* Contact Information */}
        <div className="text-center text-gray-600">
          <p>
            For immediate assistance, please contact us at{' '}
            <a href="tel:+1234567890" className="text-primary">
              (123) 456-7890
            </a>{' '}
            or email{' '}
            <a href="mailto:support@partycentral.com" className="text-primary">
              support@partycentral.com
            </a>
          </p>
        </div>
      </div>

      <RatingModal
        isOpen={isRatingModalOpen}
        onClose={() => setIsRatingModalOpen(false)}
        onSubmit={handleRatingSubmit}
      />
    </div>
  );
}