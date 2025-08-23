import React, { useState } from "react";

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
  const [selectedCity, setSelectedCity] = useState("All");
  const [deliveries, setDeliveries] = useState(initialDeliveries);

  const handleChange = (index, field, value) => {
    const updated = [...deliveries];
    updated[index][field] = value;
    setDeliveries(updated);
  };

  const filtered =
    selectedCity === "All"
      ? deliveries
      : deliveries.filter((d) => d.city === selectedCity);

  return (
    <div className="px-6 py-4">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-4xl font-semibold font-[Parastoo] text-[rgba(79,79,79,0.66)]">
          Delivery Tracking
        </h1>
        <select
          className="p-2 rounded-md border border-pink-200 text-sm bg-white"
          value={selectedCity}
          onChange={(e) => setSelectedCity(e.target.value)}
        >
          <option>All</option>
          <option>Hyderabad</option>
          <option>Vijayawada</option>
          <option>Bangalore</option>
        </select>
      </div>

      <div className="overflow-x-auto rounded-xl shadow-md border border-pink-100 bg-white">
        <table className="min-w-full text-sm md:text-base divide-y divide-pink-100">
          {/* Refined Table Header */}
          <thead className="bg-gradient-to-r from-[rgba(224,99,99,0.9)] to-[rgba(224,99,99,0.75)]">
            <tr>
              {[
                "🧾 Order ID",
                "👤 Customer",
                "📍 City",
                "🛵 Status",
                "🚚 Agent",
                "📅 Estimated",
              ].map((head, idx, arr) => (
                <th
                  key={idx}
                  className={`px-4 py-3 text-left font-semibold uppercase tracking-wide text-white ${
                    idx === 0 ? "rounded-tl-xl" : ""
                  } ${idx === arr.length - 1 ? "rounded-tr-xl" : ""}`}
                >
                  {head}
                </th>
              ))}
            </tr>
          </thead>

          <tbody className="bg-white divide-y divide-pink-50">
            {filtered.map((item, idx) => (
              <tr key={idx} className="hover:bg-[rgba(224,99,99,0.05)]">
                <td className="px-4 py-3">{item.id}</td>
                <td className="px-4 py-3">{item.customer}</td>
                <td className="px-4 py-3">{item.city}</td>
                <td className="px-4 py-3">
                  <select
                    value={item.status}
                    onChange={(e) => handleChange(idx, "status", e.target.value)}
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
                    onChange={(e) => handleChange(idx, "agent", e.target.value)}
                    className="border border-gray-300 p-1 rounded text-sm"
                  >
                    {agents.map((agent) => (
                      <option key={agent}>{agent}</option>
                    ))}
                  </select>
                </td>
                <td className="px-4 py-3">{item.date}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Delivery;
