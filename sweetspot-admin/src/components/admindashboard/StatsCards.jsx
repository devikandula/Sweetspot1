import React from "react";
import { FaRupeeSign, FaShoppingCart, FaUsers, FaBoxOpen } from "react-icons/fa";

const mockData = {
  All: {
    revenue: "₹2,45,000",
    orders: 845,
    customers: 520,
    products: 180,
  },
  Hyderabad: {
    revenue: "₹95,000",
    orders: 320,
    customers: 180,
    products: 60,
  },
  Vijayawada: {
    revenue: "₹75,000",
    orders: 280,
    customers: 160,
    products: 55,
  },
  Bangalore: {
    revenue: "₹75,000",
    orders: 245,
    customers: 180,
    products: 65,
  },
};

const StatsCards = ({ store }) => {
  const data = mockData[store] || mockData["All"];

  const cards = [
    {
      icon: <FaRupeeSign className="text-white text-xl" />,
      label: "Revenue",
      value: data.revenue,
      bg: "bg-[rgba(224,99,99,0.85)]",
    },
    {
      icon: <FaShoppingCart className="text-white text-xl" />,
      label: "Orders",
      value: data.orders,
      bg: "bg-[rgba(224,99,99,0.85)]",
    },
    {
      icon: <FaUsers className="text-white text-xl" />,
      label: "Customers",
      value: data.customers,
      bg: "bg-[rgba(224,99,99,0.85)]",
    },
    {
      icon: <FaBoxOpen className="text-white text-xl" />,
      label: "Products",
      value: data.products,
      bg: "bg-[rgba(224,99,99,0.85)]",
    },
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
      {cards.map((card, index) => (
        <div
          key={index}
          className={`p-5 rounded-xl text-white shadow-md hover:scale-[1.02] transition-transform duration-300 ${card.bg}`}
        >
          <div className="flex items-center justify-between">
            <div className="text-2xl font-bold">{card.value}</div>
            <div className="p-2 rounded-full bg-white bg-opacity-20">{card.icon}</div>
          </div>
          <div className="mt-2 text-sm">{card.label}</div>
        </div>
      ))}
    </div>
  );
};

export default StatsCards;
