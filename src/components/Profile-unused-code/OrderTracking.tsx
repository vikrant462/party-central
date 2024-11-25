import { useState, useEffect } from 'react';
import { Package, Clock, CheckCircle, Truck } from 'lucide-react';
import { OrderStatus } from '../../types/user';

interface Order {
  id: string;
  items: Array<{
    name: string;
    quantity: number;
    price: number;
  }>;
  total: number;
  status: OrderStatus['status'];
  createdAt: Date;
  estimatedDelivery: Date;
}

export default function OrderTracking() {
  const [orders, setOrders] = useState<Order[]>([]);
  const [selectedOrder, setSelectedOrder] = useState<Order | null>(null);

  const getStatusIcon = (status: OrderStatus['status']) => {
    switch (status) {
      case 'preparing':
        return Clock;
      case 'ready':
        return Package;
      case 'delivered':
        return CheckCircle;
      default:
        return Package;
    }
  };

  const getStatusColor = (status: OrderStatus['status']) => {
    switch (status) {
      case 'preparing':
        return 'text-yellow-500';
      case 'ready':
        return 'text-blue-500';
      case 'delivered':
        return 'text-green-500';
      default:
        return 'text-gray-500';
    }
  };

  return (
    <div className="max-w-7xl mx-auto p-8">
      <h2 className="text-2xl font-bold mb-8 gradient-text">Track Your Orders</h2>

      <div className="grid md:grid-cols-3 gap-8">
        {/* Orders List */}
        <div className="md:col-span-1 space-y-4">
          {orders.map((order) => (
            <button
              key={order.id}
              onClick={() => setSelectedOrder(order)}
              className={`w-full p-4 rounded-xl border transition-all ${
                selectedOrder?.id === order.id
                  ? 'border-primary bg-primary/5'
                  : 'border-gray-200 hover:border-primary'
              }`}
            >
              <div className="flex items-center justify-between mb-2">
                <span className="font-medium">Order #{order.id}</span>
                <span className={`flex items-center gap-1 ${getStatusColor(order.status)}`}>
                  {React.createElement(getStatusIcon(order.status), { className: 'w-4 h-4' })}
                  {order.status}
                </span>
              </div>
              <div className="text-sm text-gray-500 text-left">
                {new Date(order.createdAt).toLocaleDateString()}
              </div>
            </button>
          ))}
        </div>

        {/* Order Details */}
        {selectedOrder ? (
          <div className="md:col-span-2 bg-white rounded-xl shadow-sm p-6">
            <div className="flex justify-between items-start mb-6">
              <div>
                <h3 className="text-xl font-semibold mb-2">
                  Order #{selectedOrder.id}
                </h3>
                <p className="text-gray-500">
                  Placed on {new Date(selectedOrder.createdAt).toLocaleString()}
                </p>
              </div>
              <div className={`px-3 py-1 rounded-full ${getStatusColor(selectedOrder.status)} bg-opacity-10`}>
                {selectedOrder.status}
              </div>
            </div>

            {/* Progress Tracker */}
            <div className="relative mb-8">
              <div className="absolute top-1/2 left-0 right-0 h-1 bg-gray-200 -translate-y-1/2" />
              <div className="relative flex justify-between">
                {['preparing', 'ready', 'delivered'].map((status, index) => (
                  <div
                    key={status}
                    className={`flex flex-col items-center ${
                      ['preparing', 'ready', 'delivered'].indexOf(selectedOrder.status) >= index
                        ? getStatusColor(status as OrderStatus['status'])
                        : 'text-gray-400'
                    }`}
                  >
                    {React.createElement(getStatusIcon(status as OrderStatus['status']), {
                      className: 'w-8 h-8 bg-white'
                    })}
                    <span className="text-sm mt-2 capitalize">{status}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Order Items */}
            <div className="space-y-4 mb-6">
              <h4 className="font-semibold">Order Items</h4>
              {selectedOrder.items.map((item, index) => (
                <div
                  key={index}
                  className="flex justify-between items-center py-2 border-b"
                >
                  <div>
                    <span className="font-medium">{item.name}</span>
                    <span className="text-gray-500 ml-2">x{item.quantity}</span>
                  </div>
                  <span>${(item.price * item.quantity).toFixed(2)}</span>
                </div>
              ))}
              <div className="flex justify-between items-center pt-4 font-semibold">
                <span>Total</span>
                <span>${selectedOrder.total.toFixed(2)}</span>
              </div>
            </div>

            {/* Estimated Delivery */}
            <div className="flex items-center gap-2 text-gray-600">
              <Truck className="w-5 h-5" />
              <span>
                Estimated delivery:{' '}
                {new Date(selectedOrder.estimatedDelivery).toLocaleString()}
              </span>
            </div>
          </div>
        ) : (
          <div className="md:col-span-2 bg-white rounded-xl shadow-sm p-6 flex items-center justify-center">
            <p className="text-gray-500">Select an order to view details</p>
          </div>
        )}
      </div>
    </div>
  );
}