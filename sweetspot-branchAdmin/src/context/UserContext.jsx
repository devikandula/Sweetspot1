// context/UserContext.jsx
import React, { createContext, useState, useEffect } from "react";
import { mainAdmins } from "../data/mainAdmin";

export const UserContext = createContext();

export const UserProvider = ({ children }) => {
  const [adminName, setAdminName] = useState(mainAdmins.name); // Use mainAdmin.name as default

  // Load from localStorage 
  useEffect(() => {
    const storedName = localStorage.getItem("adminName");
    if (storedName) {
      setAdminName(storedName);
    }
  }, []);

  // Update localStorage whenever adminName changes
  const updateAdminName = (newName) => {
    setAdminName(newName);
    localStorage.setItem("adminName", newName);
  };

  return (
    <UserContext.Provider value={{ adminName, updateAdminName }}>
      {children}
    </UserContext.Provider>
  );
};