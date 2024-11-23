import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { 
  CreditCard, Smartphone, Wallet, Shield, 
  Gift, Clock, ChevronRight, Check, Info
} from 'lucide-react';
import PaymentMethod from './PaymentMethod';
import SavedCard from './SavedCard';
import UPIOptions from './UPIOptions';
import SecurityBadge from './SecurityBadge';
import { useCartStore } from '../../store/cartStore';

const savedCards = [
  {
    id: 1,
    last4: '4242',
    expiryMonth: '12',
    expiryYear: '24',
    brand: 'visa',
    name: 'John Doe'
  },
  {
    id: 2,
    last4: '8888',
    expiryMonth: '08',
    expiryYear: '25',
    brand: 'mastercard',
    name: 'John Doe'
  }
];

export default function PaymentPage() {
  const navigate = useNavigate();
  const { total, clearCart } = useCartStore();
  const [selectedMethod, setSelectedMethod] = useState('saved-cards');
  const [loading, setLoading] = useState(false);
  const [promoCode, setPromoCode] = useState('');
  const [promoApplied, setPromoApplied] = useState(false);

  const handlePayment = async () => {
    setLoading(true);
    // Simulate payment processing
    setTimeout(() => {
      clearCart();
      navigate('/order-success');
    }, 2000);
  };

  const applyPromoCode = () => {
    if (promoCode === 'PARTY20') {
      setPromoApplied(true);
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-4xl mx-auto px-4">
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold gradient-text">Secure Payment</h1>
          <p className="text-gray-600 mt-2">Complete your order with our secure payment system</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Payment Methods Section */}
          <div className="md:col-span-2 space-y-6">
            {/* Saved Cards */}
            <PaymentMethod
              icon={CreditCard}
              title="Saved Cards"
              subtitle="Pay with your saved cards"
              selected={selectedMethod === 'saved-cards'}
              onClick={() => setSelectedMethod('saved-cards')}
            >
              {selectedMethod === 'saved-cards' && (
                <div className="mt-4 space-y-4">
                  {savedCards.map(card => (
                    <SavedCard key={card.id} {...card} />
                  ))}
                  <button className="w-full py-3 px-4 border-2 border-dashed border-gray-300 rounded-lg text-gray-600 hover:border-primary hover:text-primary flex items-center justify-center gap-2">
                    <CreditCard className="h-5 w-5" />
                    Add New Card
                  </button>
                </div>
              )}
            </PaymentMethod>

            {/* UPI Section */}
            <PaymentMethod
              icon={Smartphone}
              title="UPI Payment"
              subtitle="Pay using any UPI app"
              selected={selectedMethod === 'upi'}
              onClick={() => setSelectedMethod('upi')}
            >
              {selectedMethod === 'upi' && <UPIOptions />}
            </PaymentMethod>

            {/* Digital Wallet */}
            <PaymentMethod
              icon={Wallet}
              title="Digital Wallet"
              subtitle="Pay with your preferred wallet"
              selected={selectedMethod === 'wallet'}
              onClick={() => setSelectedMethod('wallet')}
            >
              {selectedMethod === 'wallet' && (
                <div className="mt-4 grid grid-cols-2 gap-4">
                  {['PayPal', 'Google Pay', 'Apple Pay', 'Amazon Pay'].map(wallet => (
                    <button
                      key={wallet}
                      className="py-3 px-4 border border-gray-200 rounded-lg hover:border-primary hover:bg-primary/5 flex items-center gap-2"
                    >
                      <img 
                        src={`/wallet-icons/${wallet.toLowerCase().replace(' ', '-')}.svg`} 
                        alt={wallet}
                        className="h-6 w-6"
                      />
                      {wallet}
                    </button>
                  ))}
                </div>
              )}
            </PaymentMethod>

            {/* Security Badges */}
            <div className="bg-white p-6 rounded-xl shadow-sm">
              <div className="flex items-center gap-4 flex-wrap">
                <SecurityBadge
                  icon={Shield}
                  title="Secure Payment"
                  description="256-bit SSL encryption"
                />
                <SecurityBadge
                  icon={Clock}
                  title="24/7 Support"
                  description="Always here to help"
                />
                <SecurityBadge
                  icon={Gift}
                  title="Rewards"
                  description="Earn points on payment"
                />
              </div>
            </div>
          </div>

          {/* Order Summary Section */}
          <div className="bg-white p-6 rounded-xl shadow-sm h-fit space-y-6">
            <h3 className="text-lg font-semibold">Order Summary</h3>
            
            <div className="space-y-3">
              <div className="flex justify-between text-gray-600">
                <span>Subtotal</span>
                <span>${total().toFixed(2)}</span>
              </div>
              <div className="flex justify-between text-gray-600">
                <span>Delivery Fee</span>
                <span>$5.00</span>
              </div>
              {promoApplied && (
                <div className="flex justify-between text-green-600">
                  <span>Promo (PARTY20)</span>
                  <span>-$5.00</span>
                </div>
              )}
              <div className="pt-3 border-t">
                <div className="flex justify-between font-semibold text-lg">
                  <span>Total</span>
                  <span>${(total() + 5 - (promoApplied ? 5 : 0)).toFixed(2)}</span>
                </div>
              </div>
            </div>

            {/* Promo Code */}
            <div className="space-y-2">
              <label className="text-sm text-gray-600">Have a promo code?</label>
              <div className="flex gap-2">
                <input
                  type="text"
                  value={promoCode}
                  onChange={(e) => setPromoCode(e.target.value)}
                  placeholder="Enter code"
                  className="flex-1 border rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-primary/50"
                />
                <button
                  onClick={applyPromoCode}
                  disabled={promoApplied}
                  className="px-4 py-2 bg-primary text-white rounded-lg hover:opacity-90 disabled:opacity-50"
                >
                  {promoApplied ? <Check className="h-5 w-5" /> : 'Apply'}
                </button>
              </div>
            </div>

            <button
              onClick={handlePayment}
              disabled={loading}
              className="w-full bg-gradient-to-r from-primary to-primary-dark text-white py-3 rounded-lg font-semibold hover:opacity-90 disabled:opacity-70 flex items-center justify-center gap-2"
            >
              {loading ? (
                <>Processing...</>
              ) : (
                <>
                  Pay Now
                  <ChevronRight className="h-5 w-5" />
                </>
              )}
            </button>

            <div className="flex items-center gap-2 text-sm text-gray-500">
              <Info className="h-4 w-4" />
              <span>Your payment information is secure and encrypted</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}