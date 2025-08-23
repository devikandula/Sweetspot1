import React from "react";
import {
  Card,
  CardContent
} from "./card.jsx";
import { Bar, Line, Pie, Doughnut } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  LineElement,
  PointElement,
  ArcElement,
  Tooltip,
  Legend,
} from "chart.js";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  LineElement,
  PointElement,
  ArcElement,
  Tooltip,
  Legend
);

const Dashboard = () => {
  const mainColor = "rgba(224, 99, 99, 0.85)";
  const altColor = "rgba(79,79,79,0.7)";

  const smallChartOptions = {
  responsive: true,
  maintainAspectRatio: false,
};

  const kpiStyle = "text-xl font-semibold text-[rgba(79,79,79,0.66)]";

  // 1. Overview KPIs
  const kpis = [
    { label: "Total Orders", value: "1,250" },
    { label: "Total Revenue", value: "₹2.5L" },
    { label: "New Customers", value: "320" },
    { label: "Top Cake", value: "Chocolate Truffle" },
    { label: "Avg. Delivery Time", value: "32 mins" },
    { label: "Avg. Rating", value: "4.7★" },
  ];

  // 2. Sales Performance
  const orderData = {
    labels: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
    datasets: [{
      label: "Orders",
      data: [50, 75, 60, 90, 120, 80, 100],
      backgroundColor: mainColor,
    }],
  };

  const revenueData = {
    labels: ["Jan", "Feb", "Mar", "Apr", "May"],
    datasets: [{
      label: "Revenue",
      data: [1200, 1800, 1600, 2000, 2200],
      borderColor: mainColor,
      backgroundColor: "rgba(224, 99, 99, 0.2)",
    }],
  };

  // 3. Product Insights
  const topCakesData = {
    labels: ["Chocolate", "Vanilla", "Red Velvet", "Fruit", "Black Forest"],
    datasets: [{
      data: [300, 250, 150, 200, 180],
      backgroundColor: [
        mainColor,
        "rgba(220, 117, 186, 0.92)",
        "rgba(215, 135, 157, 1)",
        "rgba(224, 99, 216, 0.85)",
        "rgba(219, 117, 128, 0.925)",
      ],
    }],
  };

  // 4. Customer Insights (dummy)
  const customerData = {
    labels: ["New", "Returning"],
    datasets: [{
      data: [70, 30],
      backgroundColor: [mainColor, "rgba(224, 99, 216, 0.85)"],
    }],
  };

  // 5. Order & Delivery
  const deliveryData = {
    labels: ["<30 min", "30-45 min", ">45 min"],
    datasets: [{
      label: "Deliveries",
      data: [60, 30, 10],
      backgroundColor: [mainColor, "rgba(215, 135, 157, 1)", "rgba(220, 117, 186, 0.92)"],
    }],
  };

  // 6. Marketing & Campaigns (dummy)
  const promoData = {
    labels: ["No Promo", "10% Off", "BOGO"],
    datasets: [{
      data: [400, 300, 100],
      backgroundColor: [mainColor, "rgba(224, 99, 216, 0.85)", "rgba(215, 135, 157, 1)"],
    }],
  };

  return (
    <div className="bg-white min-h-screen p-8 font-[Parastoo]">
      <div className="bg-[rgba(224,99,99,0.15)] p-4 rounded-xl mb-8">
        <h1 className="text-3xl font-bold text-[rgba(224,99,99,0.9)] text-center">Sweetspot Analytics</h1>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {/* Section 1: KPIs */}
        {kpis.map((kpi, index) => (
          <Card key={index} className="text-center p-4">
            <CardContent>
              <div className="text-2xl text-[rgba(224,99,99,0.85)] font-bold">{kpi.value}</div>
              <div className="text-[rgba(79,79,79,0.7)] italic text-sm mt-1">{kpi.label}</div>
            </CardContent>
          </Card>
        ))}

        {/* Section 2: Sales */}
        <Card>
          <CardContent>
            <h2 className={kpiStyle}>Weekly Orders</h2>
            <Bar data={orderData} />
          </CardContent>
        </Card>
        <Card>
          <CardContent>
            <h2 className={kpiStyle}>Monthly Revenue</h2>
            <Line data={revenueData} />
          </CardContent>
        </Card>

        {/* Section 3: Product Insights */}
        <Card>
        <CardContent>
          <h2 className={kpiStyle}>Top-Selling Cakes</h2>
          <div className="h-[200px]">
          <Pie data={topCakesData} options={smallChartOptions} />
          </div>
        </CardContent>
        </Card>

        {/* Section 4: Customer Insights */}
        <Card>
        <CardContent>
         <h2 className={kpiStyle}>Customer Types</h2>
          <div className="h-[200px]">
          <Doughnut data={customerData} options={smallChartOptions} />
          </div>
         </CardContent>
         </Card>


        {/* Section 5: Delivery Time Distribution */}
        <Card>
          <CardContent>
            <h2 className={kpiStyle}>Delivery Time Insights</h2>
            <Bar data={deliveryData} />
          </CardContent>
        </Card>

        {/* Section 6: Promo Effectiveness */}
        <Card>
         <CardContent>
          <h2 className={kpiStyle}>Promotions & Discounts</h2>
           <div className="h-[200px]">
            <Doughnut data={promoData} options={smallChartOptions} />
           </div>
         </CardContent>
       </Card>

      </div>
    </div>
  );
};

export default Dashboard;
