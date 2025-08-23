import React, { useContext } from "react";
import { FiSearch, FiSun, FiMoon } from "react-icons/fi";
import { UserContext } from "../../../context/UserContext";

const HeaderBar = ({ darkMode, toggleDarkMode }) => {
  const { adminName } = useContext(UserContext);

  const currentHour = new Date().getHours();
  const greeting =
    currentHour < 12
      ? "Good Morning"
      : currentHour < 18
      ? "Good Afternoon"
      : "Good Evening";

  return (
    <div className="flex items-center justify-between px-4 py-2 mb-4 border-b border-gray-200 dark:border-gray-700">
      {/* Greeting */}
      <div className="text-[rgba(79,79,79,0.7)] text-2xl font-bold font-['Parastoo']">
        {greeting}, {adminName || "Admin"} 👋
      </div>

      {/* Right Controls */}
      <div className="flex items-center gap-4">
        {/* Search */}
        <div className="relative">
          <input
            type="text"
            placeholder="Search..."
            className="px-3 py-2 rounded-md bg-white border border-gray-300 text-sm text-black focus:outline-none focus:ring-2 focus:ring-[rgba(224,99,99,0.85)] dark:bg-[#1f2937] dark:text-white"
          />
          <FiSearch className="absolute right-3 top-2.5 text-gray-500 dark:text-white" />
        </div>

        {/* Mode Toggle */}
        <button
          onClick={toggleDarkMode}
          className="p-2 rounded-full bg-white text-[rgba(224,99,99,0.85)] hover:bg-pink-100 dark:bg-[#1f2937] dark:text-white"
        >
          {darkMode ? <FiSun size={18} /> : <FiMoon size={18} />}
        </button>
      </div>
    </div>
  );
};

export default HeaderBar;
