import React, { useEffect, useState } from "react";

const Settings = () => {
  const [profilePic, setProfilePic] = useState(null);
  const [notifications, setNotifications] = useState({
    email: true,
    sms: false,
    push: true,
  });
  const [loginAlerts, setLoginAlerts] = useState(true);
  const [role, setRole] = useState("Admin");
  const [saved, setSaved] = useState(false);
  const [otpSent, setOtpSent] = useState(false);

  // Load saved settings on mount
  useEffect(() => {
    const savedPic = localStorage.getItem("profilePic");
    const savedNotif = localStorage.getItem("notifications");
    const savedRole = localStorage.getItem("role");
    const saved2FA = localStorage.getItem("loginAlerts");

    if (savedPic) setProfilePic(savedPic);
    if (savedNotif) setNotifications(JSON.parse(savedNotif));
    if (savedRole) setRole(savedRole);
    if (saved2FA) setLoginAlerts(JSON.parse(saved2FA));
  }, []);

  const handleSave = () => {
    localStorage.setItem("profilePic", profilePic);
    localStorage.setItem("notifications", JSON.stringify(notifications));
    localStorage.setItem("role", role);
    localStorage.setItem("loginAlerts", loginAlerts);
    setSaved(true);
    setTimeout(() => setSaved(false), 2000);
  };

  const handleProfilePicChange = (e) => {
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
    <div className="p-6 min-h-screen bg-white text-[rgba(79,79,79,0.9)]">
      <h2 className="text-3xl font-parastoo mb-6 text-[rgba(79,79,79,0.7)]">Settings</h2>

      <div className="bg-white p-6 rounded-xl shadow-lg border border-pink-100 space-y-8">

        {/* Profile Picture */}
        <div>
          <h3 className="text-xl font-semibold mb-2 text-[rgba(79,79,79,0.85)]">👤 Profile Picture</h3>
          <div className="flex items-center space-x-4">
            <img
              src={profilePic || "https://cdn-icons-png.flaticon.com/512/847/847969.png"}
              alt="Profile"
              className="w-20 h-20 rounded-full border-2 border-pink-300 object-cover"
            />
            <input type="file" accept="image/*" onChange={handleProfilePicChange} className="text-sm" />
          </div>
        </div>

        {/* Notifications */}
        <div>
          <h3 className="text-xl font-semibold mb-2 text-[rgba(79,79,79,0.85)]">🔔 Notification Settings</h3>
          <div className="space-y-2">
            <label className="flex justify-between items-center">
              <span>Email Alerts</span>
              <input
                type="checkbox"
                checked={notifications.email}
                onChange={() => setNotifications({ ...notifications, email: !notifications.email })}
                className="accent-pink-500"
              />
            </label>
            <label className="flex justify-between items-center">
              <span>SMS Notifications</span>
              <input
                type="checkbox"
                checked={notifications.sms}
                onChange={() => setNotifications({ ...notifications, sms: !notifications.sms })}
                className="accent-pink-500"
              />
            </label>
            <label className="flex justify-between items-center">
              <span>Push Notifications</span>
              <input
                type="checkbox"
                checked={notifications.push}
                onChange={() => setNotifications({ ...notifications, push: !notifications.push })}
                className="accent-pink-500"
              />
            </label>
          </div>
        </div>

        {/* Security */}
        <div>
          <h3 className="text-xl font-semibold mb-2 text-[rgba(79,79,79,0.85)]">🔒 Security</h3>

          {/* Password Change */}
          <div className="bg-white p-4 rounded-md border border-pink-100 space-y-2">
            <p className="text-sm font-semibold">Change Password</p>
            <input type="password" placeholder="Current Password" className="w-full px-3 py-2 border rounded-md" />
            <input type="password" placeholder="New Password" className="w-full px-3 py-2 border rounded-md" />
            <input type="password" placeholder="Confirm New Password" className="w-full px-3 py-2 border rounded-md" />
            <button
              className="mt-2 bg-[rgba(224,99,99,0.85)] hover:bg-[rgba(224,99,99,1)] text-white px-4 py-2 rounded-md"
              onClick={() => alert("✅ Password changed successfully!")}
            >
              Update Password
            </button>
          </div>

          {/* 2FA */}
          <div className="mt-6 bg-white p-4 rounded-md border border-pink-100 space-y-2">
            <div className="flex items-center justify-between">
              <p className="text-sm font-semibold">Two-Factor Authentication (2FA)</p>
              <input
                type="checkbox"
                checked={loginAlerts}
                onChange={() => setLoginAlerts(!loginAlerts)}
                className="accent-pink-500"
              />
            </div>

            {loginAlerts && (
              <>
                <input
                  type="tel"
                  placeholder="Enter Mobile Number for OTP"
                  className="w-full px-3 py-2 border rounded-md"
                />
                <button
                  onClick={() => {
                    setOtpSent(true);
                    setTimeout(() => setOtpSent(false), 3000);
                  }}
                  className="bg-[rgba(224,99,99,0.85)] hover:bg-[rgba(224,99,99,1)] text-white px-4 py-2 mt-2 rounded-md"
                >
                  Send OTP
                </button>
                {otpSent && (
                  <p className="text-green-600 text-sm mt-2">✅ OTP sent successfully!</p>
                )}
              </>
            )}
          </div>

          {/* Recent Logins */}
          <div className="mt-6 bg-white p-4 rounded-md border border-pink-100">
            <p className="text-sm font-semibold mb-2">Recent Login Devices</p>
            <ul className="text-sm list-disc list-inside space-y-1">
              <li>Chrome on Windows – Hyderabad – Today at 2:30 PM</li>
              <li>Safari on iPhone – Bengaluru – Yesterday at 8:15 PM</li>
              <li>Edge on MacOS – Mumbai – 3 days ago</li>
            </ul>
          </div>

          {/* Login Location Alerts */}
          <div className="mt-6 bg-white p-4 rounded-md border border-pink-100">
            <label className="flex items-center justify-between">
              <span className="text-sm font-semibold">Alert on New Location Login</span>
              <input type="checkbox" checked={true} readOnly className="accent-pink-500" />
            </label>
            <p className="text-xs text-gray-500 mt-1">
              You'll be notified when a login happens from a new city or device.
            </p>
          </div>
        </div>


        {/* Audit Logs */}
        <div>
          <h3 className="text-xl font-semibold mb-2 text-[rgba(79,79,79,0.85)]">📄 Audit Logs</h3>
          <ul className="text-sm list-disc list-inside space-y-1">
            <li>Logged in from new device (IP: 192.168.1.10)</li>
            <li>Password changed successfully</li>
            <li>2FA enabled</li>
            <li>SMS Alerts disabled</li>
          </ul>
        </div>

        {/* Delete Account */}

        {/* Save Button */}
        <div className="pt-4 text-right">
          <button
            onClick={handleSave}
            className={`px-6 py-2 rounded-md text-white transition ${
              saved ? "bg-green-500 cursor-not-allowed" : "bg-[rgba(224,99,99,0.85)] hover:bg-[rgba(224,99,99,1)]"
            }`}
            disabled={saved}
          >
            {saved ? "Settings Saved!" : "Save Changes"}
          </button>
        </div>
      </div>
    </div>
  );
};

export default Settings;
