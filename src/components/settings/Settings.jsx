// Settings.jsx
import React, { useState } from "react";
import "../../SCSS/Settings.scss";
import { FaUser, FaLock, FaBell, FaPalette, FaLanguage } from "react-icons/fa";

const Settings = () => {
  const [theme, setTheme] = useState("light");
  const [language, setLanguage] = useState("en");
  const [notifications, setNotifications] = useState(true);
  const [passwordVisibility, setPasswordVisibility] = useState(false);

  const toggleTheme = () => setTheme(theme === "light" ? "dark" : "light");
  const toggleNotifications = () => setNotifications(!notifications);
  const togglePasswordVisibility = () => setPasswordVisibility(!passwordVisibility);

  return (
    <div className={`settings-container ${theme}`}>
      <h1 className="settings-title">Settings</h1>

      <div className="settings-option">
        <FaUser className="icon" />
        <div className="details">
          <h3>Profile</h3>
          <p>Update your personal information.</p>
        </div>
        <button className="action-button">Edit</button>
      </div>

      <div className="settings-option">
        <FaLock className="icon" />
        <div className="details">
          <h3>Password</h3>
          <p>Change your account password.</p>
        </div>
        <button className="action-button" onClick={togglePasswordVisibility}>
          {passwordVisibility ? "Hide" : "Show"}
        </button>
      </div>

      <div className="settings-option">
        <FaBell className="icon" />
        <div className="details">
          <h3>Notifications</h3>
          <p>Manage your notification preferences.</p>
        </div>
        <button className="action-button" onClick={toggleNotifications}>
          {notifications ? "Disable" : "Enable"}
        </button>
      </div>

      <div className="settings-option">
        <FaPalette className="icon" />
        <div className="details">
          <h3>Theme</h3>
          <p>Switch between light and dark mode.</p>
        </div>
        <button className="action-button" onClick={toggleTheme}>
          {theme === "light" ? "Dark Mode" : "Light Mode"}
        </button>
      </div>

      <div className="settings-option">
        <FaLanguage className="icon" />
        <div className="details">
          <h3>Language</h3>
          <p>Choose your preferred language.</p>
        </div>
        <select
          className="language-select"
          value={language}
          onChange={(e) => setLanguage(e.target.value)}
        >
          <option value="en">English</option>
          <option value="es">Spanish</option>
          <option value="fr">French</option>
          <option value="de">German</option>
        </select>
      </div>

      <div className="footer">
        <button className="save-button">Save Changes</button>
      </div>
    </div>
  );
};

export default Settings;

// Settings.scss

