interface SavedCardProps {
  last4: string;
  expiryMonth: string;
  expiryYear: string;
  brand: string;
  name: string;
}

export default function SavedCard({
  last4,
  expiryMonth,
  expiryYear,
  brand,
  name
}: SavedCardProps) {
  return (
    <label className="relative flex items-center">
      <input type="radio" name="card" className="hidden" />
      <div className="w-full p-4 border rounded-lg hover:border-primary cursor-pointer flex items-center gap-4">
        <img 
          src={`/card-brands/${brand}.svg`} 
          alt={brand}
          className="h-8 w-12 object-contain"
        />
        <div className="flex-1">
          <p className="font-medium text-gray-900">
            •••• •••• •••• {last4}
          </p>
          <p className="text-sm text-gray-500">
            Expires {expiryMonth}/{expiryYear}
          </p>
        </div>
        <div className="w-4 h-4 rounded-full border-2 border-gray-300">
          <div className="w-2 h-2 bg-primary rounded-full m-0.5 opacity-0 group-hover:opacity-100" />
        </div>
      </div>
    </label>
  );
}