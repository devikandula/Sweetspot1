
// OrderTrackingPage.jsx
import React from 'react';
import OrderList from '../components/OrderList.jsx';
import NavBar from '../components/NavBar.jsx';
import Footer from '../components/Footer.jsx';
import '../OrderTracking.css';

const OrderTrackingPage = () => {
  return (
    <main className="min-h-screen bg-[#f5f7fa] font-parastoo">
      <NavBar />
      <OrderList />
      <Footer />
    </main>
  );
};

export default OrderTrackingPage;