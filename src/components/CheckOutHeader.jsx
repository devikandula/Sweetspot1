import React from "react";
import { useNavigate } from "react-router-dom"; 
export default function CheckOutHeader() {
  const navigate = useNavigate();

  return (
    <div className="bg-white">
      <div className="max-w-5xl mx-auto px-4 flex items-center gap-6 py-6">
        {/* Back Arrow Button */}
        <button
          onClick={() => navigate("/cakes")}
          className="flex-shrink-0 flex items-center justify-center w-14 h-14 rounded-full bg-red-200 shadow-sm hover:bg-rose-100 transition-colors"
          aria-label="Go back"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="28"
            height="28"
            viewBox="0 0 24 24"
            fill="none"
            strokeWidth="3.2"
            strokeLinecap="round"
            strokeLinejoin="round"
            stroke="#da8989"
          >
            <path d="M15 18l-6-6 6-6" />
          </svg>
        </button>

        {/* Heading and Subheading */}
        <div className="text-left">
          <h1 className="text-5xl font-extrabold text-[rgba(79,79,79,0.66)] tracking-tight font-parastoo flex items-center gap-2">
            Your Perfect Order Awaits <span className="inline-block animate-truck">🚚</span>
          </h1>
          <p className="text-lg italic text-[rgba(79,79,79,0.7)] font-sans mt-1">
            Where cravings meet convenience 🎂
          </p>
        </div>
      </div>

      {/* Truck Animation */}
      <style>{`
        @keyframes drive {
          0% { transform: translateX(0); }
          50% { transform: translateX(10px); }
          100% { transform: translateX(0); }
        }
        .animate-truck {
          animation: drive 2s ease-in-out infinite;
          display: inline-block;
        }
      `}</style>
    </div>
  );
}