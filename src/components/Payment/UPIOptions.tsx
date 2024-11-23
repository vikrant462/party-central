import { QrCode } from 'lucide-react';

const upiApps = [
  { name: 'Google Pay', icon: '/upi-icons/gpay.svg' },
  { name: 'PhonePe', icon: '/upi-icons/phonepe.svg' },
  { name: 'Paytm', icon: '/upi-icons/paytm.svg' },
  { name: 'BHIM', icon: '/upi-icons/bhim.svg' }
];

export default function UPIOptions() {
  return (
    <div className="mt-4 space-y-6">
      <div className="grid grid-cols-2 gap-4">
        {upiApps.map(app => (
          <button
            key={app.name}
            className="py-3 px-4 border border-gray-200 rounded-lg hover:border-primary hover:bg-primary/5 flex items-center gap-2"
          >
            <img src={app.icon} alt={app.name} className="h-6 w-6" />
            {app.name}
          </button>
        ))}
      </div>

      <div className="border-t pt-4">
        <div className="flex items-center gap-4">
          <QrCode className="h-6 w-6 text-gray-500" />
          <div>
            <h4 className="font-medium">Scan QR Code</h4>
            <p className="text-sm text-gray-500">Pay using any UPI app</p>
          </div>
        </div>
        <div className="mt-4 flex justify-center">
          <div className="bg-white p-4 rounded-xl border">
            {/* Placeholder for QR code */}
            <div className="w-48 h-48 bg-gray-100 rounded-lg flex items-center justify-center">
              <span className="text-sm text-gray-500">QR Code</span>
            </div>
          </div>
        </div>
      </div>

      <div className="border-t pt-4">
        <label className="block text-sm text-gray-600 mb-2">
          Or enter UPI ID directly
        </label>
        <div className="flex gap-2">
          <input
            type="text"
            placeholder="username@upi"
            className="flex-1 border rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-primary/50"
          />
          <button className="px-4 py-2 bg-primary text-white rounded-lg hover:opacity-90">
            Verify
          </button>
        </div>
      </div>
    </div>
  );
}