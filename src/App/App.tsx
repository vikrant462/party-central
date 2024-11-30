import { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Navbar from '../components/Navbar/Navbar';
import HomePage from '../components/HomePage/HomePage';
import MenuPage from '../components/Menu/MenuPage';
import Cart from '../components/Cart';
import Checkout from '../components/Checkout';
import OrderSuccess from '../components/OrderSuccess';
import Events from '../components/Events/Events';
import Rewards from '../components/Rewards/Rewards';
import PlanYourParty from '../components/PlanYourParty/PlanYourParty';
import Footer from '../components/HomePage/Footer';
import LoginPage from '../components/Auth/LoginPage';
import SignupPage from '../components/Auth/SignupPage';
import AdminDashboard from '../components/Admin/AdminDashboard';
import FeedbackPage from '../components/Feedback/FeedbackPage';
import OrderTracking from '../components/Profile/OrderTracking';
import Profile from '../components/Profile/Profile';
import ProtectedRoute from '../components/Routes/ProtectedRoute';
import './App.css';

function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}

export function App() {
  return (
    <Router>
      <ScrollToTop />
      <div className="app-container min-h-screen">
        <Navbar />
        <div className="content">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/menu" element={<MenuPage />} />
            <Route path="/login" element={<LoginPage />} />
            <Route path="/signup" element={<SignupPage />} />
            <Route path="/feedback" element={<FeedbackPage />} />
            <Route 
              path="/cart" 
              element={
                <ProtectedRoute>
                  <Cart />
                </ProtectedRoute>
              } 
            />
            <Route 
              path="/checkout" 
              element={
                <ProtectedRoute>
                  <Checkout />
                </ProtectedRoute>
              } 
            />
            <Route 
              path="/order-success" 
              element={
                <ProtectedRoute>
                  <OrderSuccess />
                </ProtectedRoute>
              } 
            />
            <Route path="/events" element={<Events />} />
            <Route path="/rewards" element={<Rewards />} />
            <Route 
              path="/track-orders" 
              element={
                <ProtectedRoute>
                  <OrderTracking />
                </ProtectedRoute>
              } 
            />
            <Route 
              path="/profile/*" 
              element={
                <ProtectedRoute>
                  <Profile />
                </ProtectedRoute>
              } 
            />
            <Route 
              path="/plan-your-party" 
              element={
                <ProtectedRoute>
                  <PlanYourParty />
                </ProtectedRoute>
              } 
            />
            <Route
              path="/admin/*"
              element={
                <ProtectedRoute requireAdmin>
                  <AdminDashboard />
                </ProtectedRoute>
              }
            />
          </Routes>
        </div>
        <Footer />
      </div>
    </Router>
  );
}