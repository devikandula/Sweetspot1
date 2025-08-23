import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Eye, EyeOff, User, Lock } from "lucide-react";
import { checkAdminLogin } from "../data/mainAdmin";

const LoginPage = () => {
  const [form, setForm] = useState({ email: "", password: "" });
  const [error, setError] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
    if (error) setError(""); // Clear error when user starts typing
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsLoading(true);
    
    if (checkAdminLogin(form.email, form.password)) {
      localStorage.setItem("isLoggedIn", "true");
      navigate("/");
      window.location.reload();
    } else {
      setError("Invalid email or password. Please try again.");
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex">
      {/* Left Side - Image */}
      <div className="hidden lg:flex lg:w-1/2 relative">
        <div className="w-full h-full bg-gradient-to-br from-[rgba(224,79,79,0.9)] to-[rgba(224,79,79,0.7)] flex items-center justify-center">
          <div className="text-center text-white p-12">
            {/* You can replace this with an actual image */}
            <div className="w-32 h-32 mx-auto mb-8 bg-white bg-opacity-20 rounded-full flex items-center justify-center">
              <User className="w-16 h-16 text-white" />
            </div>
            <h1 className="text-4xl font-bold mb-4">Welcome to SweetSpot</h1>
            <p className="text-xl opacity-90">Your Admin Dashboard Awaits</p>
            <div className="mt-8 text-sm opacity-75">
              <p>Manage your business with ease</p>
              <p>Secure • Reliable • Efficient</p>
            </div>
          </div>
        </div>
        {/* Uncomment and replace src with your actual image */}
        {/* <img 
          src="/path-to-your-image.jpg" 
          alt="SweetSpot Admin" 
          className="w-full h-full object-cover"
        /> */}
      </div>

      {/* Right Side - Login Form */}
      <div className="w-full lg:w-1/2 flex items-center justify-center p-8 bg-gray-50">
        <div className="w-full max-w-md">
          {/* Header */}
          <div className="text-center mb-8">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-white rounded-full shadow-lg mb-4">
              <Lock className="w-8 h-8 text-[rgba(224,79,79,1)]" />
            </div>
            <h2 className="text-3xl font-bold text-[rgb(79,79,79)] mb-2">Sign In</h2>
            <p className="text-gray-500">Access your admin dashboard</p>
          </div>

          {/* Login Form - No Box */}
          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Email Field */}
            <div className="space-y-2">
              <label className="text-sm font-medium text-[rgb(79,79,79)] block">
                Email Address
              </label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <User className="h-5 w-5 text-gray-400" />
                </div>
                <input
                  type="email"
                  name="email"
                  value={form.email}
                  onChange={handleChange}
                  className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-[rgba(224,79,79,0.2)] focus:border-[rgba(224,79,79,1)] transition-all duration-200 text-[rgb(79,79,79)] bg-white"
                  placeholder="admin@sweetspot.com"
                  required
                />
              </div>
            </div>

            {/* Password Field */}
            <div className="space-y-2">
              <label className="text-sm font-medium text-[rgb(79,79,79)] block">
                Password
              </label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <Lock className="h-5 w-5 text-gray-400" />
                </div>
                <input
                  type={showPassword ? "text" : "password"}
                  name="password"
                  value={form.password}
                  onChange={handleChange}
                  className="w-full pl-10 pr-12 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-[rgba(224,79,79,0.2)] focus:border-[rgba(224,79,79,1)] transition-all duration-200 text-[rgb(79,79,79)] bg-white"
                  placeholder="Enter your password"
                  required
                />
                <button
                  type="button"
                  className="absolute inset-y-0 right-0 pr-3 flex items-center"
                  onClick={() => setShowPassword(!showPassword)}
                >
                  {showPassword ? (
                    <EyeOff className="h-5 w-5 text-gray-400 hover:text-[rgba(224,79,79,1)] transition-colors" />
                  ) : (
                    <Eye className="h-5 w-5 text-gray-400 hover:text-[rgba(224,79,79,1)] transition-colors" />
                  )}
                </button>
              </div>
            </div>

            {/* Error Message */}
            {error && (
              <div className="bg-red-50 border border-red-200 rounded-xl p-3">
                <p className="text-sm text-red-600 flex items-center">
                  <svg className="w-4 h-4 mr-2 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clipRule="evenodd" />
                  </svg>
                  {error}
                </p>
              </div>
            )}

            {/* Submit Button */}
            <button
              type="submit"
              disabled={isLoading}
              className="w-full bg-[rgba(224,79,79,1)] hover:bg-[rgba(224,79,79,0.9)] text-white font-semibold py-3 px-4 rounded-xl transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-[rgba(224,79,79,0.3)] focus:ring-offset-2 disabled:opacity-70 disabled:cursor-not-allowed shadow-lg hover:shadow-xl"
            >
              {isLoading ? (
                <div className="flex items-center justify-center">
                  <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin mr-2"></div>
                  Signing In...
                </div>
              ) : (
                "Sign In"
              )}
            </button>

            {/* Footer Links */}
            <div className="text-center mt-6">
              <button 
                type="button"
                className="text-sm text-[rgba(224,79,79,1)] hover:text-[rgba(224,79,79,0.8)] font-medium transition-colors"
              >
                Forgot your password?
              </button>
            </div>
          </form>

          {/* Bottom Text */}
          <div className="text-center mt-8">
            <p className="text-sm text-gray-500">
              SweetSpot Admin Dashboard - Secured Access
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;