import { Routes, Route } from 'react-router-dom';
import ProfileMenu from './ProfileMenu';
import OrderTracking from './OrderTracking';
import FeedbackSystem from './FeedbackSystem';
import ProfileSettings from './ProfileSettings';

export default function Profile() {
  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
        <div className="md:col-span-1">
          <ProfileMenu />
        </div>
        <div className="md:col-span-3">
          <Routes>
            <Route path="/" element={<ProfileSettings />} />
            <Route path="/orders" element={<OrderTracking />} />
            <Route path="/feedback" element={<FeedbackSystem />} />
          </Routes>
        </div>
      </div>
    </div>
  );
}