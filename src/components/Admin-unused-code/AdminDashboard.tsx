import { Routes, Route } from 'react-router-dom';
import AdminSidebar from './AdminSidebar';
import MenuEditor from './MenuEditor';
import OrderManagement from './OrderManagement';
import Analytics from './Analytics';

export default function AdminDashboard() {
  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
        <div className="md:col-span-1">
          <AdminSidebar />
        </div>
        <div className="md:col-span-3">
          <Routes>
            <Route path="/" element={<Analytics />} />
            <Route path="/menu" element={<MenuEditor />} />
            <Route path="/orders" element={<OrderManagement />} />
          </Routes>
        </div>
      </div>
    </div>
  );
}