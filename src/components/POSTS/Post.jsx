import { Link, useNavigate } from "react-router-dom";
import "../../SCSS/NewsFeed.scss";
import { PiShareFat } from "react-icons/pi";
import { BiLike } from "react-icons/bi";
import { FaLink } from "react-icons/fa";
import { FaSave } from "react-icons/fa";
import { FaShareSquare } from "react-icons/fa";
import { MdNotificationAdd, MdVerified } from "react-icons/md";
import { MdReport } from "react-icons/md";
import { FaPlusSquare } from "react-icons/fa";
import { FaMinusSquare } from "react-icons/fa";
import { FaGlobeEurope } from "react-icons/fa";
import { BiCommentDetail } from "react-icons/bi";
import { BiSolidLike } from "react-icons/bi";
import { FaAngry } from "react-icons/fa";
import { BiSolidLaugh } from "react-icons/bi";
import { FaSadCry } from "react-icons/fa";
import { IoMdHeart } from "react-icons/io";
import { FaSadTear } from "react-icons/fa";
import { FaRegComment } from "react-icons/fa6";

import { useEffect, useRef, useState } from "react";
import { BsThreeDots } from "../../icons";
import { FaUsers } from "react-icons/fa6";
import FeedSkeleton from "../Skeletons/FeedSkeleton";

export default function Post({ post }) {
  const navigate = useNavigate();

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
  const [mainDivHeight, setMainDivHeight] = useState(0); // State to store main div height
  const mainDivRef = useRef(null); // Reference to the main div
  const [showedmore, setshowedmore] = useState(false);
  useEffect(() => {
    if (mainDivRef.current) {
      // Set the height of the main div
      setMainDivHeight(mainDivRef.current.offsetHeight);
    }
  }, []); // Run only once after the component mounts

  return (
    <div className="posts-container" key={post.id}>
      <div className="post-author">
        <div className="post-author-info">
          <img
            src={post.authorImage ? post.authorImage : "/author.jpeg"}
            decode="async"
            alt="Author"
            loading="lazy"
            onClick={() => {
              navigate(`/users/${post.authorId}`, { state: post });
            }}
          />
          <div>
            <strong>
              <h3
                style={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                {post.fullName}
                {post.isVerified && (
                  <MdVerified
                    style={{
                      color: "green",
                      marginLeft: "7px",
                    }}
                  />
                )}
              </h3>
            </strong>
            <p style={{ display: "flex", alignItems: "center" }}>
              {post.date ? post.date : "june 23"} &nbsp;&nbsp;
              {post.postVisibility === "public" && (
                <FaGlobeEurope style={{ fontSize: "13px" }} />
              )}
              <FaGlobeEurope />
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
     
      <div className="post-body" id="post-body">
        <div className="post-description">
          <span>{post.header}</span> <br />
          {post.description && (post.video || post.image) && (
            <p>{post.description}</p>
          )}
          {post.isVerified && <strong>#Culinary Creations</strong>}{" "}
          {!post.image && !post.video && !post.shared && post.description && (
            <div
              style={{
                border: "1px solid rgba(36, 39, 43, 0.4)",
                padding: " 10px",
                borderRadius: "5px",
                fontSize: "18px",
                backgroundColor: "rgba(221, 238, 248, 0.2)",
                margin: "10px 0",
              }}
            >
              <div
                ref={mainDivRef}
                style={{
                  height: mainDivHeight < 200 ? "auto" : "250px",
                  overflow: mainDivHeight < 200 ? "auto" : "scroll",
                }}
              >
                <p> {post.description}</p>
              </div>
              {!showedmore ? (
                <span
                  onClick={() => {
                    setshowedmore(true);
                    mainDivRef.current.style.height = "auto";
                  }}
                  style={{cursor: "pointer"}}
                >
                  {"See more..."}
                </span>
              ) : (
                <span
                  onClick={() => {
                    setshowedmore(false);
                    mainDivRef.current.style.height = "250px";
                  }}
                >
                  {/* {"See less..."} */}
                </span>
              )}
            </div>
          )}
          {post.shared && post.description && (
            <div
              style={{
                border: "1px solid rgba(36, 39, 43, 0.4)",
                padding: " 10px",
                borderRadius: "5px",
                backgroundColor: "rgba(209, 236, 184, 0.3)",
                margin: "10px 0",
              }}
            >
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "start",
                  gap: "5px",
                }}
              >
                <img
                  src={post.shareauthor}
                  alt=""
                  style={{
                    height: "40px",
                    width: "40px",
                    borderRadius: "50%",
                    objectFit: "cover",
                  }}
                />

                <div>
                  <h3>Sabbir Hossain</h3>
                  <p
                    style={{
                      margin: "-1px 0",
                      display: "flex",
                      alignItems: "center",
                      gap: "5px",
                    }}
                  >
                    today
                    {/* <FaGlobeEurope /> */}
                  </p>
                </div>
              </div>
              <hr style={{ margin: "10px " }} />
              <p
                style={{
                  fontSize: "18px",
                  overflow: "auto",
                  maxHeight: "250px",
                }}
              >
                {" "}
                {post.description}
              </p>
              {/* <p>See more...</p> */}
            </div>
          )}
        </div>
        <div className="post-image">
          {post.image && (
            <img
              src={post.image}
              alt="Post Content"
              decode="async"
              loading="lazy"
              onClick={() => {
                navigate(`/posts/${post.id}`, { state: post });
              }}
            />
          )}

          {post.video && (
            <video
              autoPlay
              controls
              onClick={() => {
                navigate(`/posts/${post.id}`, { state: post });
              }}
            >
              <source src={post.video} type="video/mp4" />
            </video>
          )}
        </div>
      </div>
      {showemoji === post.id && (
  <div className="emoji-popup">
    {[
      { emoji: "👍", label: <BiSolidLike />, className: "like" },
      { emoji: "😂", label: "😂", className: "laugh" },
      { emoji: "😢", label: "😢", className: "sad" },
      { emoji: "😡", label: "😡", className: "angry" },
      { emoji: "😍", label: "😍", className: "love" },
    ].map(({ emoji, className }) => (
      <span
        key={emoji}
        className={`emoji-item ${className}`}
        onClick={() => handleEmojiSelect(post.id, emoji)}
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

<span>{post.likes}</span>
        </div>}
 
        <div
          className="comment-button"
          onClick={() => {
            navigate(`/posts/${post.id}`, { state: post });
          }}
        >
          <FaRegComment />
          <span>{post.comments.length}</span>
        </div>
        <div className="share-button">
          <PiShareFat />
          <span>{post.shares}</span>
        </div>
      </div>

      {/* Post Options Popup */}
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
              <div style={{ color: "green" }}>
                <FaPlusSquare className="popup-item-icon" />
              </div>
              <span>Interested</span>
            </div>
            <div className="popup-item">
              <div style={{ color: "gray" }}>
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
              <div style={{ color: "blue" }}>
                <FaShareSquare className="popup-item-icon" />
              </div>
              <span>Share</span>
            </div>
            <div className="popup-item">
              <div style={{ color: "crimson" }}>
                <MdReport className="popup-item-icon" />
              </div>
              <span>Report Post</span>
            </div>

            <div className="popup-item">
              <div style={{ color: "darkcyan" }}>
                <MdNotificationAdd className="popup-item-icon" />
              </div>
              <span>On Notification</span>
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
  );
}
