import { LucideIcon } from 'lucide-react';

interface EventTypeCardProps {
  type: string;
  theme: {
    icon: LucideIcon;
    title: string;
    description: string;
  };
  isSelected: boolean;
  onClick: () => void;
}

export default function EventTypeCard({ type, theme, isSelected, onClick }: EventTypeCardProps) {
  return (
    <button
      onClick={onClick}
      className={`w-full p-4 rounded-xl transition-all duration-300 ${
        isSelected
          ? 'bg-white text-gray-900 shadow-lg transform scale-105'
          : 'bg-white/10 text-white hover:bg-white/20'
      }`}
    >
      <div className="flex items-center gap-4">
        <theme.icon className={`h-6 w-6 ${
          isSelected ? 'text-primary' : 'text-white'
        }`} />
        <div className="text-left">
          <h3 className="font-semibold">{theme.title}</h3>
          <p className={`text-sm ${
            isSelected ? 'text-gray-600' : 'text-white/80'
          }`}>
            {theme.description}
          </p>
        </div>
      </div>
    </button>
  );
}