import React, { useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import {
  Home,
  Package,
  PlusCircle,
  Users,
  MessageSquare,
  Gift,
  Truck,
  BarChart2,
  Settings,
  User,
  Store,
  LogOut,
  Menu,
} from "lucide-react";

const Sidebar = ({ isOpen, toggleSidebar }) => {
  const location = useLocation();
  const navigate = useNavigate();
  const [activeShimmer, setActiveShimmer] = useState(null);

  const handleLogout = () => {
    localStorage.removeItem("isLoggedIn");
    localStorage.removeItem("adminName");
    navigate("/login");
  };

  const handleLinkClick = (path) => {
    setActiveShimmer(path);
    setTimeout(() => setActiveShimmer(null), 1000); // shimmer duration
  };

  const links = [
    { name: "Dashboard", path: "/", icon: <Home size={20} /> },
    { name: "Orders-Overview", path: "/orders", icon: <Package size={20} /> },
    { name: "Products", path: "/products", icon: <Package size={20} /> },
    { name: "Add Admin", path: "/add-admin", icon: <User size={20} /> },
    { name: "Add Product", path: "/add-product", icon: <PlusCircle size={20} /> },
    { name: "Customers", path: "/customers", icon: <Users size={20} /> },
    { name: "Feedback", path: "/feedback", icon: <MessageSquare size={20} /> },
    { name: "Offers", path: "/offers", icon: <Gift size={20} /> },
    { name: "Delivery", path: "/delivery", icon: <Truck size={20} /> },
    { name: "Analytics", path: "/analytics", icon: <BarChart2 size={20} /> },
    { name: "Store", path: "/store-management", icon: <Store size={20} /> },
    { name: "Settings", path: "/settings", icon: <Settings size={20} /> },
    { name: "Profile", path: "/profile", icon: <User size={20} /> },
  ];

  return (
    <div
      className={`${
        isOpen ? "w-56" : "w-20"
      } overflow-y-auto bg-[rgba(224,99,99,0.85)] text-white h-screen sticky top-0 left-0 z-50 transition-all duration-300 flex flex-col justify-between`}
    >
      {/* Top section: Logo & Toggle */}
      <div className="flex items-center justify-between p-4">
        <div className="font-parastoo text-2xl tracking-wider text-white">
          {isOpen ? "SweetSpot" : "SS"}
        </div>
        <button
          onClick={toggleSidebar}
          className="text-white focus:outline-none"
        >
          <Menu size={22} />
        </button>
      </div>

      {/* Navigation links */}
      <nav className="flex flex-col gap-1 px-2 flex-1">
        {links.map((link) => (
          <Link
            key={link.name}
            to={link.path}
            onClick={() => handleLinkClick(link.path)}
            className={`flex items-center gap-4 p-3 rounded-md relative transition-all duration-200
              ${
                location.pathname === link.path
                  ? "bg-gradient-to-r from-[#ff9a9e] via-[#fad0c4] to-[#fad0c4] text-gray-900 font-bold" // same colors as admin cards
                  : "hover:bg-[rgba(219,117,128,0.925)]"
              }
              ${activeShimmer === link.path ? "animate-flash" : ""}
            `}
          >
            <span>{link.icon}</span>
            {isOpen && <span className="text-md font-semibold">{link.name}</span>}
          </Link>
        ))}
      </nav>

      {/* Logout */}
      <div className="p-3 mb-2">
        <button
          onClick={() => {
            handleLinkClick("logout");
            setTimeout(handleLogout, 1000);
          }}
          className={`w-full flex items-center gap-3 p-2 rounded-md bg-white text-[rgba(224,99,99,0.85)] font-semibold hover:bg-pink-100 transition
            ${activeShimmer === "logout" ? "animate-flash" : ""}
          `}
        >
          <LogOut size={20} />
          {isOpen && <span>Logout</span>}
        </button>
      </div>
    </div>
  );
};

export default Sidebar;
