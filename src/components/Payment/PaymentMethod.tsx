import { LucideIcon } from 'lucide-react';

interface PaymentMethodProps {
  icon: LucideIcon;
  title: string;
  subtitle: string;
  selected: boolean;
  onClick: () => void;
  children?: React.ReactNode;
}

export default function PaymentMethod({
  icon: Icon,
  title,
  subtitle,
  selected,
  onClick,
  children
}: PaymentMethodProps) {
  return (
    <div
      className={`bg-white rounded-xl shadow-sm overflow-hidden transition-all ${
        selected ? 'ring-2 ring-primary' : ''
      }`}
    >
      <button
        onClick={onClick}
        className="w-full p-6 flex items-center gap-4 hover:bg-gray-50"
      >
        <div className={`p-3 rounded-lg ${selected ? 'bg-primary text-white' : 'bg-gray-100'}`}>
          <Icon className="h-6 w-6" />
        </div>
        <div className="flex-1 text-left">
          <h3 className="font-semibold text-gray-900">{title}</h3>
          <p className="text-sm text-gray-500">{subtitle}</p>
        </div>
        <div className={`w-4 h-4 rounded-full border-2 ${
          selected 
            ? 'border-primary bg-primary' 
            : 'border-gray-300'
        }`}>
          {selected && (
            <div className="w-2 h-2 bg-white rounded-full m-0.5" />
          )}
        </div>
      </button>
      {children && <div className="px-6 pb-6">{children}</div>}
    </div>
  );
}