import React, { useEffect, useState } from "react";
import { FaBoxOpen, FaStar, FaUserPlus, FaTruck, FaTimes } from "react-icons/fa";
import { useLocation } from "react-router-dom";

const notificationsData = {
  Hyderabad: [
    { type: "alert", message: "⚠️ Payment failed for Order #1248", time: "2 mins ago" },
    { type: "warning", message: "❗ 2⭐ review received from Mahesh", time: "15 mins ago" },
    { type: "stock", message: "🔴 Black Forest cake is out of stock", time: "1 hr ago" },
  ],
  Bangalore: [
    { type: "alert", message: "⚠️ Payment gateway timeout for Order #905", time: "10 mins ago" },
    { type: "bulk", message: "🎉 Corporate order: 25 cakes for Infosys event", time: "30 mins ago" },
    { type: "warning", message: "❗ 1⭐ feedback from Ajay: 'Very late delivery'", time: "1 hr ago" },
  ],
  Vijayawada: [
    { type: "bulk", message: "🎉 Bulk order: 15 cakes for school event", time: "5 mins ago" },
    { type: "warning", message: "❗ Rider delayed for Order #335", time: "20 mins ago" },
    { type: "stock", message: "⚠️ Low inventory: Choco Lava (4 left)", time: "2 hrs ago" },
  ],
};

const icons = {
  order: <FaBoxOpen className="text-yellow-500" />,
  feedback: <FaStar className="text-pink-500" />,
  user: <FaUserPlus className="text-green-500" />,
  delivery: <FaTruck className="text-blue-500" />,
};

const Notifications = ({ store = "All" }) => {
  const [showPopup, setShowPopup] = useState(false);
  const [popupItem, setPopupItem] = useState(null);
  const location = useLocation();

  const notifications = notificationsData[store] || [];

  useEffect(() => {
    // Show first notification on mount (when route changes)
    if (notifications.length > 0) {
      setPopupItem(notifications[0]);
      setShowPopup(true);

      const timer = setTimeout(() => setShowPopup(false), 10000); // 10s
      return () => clearTimeout(timer);
    }
  }, [location.pathname, store]);

  return (
    <div className="relative p-6 bg-white dark:bg-darkCard py-4 rounded-xl shadow-lg mt-6">
      <h2 className="text-2xl font-semibold text-[rgba(79,79,79,0.7)] mb-4">
        Notifications – {store}
      </h2>
      <ul className="space-y-4">
        {notifications.map((note, idx) => (
          <li key={idx} className="flex items-start space-x-4">
            <div className="text-xl">{icons[note.type]}</div>
            <div>
              <p className="text-[rgba(79,79,79,0.85)] dark:text-black font-medium">
                {note.message}
              </p>
              <p className="text-sm text-gray-500 dark:text-gray-400">{note.time}</p>
            </div>
          </li>
        ))}
      </ul>

      {/* 💬 Bottom-Right Popup */}
      {showPopup && popupItem && (
        <div className="fixed bottom-5 right-5 bg-white dark:bg-darkCard shadow-xl rounded-lg px-4 py-3 flex items-start space-x-3 border-l-4 border-[rgba(224,99,99,0.85)] z-50 animate-fade-in-up">
          <div className="text-2xl">{icons[popupItem.type]}</div>
          <div className="flex-1">
            <p className="text-[rgba(79,79,79,0.85)] font-medium">
              {popupItem.message}
            </p>
            <p className="text-sm text-gray-500">{popupItem.time}</p>
          </div>
          <button onClick={() => setShowPopup(false)} className="text-gray-400 hover:text-red-500 text-sm mt-1">
            <FaTimes />
          </button>
        </div>
      )}
    </div>
  );
};

export default Notifications;
