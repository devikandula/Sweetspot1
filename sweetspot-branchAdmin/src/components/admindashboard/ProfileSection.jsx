import React, { useContext, useState } from "react";
import { UserContext } from "../../context/UserContext";

const ProfileSection = () => {
  const { adminName, setAdminName } = useContext(UserContext);
  const [editing, setEditing] = useState(false);
  const [newName, setNewName] = useState(adminName);

  const handleSave = () => {
    setAdminName(newName);
    setEditing(false);
  };

  return (
    <div className="p-4 rounded shadow bg-white dark:bg-gray-800">
      <h2 className="text-2xl font-bold mb-2">Profile</h2>
      {editing ? (
        <>
          <input
            className="p-2 border mb-2 w-full dark:bg-gray-700 dark:text-white"
            value={newName}
            onChange={(e) => setNewName(e.target.value)}
          />
          <button onClick={handleSave} className="px-3 py-1 bg-green-500 text-white mr-2">Save</button>
          <button onClick={() => setEditing(false)} className="px-3 py-1 bg-gray-400 text-white">Cancel</button>
        </>
      ) : (
        <>
          <p className="text-lg mb-2">Hi <strong>{adminName}</strong> 👋</p>
          <button onClick={() => setEditing(true)} className="px-3 py-1 bg-blue-500 text-white">Edit Name</button>
        </>
      )}
    </div>
  );
};

export default ProfileSection;
