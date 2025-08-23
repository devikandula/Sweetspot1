// src/App.jsx
import React from 'react';
import { Routes, Route } from 'react-router-dom';
import AdminDashboard from './pages/AdminDashboard';
import Orders from './pages/Orders';
import Products from './pages/Products';
import AddProduct from './pages/AddProduct';
import Customers from './pages/Customers';
import Feedback from './pages/Feedback';
import Offers from './pages/Offers';
import Delivery from './pages/Delivery';
import Analytics from './pages/Analytics';
import StoreManagement from './components/admin/StoreManagement';
import Settings from './pages/Settings';
import ProfilePage from './pages/ProfilePage';
import Layout from './components/admin/layout/Layout';
import EditCakePage from './components/admin/EditCakePage';
import FeaturedCakes from './components/admin/FeaturedCakes';
import Cake from "./components/cake_admin_analytics";
import AddAdmin from './pages/AddAdmin';
import LoginPage from './pages/LoginPage';
const App = () => {
  const RequireAuth = ({ children }) => {
  const isLoggedIn = localStorage.getItem("isLoggedIn") === "true";
  return isLoggedIn ? children : <LoginPage />;
};
  return (
    <Routes>      
      <Route path="/login" element={<LoginPage />} />
      <Route path="/" element={
        <RequireAuth>
          <Layout />
        </RequireAuth>
      }>
        <Route index element={<AdminDashboard />} />
        <Route path="dashboard" element={<AdminDashboard />} />
        <Route path="orders" element={<Orders />} />
        <Route path="products" element={<Products />} />
        <Route path="add-product" element={<AddProduct />} />
        <Route path="customers" element={<Customers />} />
        <Route path="feedback" element={<Feedback />} />
        <Route path="offers" element={<Offers />} />
        <Route path="delivery" element={<Delivery />} />
        <Route path="analytics" element={<Cake />} />
        <Route path="store-management" element={<StoreManagement />} />
        <Route path="settings" element={<Settings />} />
        <Route path="profile" element={<ProfilePage />} />
        <Route path="/edit/:id" element={<EditCakePage />} />
        <Route path="/featured" element={<FeaturedCakes />} />
        <Route path="/add-admin" element={<AddAdmin />} />
      </Route>
    </Routes>
  );
};

export default App;
