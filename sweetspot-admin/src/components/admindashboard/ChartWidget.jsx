import React from "react";
import {
  LineChart, Line, XAxis, YAxis, CartesianGrid,
  Tooltip, Legend, ResponsiveContainer
} from "recharts";

const data = [
  { name: "Mon", revenue: 4000, orders: 30 },
  { name: "Tue", revenue: 3000, orders: 22 },
  { name: "Wed", revenue: 2000, orders: 18 },
  { name: "Thu", revenue: 2780, orders: 25 },
  { name: "Fri", revenue: 1890, orders: 20 },
  { name: "Sat", revenue: 2390, orders: 27 },
  { name: "Sun", revenue: 3490, orders: 33 },
];

const ChartWidget = () => {
  return (
    <div className="bg-white dark:bg-darkCard p-6 rounded-2xl shadow-md hover:shadow-[0_4px_30px_rgba(0,0,0,0.2)] transition-all">
      <h2 className="text-2xl font-semibold text-[rgba(79,79,79,0.7)] dark:text-white mb-4">
        Weekly Overview: Revenue & Orders
      </h2>
      <ResponsiveContainer width="100%" height={300}>
        <LineChart data={data} margin={{ top: 10, right: 30, bottom: 5, left: 0 }}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" stroke="#8884d8" />
          <YAxis yAxisId="left" stroke="#8884d8" />
          <YAxis yAxisId="right" orientation="right" stroke="#82ca9d" />
          <Tooltip />
          <Legend />
          <Line
            yAxisId="left"
            type="monotone"
            dataKey="revenue"
            name="Revenue (₹)"
            stroke="rgba(224, 99, 99, 0.85)"
            strokeWidth={3}
            dot={{ r: 5 }}
            activeDot={{ r: 8 }}
          />
          <Line
            yAxisId="right"
            type="monotone"
            dataKey="orders"
            name="Orders"
            stroke="rgba(99, 155, 224, 0.85)"
            strokeDasharray="5 5"
            strokeWidth={3}
            dot={{ r: 4 }}
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
};

export default ChartWidget;
