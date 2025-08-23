import React, { useContext, useEffect, useState } from "react";
import { UserContext } from "../context/UserContext";
import SalesChart from "../components/admindashboard/SalesChart";
import StatsCards from "../components/admindashboard/StatsCards";
import StoreOverview from "../components/admindashboard/StoreOverview";
import ActivityFeed from "../components/admindashboard/ActivityFeed";
import Notifications from "../components/admindashboard/Notifications";
import { mainAdmins } from "../data/mainAdmin";

const AdminDashboard = () => {
  const { adminName } = useContext(UserContext);
  const [greeting, setGreeting] = useState("");
  const loggedInEmail = localStorage.getItem("loggedInEmail");
  const currentAdmin =
    mainAdmins.find((admin) => admin.email === loggedInEmail) || {};
  const adminLocation = currentAdmin.location || "Hyderabad";
  const [selectedStore, setSelectedStore] = useState(adminLocation);

  useEffect(() => {
    const hour = new Date().getHours();
    let timeGreeting = "Hello";

    if (hour < 12) timeGreeting = "Good Morning";
    else if (hour < 18) timeGreeting = "Good Afternoon";
    else timeGreeting = "Good Evening";

    const nameFromStorage = localStorage.getItem("adminName");
    const name = nameFromStorage || adminName || "Admin";
    setGreeting(`${timeGreeting}, ${name}`);
  }, [adminName]);

  return (
    <div className="px-6 py-6 bg-white min-h-screen transition-all duration-300">
      {/* Greeting + Dropdown */}
      <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-8">
        <h1 className="text-5xl font-[Parastoo] text-[rgba(79,79,79,0.66)] mb-4 md:mb-0">
          {greeting}
        </h1>

        {/* Store Dropdown with RED border */}
        <select
          value={selectedStore}
          onChange={(e) => setSelectedStore(e.target.value)}
          className="w-full md:w-[250px] px-4 py-2 border border-red-500 rounded-full text-gray-700 focus:outline-none focus:ring-2 focus:ring-[rgba(224,99,99,0.85)]"
        >
          <option value={adminLocation}>{adminLocation}</option>
        </select>
      </div>

      {/* Stats Cards */}
      <StatsCards store={selectedStore} />

      {/* Sales Chart */}
      <div className="w-full mt-10">
        <SalesChart store={selectedStore} />
      </div>

      {/* Activity Feed + Notifications + Store Overview (only for branches) */}
      {selectedStore !== "All" && (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-10">
          <div className="md:col-span-1">
            <ActivityFeed store={selectedStore} />
          </div>
          <div className="md:col-span-1">
            <Notifications store={selectedStore} />
          </div>
          <div className="md:col-span-1">
            <StoreOverview store={selectedStore} />
          </div>
        </div>
      )}
    </div>
  );
};

export default AdminDashboard;
