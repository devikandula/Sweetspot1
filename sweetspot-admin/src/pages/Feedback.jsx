import React, { useState } from "react";

const Feedback = () => {
  const [selectedCity, setSelectedCity] = useState("All Feedback");

  const allFeedbacks = [
    {
      name: "Kiran Rao",
      message: "Loved the chocolate cake! Fast delivery too.",
      location: "Hyderabad",
      rating: 5,
    },
    {
      name: "Ayesha Malhotra",
      message: "Packaging was beautiful and taste was perfect!",
      location: "Vijayawada",
      rating: 4,
    },
    {
      name: "Ravi Teja",
      message: "The Black Forest cake was fresh and amazing!",
      location: "Hyderabad",
      rating: 5,
    },
    {
      name: "Sneha Patil",
      message: "Easy ordering experience and great customer service.",
      location: "Bangalore",
      rating: 4,
    },
    {
      name: "Ajay Kumar",
      message: "My daughter loved the unicorn cake design!",
      location: "Vijayawada",
      rating: 5,
    },
    {
      name: "Nikita Sharma",
      message: "Custom message was beautifully done on the cake.",
      location: "Hyderabad",
      rating: 4,
    },
    {
      name: "Rahul Yadav",
      message: "Delivery was delayed but cake was delicious!",
      location: "Bangalore",
      rating: 3,
    },
    {
      name: "Megha Jain",
      message: "Frosting was just the right amount, perfect sweetness!",
      location: "Bangalore",
      rating: 5,
    },
    {
      name: "Deepika Reddy",
      message: "Thank you for handling last-minute order so well.",
      location: "Hyderabad",
      rating: 4,
    },
  ];

  const cities = ["All Feedback", "Hyderabad", "Vijayawada", "Bangalore"];

  const filteredFeedbacks =
    selectedCity === "All Feedback"
      ? allFeedbacks
      : allFeedbacks.filter((f) => f.location === selectedCity);

  return (
    <div className="px-6 py-4">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-4xl font-semibold font-[Parastoo] text-[rgba(79,79,79,0.66)]">
          Customer Feedback
        </h1>

        {/* Dropdown */}
        <select
          value={selectedCity}
          onChange={(e) => setSelectedCity(e.target.value)}
          className="border border-[rgba(224,99,99,0.4)] rounded-md px-4 py-2 text-sm font-medium focus:outline-none focus:ring-2 focus:ring-[rgba(224,99,99,0.5)]"
        >
          {cities.map((city, index) => (
            <option key={index} value={city}>
              {city}
            </option>
          ))}
        </select>
      </div>

      {/* Feedback Cards */}
      <div className="grid gap-4 md:grid-cols-2">
        {filteredFeedbacks.length > 0 ? (
          filteredFeedbacks.map((fb, idx) => (
            <div
              key={idx}
              className="bg-white border border-pink-100 rounded-xl p-5 shadow-md hover:shadow-lg transition"
            >
              <h3 className="text-lg font-semibold text-[rgba(224,99,99,0.85)]">
                {fb.name}{" "}
                <span className="text-sm text-gray-500">({fb.location})</span>
              </h3>

              {/* Stars */}
              <div className="mt-1 text-yellow-500">
                {"★".repeat(fb.rating) + "☆".repeat(5 - fb.rating)}
              </div>

              <p className="mt-2 text-[rgba(87,84,84,0.7)] italic">{fb.message}</p>
            </div>
          ))
        ) : (
          <p className="text-gray-500">No feedback found for {selectedCity}.</p>
        )}
      </div>
    </div>
  );
};

export default Feedback;
