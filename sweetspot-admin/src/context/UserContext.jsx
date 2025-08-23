// context/UserContext.jsx
import React, { createContext, useState, useEffect } from "react";

export const UserContext = createContext();

export const UserProvider = ({ children }) => {
  const [adminName, setAdminName] = useState("Admin"); // default

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
