import { CheckCircle } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

export default function OrderSuccess() {
  const navigate = useNavigate();

  return (
    <div className="max-w-2xl mx-auto px-4 py-16 text-center">
      <CheckCircle className="w-16 h-16 text-green-500 mx-auto mb-4" />
      <h2 className="text-3xl font-bold mb-4">Order Placed Successfully!</h2>
      <p className="text-gray-600 mb-8">
        Thank you for your order. We'll send you an email confirmation with order details and tracking information.
      </p>
      <button
        onClick={() => navigate('/')}
        className="bg-red-600 text-white px-6 py-2 rounded-md hover:bg-red-700"
      >
        Return to Home
      </button>
    </div>
  );
}