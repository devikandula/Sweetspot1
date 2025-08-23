import React, { useState } from "react";
import { mainAdmins } from "../data/mainAdmin";
const Orders = () => {
  const loggedInEmail = localStorage.getItem("loggedInEmail");
  const currentAdmin = mainAdmins.find(admin => admin.email === loggedInEmail) || {};
  const cities = [currentAdmin.location || "Hyderabad"];
  const [selectedCity, setSelectedCity] = useState(cities[0]);
  const orders = [
    {
      id: "#1001",
      customer: "Saanvi",
      product: "Chocolate Truffle",
      status: "Delivered",
      date: "21 July 2025",
      location: "Hyderabad",
    },
    {
      id: "#1002",
      customer: "Ananya",
      product: "Red Velvet Cake",
      status: "Dispatched",
      date: "21 July 2025",
      location: "Vijayawada",
    },
    {
      id: "#1003",
      customer: "Rohit",
      product: "Blueberry Cheesecake",
      status: "Cancelled",
      date: "21 July 2025",
      location: "Hyderabad",
    },
    {
      id: "#1004",
      customer: "Riya",
      product: "Vanilla Cream",
      status: "Delivered",
      date: "20 July 2025",
      location: "Bangalore",
    },
    {
      id: "#1005",
      customer: "Aditya",
      product: "Butterscotch Delight",
      status: "Delivered",
      date: "20 July 2025",
      location: "Hyderabad",
    },
    {
      id: "#1006",
      customer: "Divya",
      product: "Pineapple Cake",
      status: "Dispatched",
      date: "20 July 2025",
      location: "Vijayawada",
    },
    {
      id: "#1007",
      customer: "Manish",
      product: "Black Forest",
      status: "Delivered",
      date: "19 July 2025",
      location: "Bangalore",
    },
    {
      id: "#1008",
      customer: "Neha",
      product: "Strawberry Mousse",
      status: "Cancelled",
      date: "19 July 2025",
      location: "Hyderabad",
    },
    {
      id: "#1009",
      customer: "Kiran",
      product: "White Forest Cake",
      status: "Dispatched",
      date: "18 July 2025",
      location: "Vijayawada",
    },
    {
      id: "#1010",
      customer: "Sneha",
      product: "Dark Chocolate Lava",
      status: "Delivered",
      date: "17 July 2025",
      location: "Bangalore",
    },
  ];


  const filteredOrders =
    orders.filter((order) => order.location === selectedCity);

  return (
    <div className="px-6 py-4">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-4xl font-semibold font-[Parastoo] text-[rgba(79,79,79,0.66)]">
          Orders
        </h1>

        {/* Dropdown */}
        <select
          value={selectedCity}
          onChange={(e) => setSelectedCity(e.target.value)}
          className="border border-[rgba(224,99,99,0.4)] rounded-md px-4 py-2 text-sm font-medium focus:outline-none focus:ring-2 focus:ring-[rgba(224,99,99,0.5)]"
        >
          {cities.map((city, index) => (
            <option key={index} value={city}>
              {city}
            </option>
          ))}
        </select>
      </div>

      {/* Orders Table */}
      <div className="overflow-x-auto rounded-xl shadow-md border border-pink-100 bg-white">
        <table className="min-w-full divide-y divide-pink-100 text-sm md:text-base">
          <thead className="bg-[rgba(224,99,99,0.85)] text-white font-medium">
            <tr>
              <th className="px-6 py-4 text-left">Order ID</th>
              <th className="px-6 py-4 text-left">Customer</th>
              <th className="px-6 py-4 text-left">Product</th>
              <th className="px-6 py-4 text-left">Status</th>
              <th className="px-6 py-4 text-left">Date</th>
              <th className="px-6 py-4 text-left">Location</th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-pink-50">
            {filteredOrders.length > 0 ? (
              filteredOrders.map((order, idx) => (
                <tr
                  key={idx}
                  className="hover:bg-[rgba(224,99,99,0.05)] transition duration-150"
                >
                  <td className="px-6 py-4">{order.id}</td>
                  <td className="px-6 py-4">{order.customer}</td>
                  <td className="px-6 py-4">{order.product}</td>
                  <td className="px-6 py-4 font-semibold">
                    {order.status === "Delivered" && (
                      <span className="text-green-600">{order.status}</span>
                    )}
                    {order.status === "Dispatched" && (
                      <span className="text-orange-500">{order.status}</span>
                    )}
                    {order.status === "Cancelled" && (
                      <span className="text-red-500">{order.status}</span>
                    )}
                  </td>
                  <td className="px-6 py-4">{order.date}</td>
                  <td className="px-6 py-4">{order.location}</td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan="6" className="text-center py-6 text-gray-500">
                  No orders from {selectedCity}.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Orders;
