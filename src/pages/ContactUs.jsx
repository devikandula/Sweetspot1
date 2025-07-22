import React, { useState } from 'react';
import { FaEnvelope, FaPhoneAlt, FaMapMarkerAlt } from 'react-icons/fa';
import NavBar from '../components/NavBar';
const ContactUs = () => {
  const [showFeedback, setShowFeedback] = useState(false);
  const [selectedRating, setSelectedRating] = useState(0);
  const [showThankYou, setShowThankYou] = useState(false);
  const [feedbackError, setFeedbackError] = useState("");
  const [ratingError, setRatingError] = useState("");

  const handleFeedbackSubmit = (e) => {
    e.preventDefault();
    const feedbackText = e.target.feedback.value.trim();

    let hasError = false;

    if (selectedRating === 0) {
      setRatingError("Please select a rating.");
      hasError = true;
    } else {
      setRatingError("");
    }

    if (!feedbackText) {
      setFeedbackError("Please write your feedback.");
      hasError = true;
    } else {
      setFeedbackError("");
    }

    if (hasError) return;

    setShowThankYou(true);
    setTimeout(() => {
      setShowThankYou(false);
      setShowFeedback(false);
      setSelectedRating(0);
      e.target.reset();
    }, 1500);
  };

  return (
    <>
    <NavBar />
    <div className="relative min-h-screen flex flex-col items-center justify-center px-6 py-12 font-parastoo overflow-hidden">
      {/* Background */}
      
      <div
        className="absolute inset-0 bg-cover bg-center blur-[6px] scale-110"
        style={{ backgroundImage: "url('/image3.png')", zIndex: -2 }}
      />
      <div className="absolute inset-0 bg-black/30 z-[-1]" />

      {/* NavBar */}
      <div className="text-center mb-10 z-10">
        <h1 className="text-5xl text-black font-bold">
          Get in Touch <span role="img" aria-label="cake">🍰</span>
        </h1>
        <p className="text-2xl italic text-black font-medium mt-3">
          Whether it’s a query or a cake craving — we’re all ears at <span className="font-semibold">Sweetspot</span>.
        </p>
      </div>

      {/* Contact Form */}
      <div className="z-10 bg-white/40 backdrop-blur-xl shadow-2xl rounded-2xl p-10 w-full max-w-5xl grid grid-cols-1 md:grid-cols-2 gap-10 border border-white/30">
        {/* Form */}
        <form className="space-y-6 text-black">
          <div>
            <label className="block text-xl mb-1">Name</label>
            <input
              type="text"
              placeholder="Your Name"
              className="w-full p-3 border border-alt3 rounded-md bg-white/70 backdrop-blur focus:ring-2 focus:ring-primary"
            />
          </div>
          <div>
            <label className="block text-xl mb-1">Email</label>
            <input
              type="email"
              placeholder="you@example.com"
              className="w-full p-3 border border-alt3 rounded-md bg-white/70 backdrop-blur focus:ring-2 focus:ring-primary"
            />
          </div>
          <div>
            <label className="block text-xl mb-1">Message</label>
            <textarea
              rows="4"
              placeholder="Write your message here..."
              className="w-full p-3 border border-alt3 rounded-md bg-white/70 backdrop-blur focus:ring-2 focus:ring-primary"
            />
          </div>
          <button
            type="submit"
            className="bg-[rgba(224,99,99,0.85)] text-white py-2 px-6 rounded-md hover:bg-[rgba(220,117,186,0.92)] transition-all"
          >
            Send Message
          </button>
        </form>

        {/* Info */}
        <div className="space-y-10 text-black">
          <div className="flex items-start gap-5">
            <FaEnvelope className="text-[rgba(224,99,99,0.85)] text-3xl mt-1" />
            <div>
              <h3 className="text-3xl font-bold mb-1">Email</h3>
              <p className="text-xl font-medium">hello@sweetspot.com</p>
            </div>
          </div>
          <div className="flex items-start gap-5">
            <FaPhoneAlt className="text-[rgba(224,99,99,0.85)] text-3xl mt-1" />
            <div>
              <h3 className="text-3xl font-bold mb-1">Phone</h3>
              <p className="text-xl font-medium">+91 98765 43210</p>
            </div>
          </div>
          <div className="flex items-start gap-5">
            <FaMapMarkerAlt className="text-[rgba(224,99,99,0.85)] text-3xl mt-1" />
            <div>
              <h3 className="text-3xl font-bold mb-1">Visit Us</h3>
              <p className="text-xl font-medium leading-relaxed">
                Sweetspot Bakery,<br />
                Banjara Hills, Hyderabad
              </p>
            </div>
          </div>

          {/* Feedback Button */}
          <div className="pt-4 flex justify-center">
            <button
              onClick={() => setShowFeedback(true)}
              className="bg-[rgba(224,99,99,0.85)] text-white px-10 py-4 rounded-md text-2xl font-semibold hover:bg-[rgba(220,117,186,0.92)] transition-all duration-200"
            >
              Give Feedback
            </button>
          </div>
        </div>
      </div>

      {/* Fake Map */}
      <div className="z-10 mt-16 w-full max-w-5xl rounded-2xl overflow-hidden shadow-xl border border-white/30 relative">
        <img src="/fake-map.png" alt="Fake Map" className="w-full h-[400px] object-cover" />
        <div className="absolute top-[45%] left-[50%] -translate-x-1/2 -translate-y-1/2 text-red-600 text-4xl select-none">
          📍
        </div>
        <div className="absolute top-[55%] left-[50%] -translate-x-1/2 text-black bg-white/80 px-4 py-1 rounded shadow-md text-lg font-semibold">
          Sweetspot Bakery
        </div>
      </div>

      {/* Feedback Modal */}
      {showFeedback && (
        <div className="fixed inset-0 z-50 bg-black/50 flex items-center justify-center px-4">
          <div className="bg-white rounded-2xl shadow-xl p-8 w-full max-w-xl relative font-parastoo">
            <button
              className="absolute top-4 right-4 text-gray-500 hover:text-black text-2xl"
              onClick={() => setShowFeedback(false)}
            >
              ×
            </button>

            {!showThankYou ? (
              <>
                <h2 className="text-3xl font-bold text-center mb-6 text-[rgba(79,79,79,0.7)]">
                  We Value Your Feedback
                </h2>
                <form className="space-y-6 text-black" onSubmit={handleFeedbackSubmit}>
                  <div>
                    <label className="block text-lg mb-1">Your Name (Optional)</label>
                    <input
                      type="text"
                      placeholder="Enter your name"
                      className="w-full p-3 border rounded-md bg-white/70 backdrop-blur focus:ring-2 focus:ring-primary"
                    />
                  </div>

                  {/* Rating */}
                  <div>
                    <label className="block text-lg mb-1">Rating</label>
                    <div className="flex space-x-2 text-3xl">
                      {[1, 2, 3, 4, 5].map((star) => (
                        <button
                          key={star}
                          type="button"
                          onClick={() => setSelectedRating(star)}
                          className={`transition-all duration-150 ${
                            star <= selectedRating ? 'text-yellow-400 scale-110' : 'text-gray-300'
                          }`}
                        >
                          ★
                        </button>
                      ))}
                    </div>
                    {ratingError && (
                      <p className="text-red-600 text-sm mt-1">{ratingError}</p>
                    )}
                    {selectedRating > 0 && (
                      <p className="text-sm mt-1 text-[rgba(79,79,79,0.8)]">
                        You rated: {selectedRating} star{selectedRating > 1 ? 's' : ''}
                      </p>
                    )}
                  </div>

                  <div>
                    <label className="block text-lg mb-1">Your Feedback</label>
                    <textarea
                      name="feedback"
                      rows="4"
                      placeholder="Write your thoughts here..."
                      className="w-full p-3 border rounded-md bg-white/70 backdrop-blur focus:ring-2 focus:ring-primary"
                    ></textarea>
                    {feedbackError && (
                      <p className="text-red-600 text-sm mt-1">{feedbackError}</p>
                    )}
                  </div>

                  <button
                    type="submit"
                    className="bg-[rgba(224,99,99,0.85)] text-white py-2 px-6 rounded-md hover:bg-[rgba(220,117,186,0.92)] transition-all"
                  >
                    Submit
                  </button>
                </form>
              </>
            ) : (
              <div className="text-center py-10">
                <h3 className="text-3xl font-semibold text-[rgba(79,79,79,0.7)] mb-4">
                  Thank you for your feedback! 💖
                </h3>
              </div>
            )}
          </div>
        </div>
      )}
    </div>
      </>
  );
};

export default ContactUs;