import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import CakeCustomization from './pages/CakeCustomization';
import CheckoutPage from './pages/CheckoutPage';
import CakeList from './pages/CakeList';
import ContactUs from './pages/ContactUs';
import OrderTrackingPage from './pages/OrderTrackingPage';

import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";

// Replace with your actual test publishable key (starts with pk_test_...)
const stripePromise = loadStripe("pk_test_51RmqjsFtwR15Mbf3f4KL8EJfkUIWr3FHlp3gX5LZfoDzjmXmdFEts4YpNySAmE71Ol0Npg0xZMn4FiqrtKt0mk2p00ktyJxhCu");

function App() {
  return (
    <Elements stripe={stripePromise}>
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/customize" element={<CakeCustomization />} />
        <Route path="/checkout" element={<CheckoutPage />} />
        <Route path="/cakes" element={<CakeList />} />
        <Route path="/orders" element={<OrderTrackingPage />} />
        <Route path="/contact-us" element={<ContactUs />} />
      </Routes>
    </Router>
    </Elements>
  );
}

export default App;
