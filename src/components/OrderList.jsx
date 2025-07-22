// OrderList.jsx
import React, { useState } from 'react';
import OrderCard from './OrderCard.jsx';
import {orderData} from '../data/OrdersData.js';

const OrderList = () => {
  const [expandedOrder, setExpandedOrder] = useState(null);

  const toggleExpand = (orderId) => {
    setExpandedOrder(expandedOrder === orderId ? null : orderId);
  };

  return (
    <div className="max-w-4xl mx-auto py-10 px-4 font-parastoo">
      <div className="text-center mb-8">
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold bg-gradient-to-r from-sweetspot-main to-sweetspot-alt3 bg-clip-text text-transparent mb-6">
          Order Tracking
        </h1>
        <p className="text-lg sm:text-xl text-sweetspot-text max-w-3xl mx-auto leading-relaxed mb-4">
          Track all your delicious cake orders in real-time. From our kitchen to your doorstep.
        </p>
        <p className="italic text-smallQuote text-sweetspot-text">
          "Every cake has a story. Let's deliver yours with care."
        </p>
      </div>
      
      <div className="space-y-4">
        {orderData.map((order) => (
          <OrderCard
            key={order.orderId}
            order={order}
            expanded={expandedOrder === order.orderId}
            onToggle={() => toggleExpand(order.orderId)}
          />
        ))}
      </div>
      
      {orderData.length === 0 && (
        <div className="text-center py-12">
          <p className="text-sweetspot-text text-lg">No orders found.</p>
        </div>
      )}
    </div>
  );
};

export default OrderList;