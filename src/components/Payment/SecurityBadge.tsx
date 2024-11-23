import { LucideIcon } from 'lucide-react';

interface SecurityBadgeProps {
  icon: LucideIcon;
  title: string;
  description: string;
}

export default function SecurityBadge({
  icon: Icon,
  title,
  description
}: SecurityBadgeProps) {
  return (
    <div className="flex items-center gap-3">
      <div className="p-2 bg-primary/10 rounded-lg">
        <Icon className="h-5 w-5 text-primary" />
      </div>
      <div>
        <h4 className="font-medium text-gray-900">{title}</h4>
        <p className="text-sm text-gray-500">{description}</p>
      </div>
    </div>
  );
}