import React, { useState } from "react";
import { addBranch, getBranches, removeBranch } from "../../data/branchData";

const initialState = {
  name: "",
  location: "",
  manager: "",
  contact: "",
};

const StoreManagement = () => {
  const [form, setForm] = useState(initialState);
  const [showToast, setShowToast] = useState(false);
  const [branches, setBranches] = useState(getBranches());

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    addBranch(form);
    setBranches(getBranches());
    setShowToast(true);
    setForm(initialState);
    setTimeout(() => setShowToast(false), 2000);
  };

  const handleRemove = (index) => {
    removeBranch(index);
    setBranches(getBranches());
  };

  return (
    <div className="flex flex-col items-center p-6 mt-6">
      <h1 className="text-4xl font-bold mb-8 text-center text-[rgba(224,99,99,0.85)] font-[Parastoo]">
        Store Management
      </h1>
      <div className="bg-white dark:bg-darkCard p-6 rounded-xl shadow-md w-full max-w-2xl mb-8">
        <h2 className="text-3xl font-semibold mb-6 text-[rgba(79,79,79,0.66)] font-[Parastoo]">
          Add Branch
        </h2>
        <form onSubmit={handleSubmit}>
          {/* Branch Name */}
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-600 mb-1">Branch Name</label>
            <input
              type="text"
              name="name"
              value={form.name}
              onChange={handleChange}
              className="w-full border border-gray-300 p-2 rounded-md"
              required
            />
          </div>
          {/* Location (changed to input) */}
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-600 mb-1">Location</label>
            <input
              type="text"
              name="location"
              value={form.location}
              onChange={handleChange}
              className="w-full border border-gray-300 p-2 rounded-md"
              required
            />
          </div>
          {/* Manager */}
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-600 mb-1">Manager Name</label>
            <input
              type="text"
              name="manager"
              value={form.manager}
              onChange={handleChange}
              className="w-full border border-gray-300 p-2 rounded-md"
            />
          </div>
          {/* Contact */}
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-600 mb-1">Contact Number</label>
            <input
              type="tel"
              name="contact"
              value={form.contact}
              onChange={handleChange}
              className="w-full border border-gray-300 p-2 rounded-md"
            />
          </div>
          <button
            type="submit"
            className="bg-[rgba(224,99,99,0.85)] hover:bg-[rgba(224,99,99,1)] text-white px-4 py-2 rounded-md"
          >
            Add Branch
          </button>
        </form>
        {showToast && (
          <p className="mt-3 text-green-600 font-medium">Branch added successfully!</p>
        )}
      </div>
      {/* Branch List */}
      <div className="bg-white dark:bg-darkCard p-6 rounded-xl shadow-md w-full max-w-2xl">
        <h3 className="text-xl font-bold mb-4">Current Branches</h3>
        <ul>
          {branches.map((branch, idx) => (
            <li key={idx} className="mb-2 p-2 border rounded flex justify-between items-center">
              <span>
                <strong>{branch.name}</strong> - {branch.location}
                {branch.manager && <> | Manager: {branch.manager}</>}
                {branch.contact && <> | Contact: {branch.contact}</>}
              </span>
              <button
                onClick={() => handleRemove(idx)}
                className="ml-4 px-3 py-1 bg-red-500 text-white rounded hover:bg-red-600"
              >
                Delete
              </button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default StoreManagement;
