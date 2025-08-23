import React, { useState } from "react";

const AddProduct = () => {
  const [form, setForm] = useState({ name: "", price: "", category: "Cake" });
  const [showPopup, setShowPopup] = useState(false);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Simulate product addition
    setShowPopup(true);
    setForm({ name: "", price: "", category: "Cake" });

    // Hide popup after 3 seconds
    setTimeout(() => setShowPopup(false), 3000);
  };

  return (
    <div className="px-6 py-4">
      <h1 className="text-4xl font-semibold font-[Parastoo] text-[rgba(79,79,79,0.66)] mb-6">
        Add New Product
      </h1>

      <form
        onSubmit={handleSubmit}
        className="space-y-4 bg-white p-6 rounded-xl shadow-md w-full max-w-xl"
      >
        <div>
          <label className="block font-medium text-gray-700 mb-1">Product Name</label>
          <input
            type="text"
            name="name"
            value={form.name}
            onChange={handleChange}
            required
            className="w-full border rounded-lg px-4 py-2"
            placeholder="Chocolate Mousse Cake"
          />
        </div>

        <div>
          <label className="block font-medium text-gray-700 mb-1">Price</label>
          <input
            type="number"
            name="price"
            value={form.price}
            onChange={handleChange}
            required
            className="w-full border rounded-lg px-4 py-2"
            placeholder="499"
          />
        </div>

        <div>
          <label className="block font-medium text-gray-700 mb-1">Category</label>
          <select
            name="category"
            value={form.category}
            onChange={handleChange}
            className="w-full border rounded-lg px-4 py-2"
          >
            <option value="Cake">Cake</option>
            <option value="Pastry">Pastry</option>
            <option value="Cookies">Cookies</option>
          </select>
        </div>

        <button
          type="submit"
          className="bg-[rgba(224,99,99,0.85)] hover:bg-[rgba(224,99,99,1)] text-white font-semibold py-2 px-6 rounded-lg"
        >
          Add Product
        </button>
      </form>

      {/* ✅ Popup Message */}
      {showPopup && (
        <div className="mt-6 bg-green-100 border border-green-300 text-green-800 px-4 py-3 rounded-md transition-opacity duration-300 shadow-md w-full max-w-xl">
          🎉 Product added successfully!
        </div>
      )}
    </div>
  );
};

export default AddProduct;
