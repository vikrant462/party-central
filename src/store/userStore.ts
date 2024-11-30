import { create } from 'zustand';
import { User, UserState } from '../types/user';

interface AuthState extends UserState {
  login: (email: string, password: string) => Promise<void>;
  logout: () => void;
  setUser: (user: User) => void;
  updateUser: (user: User) => void;
}

export const useUserStore = create<AuthState>((set) => ({
  user: null,
  isAuthenticated: false,
  loading: false,
  error: null,

  login: async (email: string, password: string) => {
    set({ loading: true, error: null });
    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      // Demo credentials
      if (email === 'admin@party.com' && password === 'admin123') {
        const adminUser: User = {
          id: '1',
          name: 'Admin User',
          email: 'admin@party.com',
          role: 'admin',
          points: 0,
          preferences: {
            language: 'en',
            notifications: true,
            theme: 'light'
          }
        };
        set({ user: adminUser, isAuthenticated: true, loading: false });
      } else if (email === 'customer@example.com' && password === 'customer123') {
        const regularUser: User = {
          id: '2',
          name: 'Regular User',
          email: 'customer@example.com',
          role: 'customer',
          points: 150,
          preferences: {
            language: 'en',
            notifications: true,
            theme: 'light'
          }
        };
        set({ user: regularUser, isAuthenticated: true, loading: false });
      } else {
        throw new Error('Invalid credentials');
      }
    } catch (error) {
      set({ error: (error as Error).message, loading: false });
    }
  },

  logout: () => {
    set({ user: null, isAuthenticated: false });
  },

  setUser: (user) => set({ user, isAuthenticated: true }),
  
  updateUser: (user) => set({ user })
}));