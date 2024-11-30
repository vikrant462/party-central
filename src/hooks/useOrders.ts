import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';
import api from '../utils/api';
import { toast } from 'react-hot-toast';

export const useOrders = () => {
  const queryClient = useQueryClient();

  const getOrders = useQuery({
    queryKey: ['orders'],
    queryFn: async () => {
      const { data } = await api.get('/orders');
      return data;
    },
  });

  const createOrder = useMutation({
    mutationFn: async (orderData: any) => {
      const { data } = await api.post('/orders', orderData);
      return data;
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['orders'] });
      toast.success('Order placed successfully!');
    },
  });

  const cancelOrder = useMutation({
    mutationFn: async (orderId: string) => {
      const { data } = await api.delete(`/orders/${orderId}`);
      return data;
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['orders'] });
      toast.success('Order cancelled successfully');
    },
  });

  return {
    orders: getOrders.data,
    isLoading: getOrders.isLoading,
    error: getOrders.error,
    createOrder,
    cancelOrder,
  };
};