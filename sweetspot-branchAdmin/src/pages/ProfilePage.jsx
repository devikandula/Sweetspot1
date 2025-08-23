import React, { useContext, useState } from "react";
import { UserContext } from "../context/UserContext";
import { mainAdmins } from "../data/mainAdmin";

const ProfilePage = () => {
  const { adminName, updateAdminName } = useContext(UserContext);

  // Get logged-in user's email from localStorage
  const loggedInEmail = localStorage.getItem("loggedInEmail");
  const currentAdmin = mainAdmins.find(admin => admin.email === loggedInEmail) || {};
 
  // Initialize state from currentAdmin
  const [name, setName] = useState(currentAdmin.name || "");
  const [email, setEmail] = useState(currentAdmin.email || "");
  const [phone, setPhone] = useState(currentAdmin.phone || "");
  const [role, setRole] = useState(currentAdmin.role || "");
  const [location, setLocation] = useState(currentAdmin.location || "");
  const [gender, setGender] = useState(currentAdmin.gender || "");
  const [dob, setDob] = useState(currentAdmin.dob || "");
  const [joinedDate, setJoinedDate] = useState(currentAdmin.joinedDate || "");
  const [bio, setBio] = useState(currentAdmin.bio || "");
  const [profilePic, setProfilePic] = useState(currentAdmin.profilePic || "");
  const [showToast, setShowToast] = useState(false);

  const handleSave = () => {
    updateAdminName(name);
    setShowToast(true);
    setTimeout(() => setShowToast(false), 2000);
    // If you want to persist changes, you need to update mainAdmin.js or use a backend.
  };

  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setProfilePic(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <div className="flex flex-col lg:flex-row gap-8 p-6 mt-6">
      {/* Profile Card Preview */}
      <div className="bg-white dark:bg-darkCard p-6 rounded-xl shadow-md w-full max-w-sm text-center">
        <img
          src={
            profilePic ||
            "https://cdn-icons-png.flaticon.com/512/149/149071.png"
          }
          alt="Profile"
          className="w-28 h-28 rounded-full mx-auto mb-4 object-cover"
        />
        <h2 className="text-2xl font-semibold text-[rgba(79,79,79,0.8)] mb-1 font-[Parastoo]">
          {name || "Admin Name"}
        </h2>
        <p className="text-sm text-gray-500">{role || "Administrator"}</p>
        <p className="text-sm text-gray-500">{location || "India"}</p>
      </div>

      {/* Editable Form */}
      <div className="bg-white dark:bg-darkCard p-6 rounded-xl shadow-md w-full max-w-2xl">
        <h2 className="text-3xl font-semibold mb-6 text-[rgba(79,79,79,0.66)] font-[Parastoo]">
          Edit Profile
        </h2>

        {/* Admin Name */}
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-600 mb-1">
            Admin Name
          </label>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="w-full border border-gray-300 p-2 rounded-md"
          />
        </div>

        {/* Email */}
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-600 mb-1">
            Email
          </label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full border border-gray-300 p-2 rounded-md"
          />
        </div>

        {/* Phone */}
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-600 mb-1">
            Phone Number
          </label>
          <input
            type="tel"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            className="w-full border border-gray-300 p-2 rounded-md"
          />
        </div>

        {/* Profile Picture Upload */}
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-600 mb-1">
            Upload Profile Picture
          </label>
          <input
            type="file"
            accept="image/*"
            onChange={handleImageUpload}
            className="w-full border border-gray-300 p-2 rounded-md"
          />
        </div>

        {/* Role */}
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-600 mb-1">
            Role
          </label>
          <input
            type="text"
            value={role}
            onChange={(e) => setRole(e.target.value)}
            className="w-full border border-gray-300 p-2 rounded-md"
          />
        </div>

        {/* Location */}
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-600 mb-1">
            Location
          </label>
          <input
            type="text"
            value={location}
            onChange={(e) => setLocation(e.target.value)}
            className="w-full border border-gray-300 p-2 rounded-md"
          />
        </div>

        {/* Gender */}
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-600 mb-1">
            Gender
          </label>
          <select
            value={gender}
            onChange={(e) => setGender(e.target.value)}
            className="w-full border border-gray-300 p-2 rounded-md"
          >
            <option value="">Select</option>
            <option value="Female">Female</option>
            <option value="Male">Male</option>
            <option value="Other">Other</option>
          </select>
        </div>

        {/* Date of Birth */}
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-600 mb-1">
            Date of Birth
          </label>
          <input
            type="date"
            value={dob}
            onChange={(e) => setDob(e.target.value)}
            className="w-full border border-gray-300 p-2 rounded-md"
          />
        </div>

        {/* Joined Date */}
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-600 mb-1">
            Joined Date
          </label>
          <input
            type="date"
            value={joinedDate}
            onChange={(e) => setJoinedDate(e.target.value)}
            className="w-full border border-gray-300 p-2 rounded-md"
          />
        </div>

        {/* Bio */}
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-600 mb-1">
            Short Bio / Description
          </label>
          <textarea
            value={bio}
            onChange={(e) => setBio(e.target.value)}
            rows={3}
            className="w-full border border-gray-300 p-2 rounded-md"
            placeholder="Write something about yourself..."
          />
        </div>

        {/* Save Button */}
        <button
          onClick={handleSave}
          className="bg-[rgba(224,99,99,0.85)] hover:bg-[rgba(224,99,99,1)] text-white px-4 py-2 rounded-md"
        >
          Save Changes
        </button>

        {/* Toast */}
        {showToast && (
          <p className="mt-3 text-green-600 font-medium">Changes saved successfully!</p>
        )}
      </div>
    </div>
  );
};

export default ProfilePage;