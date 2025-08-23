import React, { useState, useEffect } from "react";
import { mainAdmins } from "../data/mainAdmin";

const agents = ["Arjun", "Pooja", "Teja", "Simran"];
const statuses = ["Pending", "In Transit", "Delivered", "Failed"];

const initialDeliveries = [
  {
    id: "#1234",
    customer: "Saanvi",
    city: "Hyderabad",
    status: "Pending",
    agent: "Arjun",
    date: "24 July 2025",
  },
  {
    id: "#1235",
    customer: "Ravi",
    city: "Vijayawada",
    status: "In Transit",
    agent: "Pooja",
    date: "24 July 2025",
  },
  {
    id: "#1236",
    customer: "Ayesha",
    city: "Bangalore",
    status: "Delivered",
    agent: "Teja",
    date: "23 July 2025",
  },
  {
    id: "#1237",
    customer: "Rahul",
    city: "Hyderabad",
    status: "Failed",
    agent: "Simran",
    date: "22 July 2025",
  },
];

const Delivery = () => {
  const loggedInEmail = localStorage.getItem("loggedInEmail");
  const currentAdmin =
    mainAdmins.find((admin) => admin.email === loggedInEmail) || {};
  const cities = [currentAdmin.location || "Hyderabad"];
  const [selectedCity, setSelectedCity] = useState(cities[0]);
  const [deliveries, setDeliveries] = useState([]);

  // Load from localStorage or fallback to initialDeliveries
  useEffect(() => {
    const saved = localStorage.getItem("deliveries");
    if (saved) {
      setDeliveries(JSON.parse(saved));
    } else {
      setDeliveries(initialDeliveries);
      localStorage.setItem("deliveries", JSON.stringify(initialDeliveries));
    }
  }, []);

  const handleChange = (index, field, value) => {
    const updated = [...deliveries];
    updated[index][field] = value;
    setDeliveries(updated);
  };

  const handleUpdate = (index) => {
    const updated = [...deliveries];
    // Save updated deliveries to localStorage
    localStorage.setItem("deliveries", JSON.stringify(updated));
    setDeliveries(updated);
    alert("✅ Delivery updated successfully!");
  };

  // Only show deliveries for the current admin's city
  const filtered = deliveries.filter((d) => d.city === selectedCity);

  return (
    <div className="px-6 py-4">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-4xl font-semibold font-[Parastoo] text-[rgba(79,79,79,0.66)]">
          Delivery Tracking
        </h1>
        <select
          className="p-2 rounded-md border border-red-400 text-sm bg-white"
          value={selectedCity}
          onChange={(e) => setSelectedCity(e.target.value)}
        >
          <option value={currentAdmin.location || "Hyderabad"}>
            {currentAdmin.location || "Hyderabad"}
          </option>
        </select>
      </div>

      <div className="overflow-x-auto rounded-xl shadow-md border border-pink-100 bg-white">
        <table className="min-w-full text-sm md:text-base divide-y divide-pink-100">
          <thead className="bg-[rgba(224,99,99,0.85)] text-white">
            <tr>
              <th className="px-4 py-3 text-left">🧾 Order ID</th>
              <th className="px-4 py-3 text-left">👤 Customer</th>
              <th className="px-4 py-3 text-left">📍 City</th>
              <th className="px-4 py-3 text-left">🛵 Status</th>
              <th className="px-4 py-3 text-left">🚚 Agent</th>
              <th className="px-4 py-3 text-left">📅 Estimated</th>
              <th className="px-4 py-3 text-left">✏️ Action</th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-pink-50">
            {filtered.map((item, idx) => {
              const globalIndex = deliveries.findIndex((d) => d.id === item.id);
              return (
                <tr key={idx} className="hover:bg-[rgba(224,99,99,0.05)]">
                  <td className="px-4 py-3">{item.id}</td>
                  <td className="px-4 py-3">{item.customer}</td>
                  <td className="px-4 py-3">{item.city}</td>
                  <td className="px-4 py-3">
                    <select
                      value={item.status}
                      onChange={(e) =>
                        handleChange(globalIndex, "status", e.target.value)
                      }
                      className="border border-gray-300 p-1 rounded text-sm"
                    >
                      {statuses.map((status) => (
                        <option key={status}>{status}</option>
                      ))}
                    </select>
                  </td>
                  <td className="px-4 py-3">
                    <select
                      value={item.agent}
                      onChange={(e) =>
                        handleChange(globalIndex, "agent", e.target.value)
                      }
                      className="border border-gray-300 p-1 rounded text-sm"
                    >
                      {agents.map((agent) => (
                        <option key={agent}>{agent}</option>
                      ))}
                    </select>
                  </td>
                  <td className="px-4 py-3">{item.date}</td>
                  <td className="px-4 py-3">
                    <button
                      onClick={() => handleUpdate(globalIndex)}
                      className="px-3 py-1 bg-[rgba(224,99,99,0.85)] text-white rounded hover:bg-pink-600 transition text-sm"
                    >
                      Update
                    </button>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Delivery;
