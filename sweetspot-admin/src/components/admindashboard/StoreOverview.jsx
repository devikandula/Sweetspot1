import React from "react";
import { FaBoxOpen, FaStar, FaTruck, FaChartLine } from "react-icons/fa";

const overviewData = {
  Hyderabad: [
    {
      type: "popular",
      label: "Top Product",
      value: "Choco Lava Cake",
    },
    {
      type: "stock",
      label: "Items Out of Stock",
      value: "3 items",
    },
    {
      type: "delivery",
      label: "Delivery Success Rate",
      value: "97%",
    },
    {
      type: "growth",
      label: "Monthly Growth",
      value: "+8%",
    },
  ],
  Vijayawada: [
    {
      type: "popular",
      label: "Top Product",
      value: "Red Velvet Cake",
    },
    {
      type: "stock",
      label: "Items Out of Stock",
      value: "5 items",
    },
    {
      type: "delivery",
      label: "Delivery Success Rate",
      value: "94%",
    },
    {
      type: "growth",
      label: "Monthly Growth",
      value: "+5%",
    },
  ],
  Bangalore: [
    {
      type: "popular",
      label: "Top Product",
      value: "Butterscotch Fantasy",
    },
    {
      type: "stock",
      label: "Items Out of Stock",
      value: "6 items",
    },
    {
      type: "delivery",
      label: "Delivery Success Rate",
      value: "92%",
    },
    {
      type: "growth",
      label: "Monthly Growth",
      value: "+6.2%",
    },
  ],
};

const icons = {
  popular: <FaStar className="text-pink-500 text-lg" />,
  stock: <FaBoxOpen className="text-yellow-500 text-lg" />,
  delivery: <FaTruck className="text-blue-500 text-lg" />,
  growth: <FaChartLine className="text-green-600 text-lg" />,
};

const StoreOverview = ({ store = "All" }) => {
  const storeStats = overviewData[store] || [];

  return (
    <div className="bg-white dark:bg-darkCard px-6 py-4 rounded-xl shadow-md w-full mt-6">
      <h2 className="text-2xl font-semibold text-[rgba(79,79,79,0.7)] mb-4">
        Store Overview – {store}
      </h2>

      <div className="space-y-4 max-h-80 overflow-y-auto pr-1">
        {storeStats.map((item, index) => (
          <div key={index} className="flex items-start space-x-3">
            <div className="mt-1">{icons[item.type]}</div>
            <div>
              <p className="text-sm text-gray-500 dark:text-gray-400">{item.label}</p>
              <p className="text-[rgba(79,79,79,0.85)] dark:text-black text-base font">
                {item.value}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default StoreOverview;
