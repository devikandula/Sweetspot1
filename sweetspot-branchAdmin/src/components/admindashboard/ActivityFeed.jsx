import React from "react";
import { FaBoxOpen, FaStar, FaUserPlus, FaTruck } from "react-icons/fa";

// ActivityFeed.jsx
const feedData = {
  Hyderabad: [
    { type: "order", message: "Order #1245 placed by Ravi", time: "3 mins ago" },
    { type: "delivery", message: "Order #1242 delivered to Gachibowli", time: "25 mins ago" },
    { type: "feedback", message: "5⭐ review from Sneha", time: "1 hr ago" },
    { type: "user", message: "New signup: Tejaswini", time: "2 hrs ago" },
  ],
  Vijayawada: [
    { type: "order", message: "Order #334 placed by Divya", time: "10 mins ago" },
    { type: "feedback", message: "4⭐ for Vanilla Delight", time: "30 mins ago" },
    { type: "delivery", message: "Order #330 delivered to Benz Circle", time: "1 hr ago" },
    { type: "user", message: "New user joined: Srikanth", time: "3 hrs ago" },
  ],
  Bangalore: [
    { type: "order", message: "Order #900 placed by Aditi", time: "5 mins ago" },
    { type: "delivery", message: "Cake delivered to Indiranagar", time: "50 mins ago" },
    { type: "feedback", message: "Customer loved the Red Velvet", time: "2 hrs ago" },
    { type: "user", message: "Signup: Rajeev", time: "4 hrs ago" },
  ],
};


const icons = {
  order: <FaBoxOpen className="text-yellow-500" />,
  feedback: <FaStar className="text-pink-500" />,
  user: <FaUserPlus className="text-green-500" />,
  delivery: <FaTruck className="text-blue-500" />,
};

const ActivityFeed = ({ store = "All" }) => {
  const activities = feedData[store] || feedData["All"];

  return (
    <div className="bg-white dark:bg-darkCard p-6 py-4 rounded-xl shadow-lg mt-6">
      <h2 className="text-2xl font-semibold text-[rgba(79,79,79,0.7)] mb-4">
        Recent Activity – {store}
      </h2>
      <ul className="space-y-4">
        {activities.map((item, index) => (
          <li key={index} className="flex items-start space-x-4">
            <div className="text-xl">{icons[item.type]}</div>
            <div>
              <p className="text-[rgba(79,79,79,0.85)] dark:text-black font-medium">
                {item.message}
              </p>
              <p className="text-sm text-gray-500 dark:text-gray-400">{item.time}</p>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ActivityFeed;
