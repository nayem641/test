import React, { useState } from "react";

// import "../../SCSS/MyProfile.scss";

import Posts from "../../components/Posts";
import { IoArrowBack } from "react-icons/io5";
import { useNavigate } from "react-router-dom";
const MyProfile = () => {
  const [activeTab, setActiveTab] = useState("posts");
const navigate=useNavigate()
  return (
    <div className="user-profile-container">
      <div className="user-profile">
        {/* Cover Photo Section */}
        <div className="cover-photo">
<IoArrowBack  style={{
  fontSize:"26px",
  position:"absolute",
  left:"5px",
  top:"10px",
  color:"white",
  cursor:"pointer",
}} onClick={()=>{navigate('/')}}/>
          <img src={"/bg.jpeg"} alt="Cover" className="cover-img" />
        </div>

        {/* Profile & Actions Section */}
        <div className="profile-details">
          <div className="profile-image">
            <img src={"/author.jpeg"} alt="Profile" className="profile-pic" />
          </div>
        </div>

        <Followers />
        <h1 className="user-name">Shahidur Rahman</h1>
      </div>
      <div className="action-buttons">
        <button
          className="btn message-btn"
          onClick={() => {
            navigate("/createstory");
          }}
        >
          + Story
        </button>
        <button
          className="btn follow-btn"
          onClick={() => {
            navigate("/editprofile");
          }}
        >
          Edit Profile
        </button>
      </div>
      {/* Tabs Section */}

      <div className="tabs">
        <ul>
          <li
            className={activeTab === "posts" ? " activetab" : "tab-item "}
            onClick={() => {
              setActiveTab("posts");
            }}
          >
            Posts
          </li>
          <li
            className={activeTab === "about" ? "activetab " : "tab-item "}
            onClick={() => {
              setActiveTab("about");
            }}
          >
            About
          </li>
          <li
            className={activeTab === "photos" ? "activetab " : "tab-item "}
            onClick={() => {
              setActiveTab("photos");
            }}
          >
            Photos
          </li>
          <li
            className={activeTab === "videos" ? "activetab " : "tab-item "}
            onClick={() => {
              setActiveTab("videos");
            }}
          >
            Videos
          </li>
        </ul>
      </div>

      {activeTab === "about" && <ProfileDetails />}
      {activeTab === "posts" && (
        <>
          <ProfileDetails />
          <Posts />
        </>
      )}
      {activeTab === "videos" && <Posts />}
    </div>
  );
};

export default MyProfile;

const Followers = () => {
  const followers = [
    { id: 1, img: "/priya.jpg" },
    { id: 2, img: "/author.jpeg" },
    { id: 3, img: "/priya.jpg" },
    { id: 4, img: "/priya.jpg" },
    { id: 5, img: "/author.jpeg" },
    { id: 6, img: "/priya.jpg" },
    { id: 7, img: "/priya.jpg" },
    { id: 8, img: "/priya.jpg" },
    { id: 9, img: "/priya.jpg" },
    { id: 10, img: "/priya.jpg" },
  ];

  const displayedFollowers = followers.slice(0, 6);

  return (
    <div className="followers">
      <p className="follower-stats">{/* <span>[ 5.8K followers ]</span> */}</p>
      <div className="follower-images">
        {displayedFollowers.map((follower, index) => (
          <img
            key={follower.id}
            src={follower.img}
            alt={follower.name}
            className="follower-img"
            style={{
              zIndex: index + 1,
              marginRight: index === displayedFollowers.length - 1 ? 0 : -16, // Overlap from the left
            }}
          />
        ))}
        {followers.length > 12 && <div className="more-followers">...</div>}
      </div>
    </div>
  );
};

const ProfileDetails = () => {
  return (
    <div className="profile-details">
      <div className="profile-header">
        <h3>Details</h3>
      </div>
      <ul className="details-list">
        <li>
          <span className="icon">🎓</span>
          <span className="detail-text">
            Studies B.Sc (Hon's) in Department of Mathematics at Noakhali
            Government College
          </span>
        </li>
        <li>
          <span className="icon">🏫</span>
          <span className="detail-text">
            Studied at Chowmuhani Govt. S.A College
          </span>
        </li>
        <li>
          <span className="icon">🏫</span>
          <span className="detail-text">
            Went to Alexander Model Government Pilot High School
          </span>
        </li>
        <li>
          <span className="icon">🌍</span>
          <span className="detail-text">
            Lives in Char Alexander, Chittagong, Bangladesh
          </span>
        </li>
        <li>
          <span className="icon">🌍</span>
          <span className="detail-text">From Chittagong</span>
        </li>
      </ul>
    </div>
  );
};
