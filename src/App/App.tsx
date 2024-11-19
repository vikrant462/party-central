import { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Navbar from '../components/Navbar/Navbar';
import HomePage from '../components/HomePage/HomePage';
import Cart from '../components/Cart';
import Checkout from '../components/Checkout';
import OrderSuccess from '../components/OrderSuccess';
import Events from '../components/Events/Events';
import Rewards from '../components/Rewards/Rewards';
import PlanYourParty from '../components/PlanYourParty/PlanYourParty';
import Footer from '../components/HomePage/Footer';
import './App.css';

// Scroll to top on route change
function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0); // Scroll to the top-left corner
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
            <Route path="/cart" element={<Cart />} />
            <Route path="/checkout" element={<Checkout />} />
            <Route path="/order-success" element={<OrderSuccess />} />
            <Route path="/events" element={<Events />} />
            <Route path="/rewards" element={<Rewards />} />
            <Route path="/plan-your-party" element={<PlanYourParty />} />
          </Routes>
        </div>
        <Footer />
      </div>
    </Router>
  );
}
