import React from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  Legend,
  ResponsiveContainer,
  CartesianGrid,
} from "recharts";

// Sample weekly chart data for each branch
const weeklySalesData = {
  All: [
    { name: "Mon", revenue: 4200, sales: 80 },
    { name: "Tue", revenue: 3900, sales: 110 },
    { name: "Wed", revenue: 4600, sales: 98 },
    { name: "Thu", revenue: 4000, sales: 120 },
    { name: "Fri", revenue: 4700, sales: 90 },
    { name: "Sat", revenue: 5200, sales: 130 },
    { name: "Sun", revenue: 5000, sales: 100 },
  ],
  Hyderabad: [
    { name: "Mon", revenue: 1500, sales: 20 },
    { name: "Tue", revenue: 1100, sales: 74 },
    { name: "Wed", revenue: 1800, sales: 35 },
    { name: "Thu", revenue: 1400, sales: 50 },
    { name: "Fri", revenue: 1700, sales: 25 },
    { name: "Sat", revenue: 1600, sales: 70 },
    { name: "Sun", revenue: 1900, sales: 40 },
  ],
  Vijayawada: [
    { name: "Mon", revenue: 1300, sales: 18 },
    { name: "Tue", revenue: 1200, sales: 38 },
    { name: "Wed", revenue: 1450, sales: 22 },
    { name: "Thu", revenue: 1380, sales: 42 },
    { name: "Fri", revenue: 1600, sales: 28 },
    { name: "Sat", revenue: 1700, sales: 52 },
    { name: "Sun", revenue: 1650, sales: 33 },
  ],
  Bangalore: [
    { name: "Mon", revenue: 1000, sales: 15 },
    { name: "Tue", revenue: 1250, sales: 30 },
    { name: "Wed", revenue: 1100, sales: 40 },
    { name: "Thu", revenue: 1200, sales: 20 },
    { name: "Fri", revenue: 1350, sales: 25 },
    { name: "Sat", revenue: 1400, sales: 50 },
    { name: "Sun", revenue: 1500, sales: 35 },
  ],
};

const SalesChart = ({ store = "All" }) => {
  const data = weeklySalesData[store] || weeklySalesData["All"];

  return (
    <div className="bg-white dark:bg-darkCard p-6 rounded-xl shadow-lg mt-6">
      <h2 className="text-2xl font-semibold text-[rgba(79,79,79,0.7)] mb-4">
        Weekly Sales & Revenue Overview – {store}
      </h2>
      <ResponsiveContainer width="100%" height={300}>
        <LineChart data={data} margin={{ top: 5, right: 40, bottom: 5, left: 20 }}>
          <CartesianGrid strokeDasharray="3 3" stroke="#ccc" />
          <XAxis dataKey="name" stroke="#8884d8" />
          
          {/* Revenue Axis */}
          <YAxis
            yAxisId="left"
            stroke="rgba(224, 99, 99, 0.85)"
            label={{
              value: "Revenue (₹)",
              angle: -90,
              position: "insideLeft",
              fill: "rgba(224, 99, 99, 0.85)",
            }}
          />
          
          {/* Sales Axis */}
          <YAxis
            yAxisId="right"
            orientation="right"
            stroke="rgba(22, 127, 162, 0.85)"
            label={{
              value: "Sales (units)",
              angle: -90,
              position: "insideRight",
              fill: "rgba(22, 127, 162, 0.85)",
            }}
          />

          <Tooltip />
          <Legend />

          {/* Revenue Line */}
          <Line
            yAxisId="left"
            type="monotone"
            dataKey="revenue"
            stroke="rgba(224, 99, 99, 0.85)"
            strokeWidth={3}
            dot={{ r: 4 }}
            activeDot={{ r: 6 }}
            name="Revenue (₹)"
          />

          {/* Sales Line */}
          <Line
            yAxisId="right"
            type="monotone"
            dataKey="sales"
            stroke="rgba(22, 127, 162, 0.85)"
            strokeDasharray="5 5"
            strokeWidth={2.5}
            name="Sales"
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
};

export default SalesChart;
