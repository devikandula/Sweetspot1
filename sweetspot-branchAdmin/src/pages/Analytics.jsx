// src/pages/Analytics.jsx
import React from "react";
import {
  LineChart, Line, BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer
} from "recharts";

const data = [
  { name: "Mon", orders: 40, revenue: 24000 },
  { name: "Tue", orders: 30, revenue: 22100 },
  { name: "Wed", orders: 20, revenue: 22900 },
  { name: "Thu", orders: 27, revenue: 20000 },
  { name: "Fri", orders: 18, revenue: 21800 },
  { name: "Sat", orders: 23, revenue: 25000 },
  { name: "Sun", orders: 34, revenue: 27000 },
];

const Analytics = () => {
  return (
    <div className="p-6">
      <h2 className="text-3xl mb-6 font-parastoo font-semibold text-[rgba(79,79,79,0.7)]">
        Analytics Overview
      </h2>
      <div className="grid md:grid-cols-2 gap-8">
        <div className="bg-white dark:bg-darkCard p-4 rounded-xl shadow">
          <h3 className="text-xl mb-2 font-semibold text-[rgba(79,79,79,0.7)]">Orders Line Chart</h3>
          <ResponsiveContainer width="100%" height={300}>
            <LineChart data={data}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="name" />
              <YAxis />
              <Tooltip />
              <Legend />
              <Line type="monotone" dataKey="orders" stroke="#e06363" strokeWidth={3} />
            </LineChart>
          </ResponsiveContainer>
        </div>
        <div className="bg-white dark:bg-darkCard p-4 rounded-xl shadow">
          <h3 className="text-xl mb-2 font-semibold text-[rgba(79,79,79,0.7)]">Revenue Bar Chart</h3>
          <ResponsiveContainer width="100%" height={300}>
            <BarChart data={data}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="name" />
              <YAxis />
              <Tooltip />
              <Legend />
              <Bar dataKey="revenue" fill="#e063d8" />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </div>
    </div>
  );
};

export default Analytics;
