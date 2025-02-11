import { Link, useNavigate } from "react-router-dom";
import "../../SCSS/NewsFeed.scss";

import { MdOndemandVideo, RiChatFollowUpFill, TbPhotoVideo } from "../../icons";

import { useState } from "react";
import { FaSearch, FaViadeoSquare } from "react-icons/fa";
import Navbar from "../../components/Navbar";

import AllVideo from "../../components/videos/AllVideo";
import Reels from "../../components/videos/Reels";
import FollowingVideo from "../../components/videos/FollowingVideo";
export default function Videos() {
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState("feed");

  const posts = [
    {
      id: 9,
      header: "The Allure of the Desert",
      author: "Olivia Perez",
      date: "June 20",
      description:
        "Exploring  adipisicing elstiasrspiciatis, perferendis quia voluptatum error. In debitis excepturi nobis nisi non, repellendus quos.and enjoying nature.",
      video:
        "https://cdn.pixabay.com/video/2022/03/12/110548-689510287_large.mp4",
    },
    {
      id: 10,
      header: "Chasing the Northern Lights",
      author: "Ethan Lewis",
      date: "June 21",
      description:
        "The Northernthe planet's wonders, igniting awe and appreciation for the universe's mysteries.",
      video:
        "https://cdn.pixabay.com/video/2022/04/24/114918-702646988_large.mp4",
    },
  ];

  const [isOn, setIsOn] = useState(true);

  const toggle = () => setIsOn(!isOn);
   const [isToggled, setIsToggled] = useState(false);

   const toggleButtonStyle = {
     display: "flex",
     alignItems: "center",
     justifyContent: "center",
     width: "50px",
     height: "28px",
     backgroundColor: isToggled ? "#4CAF50" : "#ccc",
     borderRadius: "15px",
     cursor: "pointer",
     transition: "background-color 0.3s ease",
     position: "relative",
     margin: "auto 0",
   };

   const toggleCircleStyle = {
     width: "22px",
     height: "22px",
     backgroundColor: "#fff",
     borderRadius: "50%",
     position: "absolute",
     top: "2.5px",
     left: isToggled ? "26px" : "2.5px",
     transition: "left 0.3s ease",
   };

   const handleToggle = () => {
     setIsToggled(!isToggled);
   };
  return (
    <>
      {/* <Header/> */}
      <Navbar />
      <div className="videos-header">
        <h2 style={{textAlign:"center"}}>Videos</h2>
       
      </div>
      <div className="videos-tabs">
        <button
          className={activeTab === "feed" && "active "}
          onClick={() => {
            setActiveTab("feed");
          }}
        >
          <MdOndemandVideo />
          Feed
        </button>
        <button
          className={activeTab === "reels" && "active "}
          onClick={() => {
            
            setActiveTab("reels");
          }}
        >
          <TbPhotoVideo />
          Shorts
        </button>
        <button
          className={activeTab === "following" && "active "}
          onClick={() => {
            setActiveTab("following");
          }}
        >
          <RiChatFollowUpFill />
          Following
        </button>
      </div>

      {activeTab === "feed" && <AllVideo posts={posts} />}
      {activeTab === "reels" && <Reels posts={posts} />}
      {activeTab === "following" && <FollowingVideo posts={posts} />}
    </>
  );
}
