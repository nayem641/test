import { Link, useNavigate } from "react-router-dom";
import "../../SCSS/NewsFeed.scss";
import { FaGlobeEurope } from "react-icons/fa";

import {
  BiLike,
  BsThreeDots,
  FaMinusSquare,
  FaPlusSquare,
  FaSave,
  FaShareSquare,
  FaVideo,
  MdNotificationAdd,
  MdOndemandVideo,
  MdReport,
  PiShareFat,
  RiChatFollowUpFill,
  TbMessageFilled,
  TbPhotoVideo,
} from "../../icons";

import { useState } from "react";
import { FaLink } from "react-icons/fa6";
import { FaSearch, FaViadeoSquare } from "react-icons/fa";
import Navbar from "../../components/Navbar";
import Header from "../../components/Header";
import { MdVerified } from "react-icons/md";
import { BiCommentDetail, BiSolidLike } from "react-icons/bi";
import AllVideo from "../../components/videos/AllVideo";
export default function Reels({ posts }) {
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState("feed");

  //---------------------------------------------------
  const [activePopup, setActivePopup] = useState(null);
  const [showemoji, setShowemoji] = useState(null);
  const [likedEmojis, setLikedEmojis] = useState({});
  const toggleEmoji = (postId) => {
    // If the emoji is already selected, remove it
    if (likedEmojis[postId]) {
      setLikedEmojis((prev) => {
        const newEmojis = { ...prev };
        delete newEmojis[postId]; // Remove the emoji
        return newEmojis;
      });
    } else {
      setShowemoji((prev) => (prev === postId ? null : postId)); // Toggle emoji selection
    }
  };

  const togglePopup = (postId) => {
    setActivePopup((prev) => (prev === postId ? null : postId));
  };

  const closePopup = () => {
    setActivePopup(null);
  };

  const handleEmojiSelect = (postId, emoji) => {
    setLikedEmojis((prev) => ({
      ...prev,
      [postId]: emoji,
    }));
    setShowemoji(null); // Close the emoji popup after selecting
  };
  const [isOn, setIsOn] = useState(true);
  const toggle = () => setIsOn(!isOn);
  //   ----------------------------------------------------
  return (
    <>
      {posts
        .slice()
        .reverse()
        .map((post) => (
          <div className="posts-container" key={post.id}>
            <div className="post-author">
              <div className="post-author-info">
                <img src="/author.jpeg" alt="Author" />
                <div>
                <strong>
                {post.author}
                    <MdVerified
                      style={{
                        color: "green",
                        marginLeft: "7px",
                      }}
                    />
                </strong>
                  <p style={{ display: "flex", alignItems: "center" }}>
                    {post.date} &nbsp;&nbsp;
                    <FaGlobeEurope style={{ fontSize: "13px" }} />
                  </p>
                </div>
              </div>
              <div className="post-author-control">
                <BsThreeDots
                  className="threedot-icon"
                  onClick={() => togglePopup(post.id)}
                />
              </div>
            </div>
            {/* <hr
              style={{
                color: "rgba(10,10,10,.08)",
                width: "95%",
                margin: "0px auto -5px auto",
              }}
            /> */}
            <div className="post-body" onClick={() => {}}>
              <div className="post-description">
                <h4>{post.header}</h4>
                <p>{post.description}</p>
              </div>
              <div className="post-image">
                {post.img && (
                  <img src={post.img} alt="Post Content" loading="lazy" />
                )}
                {post.video && (
                  <video controls>
                    <source src={post.video} type="video/mp4" />
                  </video>
                )}
              </div>
            </div>

            {showemoji === post.id && (
        <div
          className="emoji-popup"
          style={{
            position: "absolute",
            bottom: "40px",
            left: "5%",
            backgroundColor: "transparent",
            backdropFilter: "blur(1px)",
            padding: "2px 10px",
            borderRadius: "15px 15px 15px 3px",
            display: "flex",
            gap: "5px",
            justifyContent: "space-between",
          }}
        >
          {[
            {
              emoji: "👍",
              label: (
                <BiSolidLike />
              ),
            },
            { emoji: "😂", label: "😂" },
            { emoji: "😢", label: "😢" },
            { emoji: "😡", label: "😡" },
            { emoji: "😍", label: "😍" },
          ].map(({ emoji, label }) => (
            <span
              key={label}
              onClick={() => handleEmojiSelect(post.id, emoji)}
              style={{
                fontSize: "32px",
                cursor: "pointer",
                textShadow: "2px 3px 10px rgba(20,20,20,.4)",
                transition: "transform 0.2s ease, color 0.2s ease",
                "&:first-child": {
                  marginBottom: "10px",  // adjust the value as needed
                }
              }}
              
              onMouseEnter={(e) => {
                e.target.style.transform = "scale(1.3) rotate(10deg)";
                e.target.style.animation = "shake 0.5s ease-in-out infinite";
              }}
              onMouseLeave={(e) => {
                e.target.style.transform = "scale(1)";
                e.target.style.animation = "none";
              }}
            >
              {emoji}
            </span>
          ))}
        </div>
      )}

      {/* Like Button Section */}
      <div className="post-interactions">
        {likedEmojis[post.id]&&<div className="like-button" onClick={() => toggleEmoji(post.id)}>
        <span style={{fontSize:"30px",marginBottom:"5px"}}>{likedEmojis[post.id]}</span>

<span>You</span>
        </div>}
        {!likedEmojis[post.id]&&<div className="like-button" onClick={() => toggleEmoji(post.id)}>
       <BiLike/>

<span>1.2k</span>
        </div>}
 
        <div
          className="comment-button"
         
        >
          <BiCommentDetail />
          <span>123</span>
        </div>
        <div className="share-button">
          <PiShareFat />
          <span>23</span>
        </div>
      </div>

            {activePopup === post.id && (
              <div
                className="popup-container"
                onClick={() => {
                  togglePopup();
                }}
              >
                <div className="popup">
                  <div className="popup-header">
                    <div className="drag-handle"></div>
                  </div>

                  <div className="popup-item">
                    <div style={{ color: "cadetblue" }}>
                      <FaPlusSquare className="popup-item-icon" />
                    </div>
                    <span>Interested</span>
                  </div>
                  <div className="popup-item">
                    <div style={{ color: "crimson" }}>
                      <FaMinusSquare className="popup-item-icon" />
                    </div>
                    <span>Not interested</span>
                  </div>
                  <div className="popup-item">
                    <div style={{ color: "chocolate" }}>
                      <FaSave className="popup-item-icon" />
                    </div>
                    <span>Save Post</span>
                  </div>
                  <div className="popup-item">
                    <div style={{ color: "darkblue" }}>
                      <FaShareSquare className="popup-item-icon" />
                    </div>
                    <span>Share</span>
                  </div>
                  <div className="popup-item">
                    <div style={{ color: "coral" }}>
                      <MdReport className="popup-item-icon" />
                    </div>
                    <span>Report Post</span>
                  </div>

                  <div className="popup-item">
                    <div style={{ color: "darkcyan" }}>
                      <MdNotificationAdd className="popup-item-icon" />
                    </div>
                    <span>On Notification for this post</span>
                  </div>
                  <div className="popup-item link">
                    <div style={{ color: "rgba(0,0,0,.7)" }}>
                      <FaLink className="popup-item-icon" />
                    </div>
                    <span>Copy Link</span>
                  </div>
                </div>

                <div className="popup-overlay" onClick={closePopup}></div>
              </div>
            )}
          </div>
        ))}
    </>
  );
}
