import React, { useState } from "react";
import { addAdmin, getAdmins, removeAdmin } from "../data/adminData";

const initialState = {
  name: "",
  email: "",
  phone: "",
  location: "",
  gender: "",
  dob: "",
  joinedDate: "",
  bio: "",
  profilePic: "",
};

const AddAdmin = () => {
  const [form, setForm] = useState(initialState);
  const [showToast, setShowToast] = useState(false);
    const [admins, setAdmins] = useState(getAdmins()); 
  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setForm((prev) => ({ ...prev, profilePic: reader.result }));
      };
      reader.readAsDataURL(file);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    addAdmin({ ...form, role: "Branch Admin" });
    setShowToast(true);
    setForm(initialState);
    setTimeout(() => setShowToast(false), 2000);
  };

    const handleRemove = (index) => {
    removeAdmin(index);
    setAdmins(getAdmins());
  };

  return (
    <div className="flex flex-col items-center p-6 mt-6">
      <div className="bg-white dark:bg-darkCard p-6 rounded-xl shadow-md w-full max-w-2xl">
        <h2 className="text-3xl font-semibold mb-6 text-[rgba(79,79,79,0.66)] font-[Parastoo]">
          Add Admin
        </h2>
        <form onSubmit={handleSubmit}>
          {/* Name */}
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-600 mb-1">Name</label>
            <input
              type="text"
              name="name"
              value={form.name}
              onChange={handleChange}
              className="w-full border border-gray-300 p-2 rounded-md"
              required
            />
          </div>
          {/* Email */}
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-600 mb-1">Email</label>
            <input
              type="email"
              name="email"
              value={form.email}
              onChange={handleChange}
              className="w-full border border-gray-300 p-2 rounded-md"
              required
            />
          </div>
          {/* Phone */}
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-600 mb-1">Phone Number</label>
            <input
              type="tel"
              name="phone"
              value={form.phone}
              onChange={handleChange}
              className="w-full border border-gray-300 p-2 rounded-md"
              required
            />
          </div>
          {/* Profile Picture */}
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-600 mb-1">Upload Profile Picture</label>
            <input
              type="file"
              accept="image/*"
              onChange={handleImageUpload}
              className="w-full border border-gray-300 p-2 rounded-md"
            />
          </div>
          {/* Location */}
            <div className="mb-4">
            <label className="block text-sm font-medium text-gray-600 mb-1">Location</label>
            <select
                name="location"
                value={form.location}
                onChange={handleChange}
                className="w-full border border-gray-300 p-2 rounded-md"
                required
            >
                <option value="">Select Branch</option>
                <option value="Hyderabad">Hyderabad</option>
                <option value="Vijayawada">Vijayawada</option>
                <option value="Bangalore">Bangalore</option>
            </select>
            </div>
          {/* Gender */}
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-600 mb-1">Gender</label>
            <select
              name="gender"
              value={form.gender}
              onChange={handleChange}
              className="w-full border border-gray-300 p-2 rounded-md"
              required
            >
              <option value="">Select</option>
              <option value="Female">Female</option>
              <option value="Male">Male</option>
              <option value="Other">Other</option>
            </select>
          </div>
          {/* Date of Birth */}
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-600 mb-1">Date of Birth</label>
            <input
              type="date"
              name="dob"
              value={form.dob}
              onChange={handleChange}
              className="w-full border border-gray-300 p-2 rounded-md"
              required
            />
          </div>
          {/* Joined Date */}
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-600 mb-1">Joined Date</label>
            <input
              type="date"
              name="joinedDate"
              value={form.joinedDate}
              onChange={handleChange}
              className="w-full border border-gray-300 p-2 rounded-md"
              required
            />
          </div>
          {/* Bio */}
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-600 mb-1">Short Bio / Description</label>
            <textarea
              name="bio"
              value={form.bio}
              onChange={handleChange}
              rows={3}
              className="w-full border border-gray-300 p-2 rounded-md"
              placeholder="Write something about the admin..."
              required
            />
          </div>
          {/* Save Button */}
          <button
            type="submit"
            className="bg-[rgba(224,99,99,0.85)] hover:bg-[rgba(224,99,99,1)] text-white px-4 py-2 rounded-md"
          >
            Add Admin
          </button>
        </form>
        {/* Toast */}
        {showToast && (
          <p className="mt-3 text-green-600 font-medium">Admin added successfully!</p>
        )}
      </div>
      {/* Admin List */}
      <div className="bg-white mt-20 dark:bg-darkCard p-6 rounded-xl shadow-md w-full max-w-2xl">
        <h3 className="text-xl font-bold mb-4">Current Admins</h3>
        <ul>
          {admins.map((admin, idx) => (
            <li key={idx} className="mb-2 p-2 border rounded flex justify-between items-center">
              <span>
                <strong>{admin.name}</strong> | {admin.email} | {admin.location} | {admin.role}
              </span>
              <button
                onClick={() => handleRemove(idx)}
                className="ml-4 px-3 py-1 bg-red-500 text-white rounded hover:bg-red-600"
              >
                Remove
              </button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default AddAdmin;