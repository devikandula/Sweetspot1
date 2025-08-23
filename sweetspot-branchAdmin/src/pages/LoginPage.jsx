import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { checkAdminLogin } from "../data/mainAdmin";

const LoginPage = () => {
    
  const [form, setForm] = useState({ email: "", password: "" });
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  }; 

    const handleSubmit = (e) => {
    e.preventDefault();
    if (checkAdminLogin(form.email, form.password)) {
        localStorage.setItem("isLoggedIn", "true");
        localStorage.setItem("loggedInEmail", form.email); 
        navigate("/");
        window.location.reload(); // Force reload so RequireAuth updates
    } else {
        setError("Invalid credentials. Please try again.");
    }
    };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <form
        onSubmit={handleSubmit}
        className="bg-white p-8 rounded shadow-md w-full max-w-sm"
      >
        <h2 className="text-2xl font-bold mb-6 text-center">Admin Login</h2>
        <div className="mb-4">
          <label className="block mb-1 text-gray-700">Email</label>
          <input
            type="email"
            name="email"
            value={form.email}
            onChange={handleChange}
            className="w-full border border-gray-300 p-2 rounded"
            required
          />
        </div>
        <div className="mb-4">
          <label className="block mb-1 text-gray-700">Password</label>
          <input
            type="password"
            name="password"
            value={form.password}
            onChange={handleChange}
            className="w-full border border-gray-300 p-2 rounded"
            required
          />
        </div>
        {error && <p className="text-red-500 mb-4">{error}</p>}
        <button
          type="submit"
          className="w-full bg-[rgba(224,99,99,0.85)] text-white py-2 rounded hover:bg-[rgba(224,99,99,1)]"
        >
          Login
        </button>
      </form>
    </div>
  );
};

export default LoginPage;