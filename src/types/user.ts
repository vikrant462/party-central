export interface User {
  id: string;
  name: string;
  email: string;
  role: 'admin' | 'customer';
  avatar?: string;
  points: number;
  preferences: {
    language: string;
    notifications: boolean;
    theme: 'light' | 'dark';
  };
}

export interface UserState {
  user: User | null;
  isAuthenticated: boolean;
  loading: boolean;
  error: string | null;
}

export interface Feedback {
  id: string;
  userId: string;
  rating: number;
  comment: string;
  images?: string[];
  createdAt: Date;
  status: 'pending' | 'resolved';
}

export interface OrderStatus {
  id: string;
  status: 'preparing' | 'ready' | 'delivered';
  timestamp: Date;
  description: string;
}