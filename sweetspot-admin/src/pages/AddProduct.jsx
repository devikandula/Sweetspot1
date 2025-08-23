import React, { useState } from "react";

const AddProduct = () => {
  const [form, setForm] = useState({
    name: "",
    price: "",
    category: "Cake",
    info: "",
    eggOption: "Both",
    weightRange: "",
    pricePerHalfKg: "",
  });
  const [showPopup, setShowPopup] = useState(false);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Simulate product addition
    setShowPopup(true);
    setForm({
      name: "",
      price: "",
      category: "Cake",
      info: "",
      eggOption: "Both",
      weightRange: "",
      pricePerHalfKg: "",
    });

    // Hide popup after 3 seconds
    setTimeout(() => setShowPopup(false), 3000);
  };

  return (
    <div className="px-6 py-4 flex justify-center">
      <div className="w-full max-w-2xl">
        <h1 className="text-4xl font-semibold font-[Parastoo] text-[rgba(79,79,79,0.8)] mb-6 text-center">
          🍰 Add New Product
        </h1>

        <form
          onSubmit={handleSubmit}
          className="space-y-5 bg-white p-8 rounded-2xl shadow-lg border border-gray-100"
        >
          {/* Product Name */}
          <div>
            <label className="block font-medium text-gray-700 mb-1">
              Product Name
            </label>
            <input
              type="text"
              name="name"
              value={form.name}
              onChange={handleChange}
              required
              className="w-full border border-gray-300 rounded-xl px-4 py-2 focus:ring-2 focus:ring-[rgba(224,99,99,0.7)] focus:outline-none"
              placeholder="Chocolate Mousse Cake"
            />
          </div>

          {/* Info */}
          <div>
            <label className="block font-medium text-gray-700 mb-1">
              Info / Description
            </label>
            <textarea
              name="info"
              value={form.info}
              onChange={handleChange}
              rows="3"
              className="w-full border border-gray-300 rounded-xl px-4 py-2 focus:ring-2 focus:ring-[rgba(224,99,99,0.7)] focus:outline-none"
              placeholder="Delicious chocolate mousse layered with soft sponge..."
            />
          </div>

          {/* Price */}
          <div>
            <label className="block font-medium text-gray-700 mb-1">
              Base Price
            </label>
            <input
              type="number"
              name="price"
              value={form.price}
              onChange={handleChange}
              required
              className="w-full border border-gray-300 rounded-xl px-4 py-2 focus:ring-2 focus:ring-[rgba(224,99,99,0.7)] focus:outline-none"
              placeholder="499"
            />
          </div>

          {/* Category */}
          <div>
            <label className="block font-medium text-gray-700 mb-1">
              Category
            </label>
            <select
              name="category"
              value={form.category}
              onChange={handleChange}
              className="w-full border border-gray-300 rounded-xl px-4 py-2 focus:ring-2 focus:ring-[rgba(224,99,99,0.7)] focus:outline-none"
            >
              <option value="Cake">Cake</option>
              <option value="Pastry">Pastry</option>
              <option value="Cookies">Cookies</option>
            </select>
          </div>

          {/* Egg / Eggless Option */}
          <div>
            <label className="block font-medium text-gray-700 mb-1">
              Egg Option
            </label>
            <div className="flex gap-4">
              {["Egg", "Eggless", "Both"].map((opt) => (
                <label
                  key={opt}
                  className={`px-4 py-2 rounded-lg border cursor-pointer transition ${
                    form.eggOption === opt
                      ? "bg-[rgba(224,99,99,0.85)] text-white border-transparent"
                      : "border-gray-300 hover:border-[rgba(224,99,99,0.7)]"
                  }`}
                >
                  <input
                    type="radio"
                    name="eggOption"
                    value={opt}
                    checked={form.eggOption === opt}
                    onChange={handleChange}
                    className="hidden"
                  />
                  {opt}
                </label>
              ))}
            </div>
          </div>

          {/* Weight Range */}
          <div>
            <label className="block font-medium text-gray-700 mb-1">
              Weight Range
            </label>
            <select
              name="weightRange"
              value={form.weightRange}
              onChange={handleChange}
              className="w-full border border-gray-300 rounded-xl px-4 py-2 focus:ring-2 focus:ring-[rgba(224,99,99,0.7)] focus:outline-none"
            >
              <option value="">Select weight range</option>
              <option value="0.5-1kg">0.5kg - 1kg</option>
              <option value="1-2kg">1kg - 2kg</option>
              <option value="2-3kg">2kg - 3kg</option>
            </select>
          </div>

          {/* Price per 0.5kg */}
          <div>
            <label className="block font-medium text-gray-700 mb-1">
              Price per 0.5kg
            </label>
            <input
              type="number"
              name="pricePerHalfKg"
              value={form.pricePerHalfKg}
              onChange={handleChange}
              className="w-full border border-gray-300 rounded-xl px-4 py-2 focus:ring-2 focus:ring-[rgba(224,99,99,0.7)] focus:outline-none"
              placeholder="250"
            />
          </div>

          {/* Submit */}
          <button
            type="submit"
            className="w-full bg-[rgba(224,99,99,0.85)] hover:bg-[rgba(224,99,99,1)] text-white font-semibold py-3 rounded-xl shadow-md transition"
          >
            ➕ Add Product
          </button>
        </form>

        {/* Popup */}
        {showPopup && (
          <div className="mt-6 bg-green-100 border border-green-300 text-green-800 px-4 py-3 rounded-xl shadow-md text-center">
            🎉 Product added successfully!
          </div>
        )}
      </div>
    </div>
  );
};

export default AddProduct;
