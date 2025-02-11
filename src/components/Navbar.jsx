import "../SCSS/Navbar.scss";
import {
  RiHome8Line,
  RiHome8Fill,
  HiUsers,
  HiOutlineUsers,
  PiVideoFill,
  PiVideoLight,
  IoNotificationsOutline,
  IoNotificationsSharp,
  FaCircleUser,
  FaRegCircleUser,
  RiMessengerFill,
  RiMessengerLine,
} from "../icons";

import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
export default function Navbar() {

  const [activeTab, setActiveTab] = useState(localStorage.getItem("activeTab"));
  const [feedRead, setFeedRead] = useState(false);
  const [notificationRead, setNotificationRead] = useState(false);
  const [usersRead, setUsersRead] = useState(false);
  const [videosRead, setVideosRead] = useState(false);
  const handleTabClick = (tab) => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
    localStorage.setItem("activeTab",tab)
    setActiveTab(localStorage.getItem("activeTab"));
  };

  return (
    <div className="navbar-container">
      <div className="nav-item">
        {feedRead && <span>{}</span>}
        <Link
          to="/"
          className={activeTab === "home" ? "active " : "nav-icon"}
          onClick={() => {
            handleTabClick("home");
          }}
        >
          {activeTab === "home" ? <RiHome8Fill /> : <RiHome8Line />}
        </Link>
      </div>
      <div className="nav-item">
        {usersRead && <span>{}</span>}
        <Link
          to="/users"
          className={activeTab === "users" ? "active " : "nav-icon"}
          onClick={() => {
            handleTabClick("users");
          }}
        >
          {activeTab === "users" ? <HiUsers /> : <HiOutlineUsers />}
        </Link>
      </div>

      <div className="nav-item">
        <Link
          to="/messenger"
          className={activeTab === "messages" ? "active " : "nav-icon"}
          onClick={() => handleTabClick("messages")}
        >
          {activeTab === "messages" ? <RiMessengerFill /> : <RiMessengerLine />}
        </Link>
      </div>
      <div className="nav-item">
        {videosRead && <span>{}</span>}
        <Link
          to="/videos"
          className={activeTab === "videos" ? "active " : "nav-icon"}
          onClick={() => {
            handleTabClick("videos");
          }}
        >
          {activeTab === "videos" ? <PiVideoFill /> : <PiVideoLight />}
        </Link>
      </div>
      <div className="nav-item">
        {notificationRead && <span>3</span>}
        <Link
          to="/notifications"
          className={activeTab === "notifications" ? "active " : "nav-icon"}
          onClick={() => {
            handleTabClick("notifications");
          }}
        >
          {activeTab === "notifications" ? (
            <IoNotificationsSharp />
          ) : (
            <IoNotificationsOutline />
          )}
        </Link>
      </div>

      <div className="nav-item">
        <Link
          to="/profile"
          className={activeTab === "profile" ? "active " : "nav-icon"}
          onClick={() => handleTabClick("profile")}
        >
          {activeTab === "profile" ? <FaCircleUser /> : <FaRegCircleUser />}
        </Link>
      </div>
    </div>
  );
}