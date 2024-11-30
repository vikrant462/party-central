import { useAuthStore } from '../store/authStore';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-hot-toast';
import api from '../utils/api';
import { connectSocket, disconnectSocket } from '../utils/socket';

export const useAuth = () => {
  const { setAuth, logout: storeLogout } = useAuthStore();
  const navigate = useNavigate();

  const login = async (email: string, password: string) => {
    try {
      const response = await api.post('/auth/login', { email, password });
      const { user, token } = response.data;
      
      setAuth(user, token);
      connectSocket(token);
      
      toast.success('Welcome back!');
      navigate('/');
    } catch (error) {
      console.error('Login error:', error);
      throw error;
    }
  };

  const logout = () => {
    storeLogout();
    disconnectSocket();
    navigate('/login');
    toast.success('Logged out successfully');
  };

  const signup = async (data: { name: string; email: string; password: string }) => {
    try {
      const response = await api.post('/auth/signup', data);
      const { user, token } = response.data;
      
      setAuth(user, token);
      connectSocket(token);
      
      toast.success('Account created successfully!');
      navigate('/');
    } catch (error) {
      console.error('Signup error:', error);
      throw error;
    }
  };

  return { login, logout, signup };
};