import React, { useState } from "react";

const Customers = () => {
  const [selectedCity, setSelectedCity] = useState("All Customers");

  const customers = [
    {
      name: "Saanvi Reddy",
      email: "saanvi.reddy@email.com",
      orders: 5,
      lastOrder: "21 July 2025",
      location: "Hyderabad",
    },
    {
      name: "Ananya Iyer",
      email: "ananya.iyer@email.com",
      orders: 3,
      lastOrder: "20 July 2025",
      location: "Vijayawada",
    },
    {
      name: "Rohit Sharma",
      email: "rohit.sharma@email.com",
      orders: 4,
      lastOrder: "21 July 2025",
      location: "Hyderabad",
    },
    {
      name: "Riya Verma",
      email: "riya.verma@email.com",
      orders: 2,
      lastOrder: "19 July 2025",
      location: "Bangalore",
    },
    {
      name: "Aditya Rao",
      email: "aditya.rao@email.com",
      orders: 6,
      lastOrder: "18 July 2025",
      location: "Hyderabad",
    },
    {
      name: "Divya Nair",
      email: "divya.nair@email.com",
      orders: 3,
      lastOrder: "18 July 2025",
      location: "Vijayawada",
    },
    {
      name: "Manish Patil",
      email: "manish.patil@email.com",
      orders: 4,
      lastOrder: "19 July 2025",
      location: "Bangalore",
    },
    {
      name: "Neha Singh",
      email: "neha.singh@email.com",
      orders: 1,
      lastOrder: "17 July 2025",
      location: "Hyderabad",
    },
    {
      name: "Kiran Kumar",
      email: "kiran.kumar@email.com",
      orders: 2,
      lastOrder: "17 July 2025",
      location: "Vijayawada",
    },
    {
      name: "Sneha Desai",
      email: "sneha.desai@email.com",
      orders: 5,
      lastOrder: "17 July 2025",
      location: "Bangalore",
    },
  ];

  const cities = ["All Customers", "Hyderabad", "Vijayawada", "Bangalore"];

  const filteredCustomers =
    selectedCity === "All Customers"
      ? customers
      : customers.filter((c) => c.location === selectedCity);

  return (
    <div className="px-6 py-4">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-4xl font-semibold font-[Parastoo] text-[rgba(79,79,79,0.66)]">
          Customers
        </h1>

        {/* Dropdown Filter */}
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

      {/* Customers Table */}
      <div className="overflow-x-auto rounded-xl shadow-md border border-pink-100 bg-white">
        <table className="min-w-full divide-y divide-pink-100 text-sm md:text-base">
          <thead className="bg-[rgba(224,99,99,0.85)] text-white font-medium">
            <tr>
              <th className="px-6 py-4 text-left">Name</th>
              <th className="px-6 py-4 text-left">Email</th>
              <th className="px-6 py-4 text-left">Orders</th>
              <th className="px-6 py-4 text-left">Last Order</th>
              <th className="px-6 py-4 text-left">Location</th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-pink-50">
            {filteredCustomers.length > 0 ? (
              filteredCustomers.map((customer, idx) => (
                <tr
                  key={idx}
                  className="hover:bg-[rgba(224,99,99,0.05)] transition duration-150"
                >
                  <td className="px-6 py-4">{customer.name}</td>
                  <td className="px-6 py-4">{customer.email}</td>
                  <td className="px-6 py-4">{customer.orders}</td>
                  <td className="px-6 py-4">{customer.lastOrder}</td>
                  <td className="px-6 py-4">{customer.location}</td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan="5" className="text-center py-6 text-gray-500">
                  No customers from {selectedCity}.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Customers;
