import React, { useState } from "react";
import "../../SCSS/CreatePostPage.scss";
import { IoArrowBack } from "react-icons/io5";

import {
  FaCalendarAlt,
  FaCamera,
  FaMapMarkerAlt,
  FaSmile,
  FaTag,
  FaVideo,
  MdOutlineFormatBold,
  MdOutlineFormatItalic,
  MdTextDecrease,
  MdTextIncrease,
} from "../../icons";
import { useNavigate } from "react-router-dom";
import { MdColorLens } from "react-icons/md";
const CreatePostPage = () => {
  const navigate = useNavigate();
  const [postText, setPostText] = useState("");
  const [backgroundColor, setBackgroundColor] = useState("#ffffff");
  const [fontSize, setFontSize] = useState(16);
  const [fontWeight, setFontWeight] = useState(400);
  const [fontStyle, setFontStyle] = useState("normal");
  const [fontFamily, setFontFamily] = useState("Arial, sans-serif");
  const [textColor, setTextColor] = useState("#000000");


  const handlePost = () => {
    if (postText.trim()) {
      console.log("Post Submitted:", postText);
      setPostText("");
      setBackgroundColor("#ffffff");
    }
  };

  const handleBackgroundChange = (gradient) => {
    setBackgroundColor(gradient);
  };

  const increaseFontSize = () => setFontSize(fontSize + 2);
  const decreaseFontSize = () => setFontSize(fontSize - 2);

  const toggleFontWeight = () => {
    setFontWeight(fontWeight === 400 ? 700 : 400);
  };

  const toggleFontStyle = () => {
    setFontStyle((prevFontStyle) =>
      prevFontStyle === "normal" ? "italic" : "normal"
    );
  };

  const changeFontFamily = (family) => {
    setFontFamily(family);
  };

  const changeTextColor = (color) => {
    setTextColor(color);
  };

  return (
    <div className="create-post-container">
      <div className="header">
        <button
          className="back-button"
          onClick={() => {
            navigate("/");
          }}
        >
          <IoArrowBack/>
        </button>
        <h3>Create Post</h3>
        <button className="post-button" onClick={handlePost}>
          POST
        </button>
      </div>
      <div className="user-info">
        <img className="profile-pic" src="/author.jpeg" alt="User" />
        <div className="user-details">
          <h3>Shahidur Rahman</h3>
          <select>
            <option>Friends</option>
            <option>Public</option>
            <option>Only Me</option>
            <option value="">Custom</option>
          </select>
        </div>
     
      </div>
      <textarea
        className="post-input"
        style={{
          background: backgroundColor,
          color: textColor,
          fontSize: `${fontSize}px`,
          fontWeight: fontWeight,
          fontStyle: fontStyle,
          fontFamily: fontFamily,
        }}
        placeholder="What's on your mind?"
        value={postText}
        onChange={(e) => setPostText(e.target.value)}
      ></textarea>
      <div className="background-options">
        {[
          "linear-gradient(45deg,rgb(230, 132, 136),rgb(190, 123, 104))",
          "linear-gradient(120deg, #84fab0, #8fd3f4)",
          "linear-gradient(to right, #fa709a, #fee140)",
          "linear-gradient(to right, #43e97b, #38f9d7)",
          "linear-gradient(to right, #4facfe, #00f2fe)",
          "linear-gradient(to right, #f83600, #f9d423)",
          "linear-gradient(to right, #6a11cb, #2575fc)",
          "linear-gradient(to right, #b721ff, #21d4fd)",
        ].map((gradient, index) => (
          <div
            key={index}
            className="background-color"
            style={{ background: gradient }}
            onClick={() => handleBackgroundChange(gradient)}
          ></div>
        ))}
      </div>

      <div className="font-options">
        <button onClick={increaseFontSize}>
          <MdTextIncrease size={20} />
        </button>
        <button onClick={decreaseFontSize}>
          <MdTextDecrease size={20} />
        </button>
        <button onClick={toggleFontWeight}>
          <MdOutlineFormatBold size={20} />
        </button>
        <button onClick={toggleFontStyle}>
          <MdOutlineFormatItalic size={20} />
        </button>

     
        <div className="color-picker">
          <button onClick={() => document.getElementById('colorPicker').click()}>
            <MdColorLens size={20} />
          </button>
          <input
            id="colorPicker"
            type="color"
            value={textColor}
            onChange={(e) => changeTextColor(e.target.value)}
            style={{ display: 'none' }}
          />
        </div>      </div>

      <div className="post-options">
        <button className="photos">
          <FaCamera size={20} /> Photos
        </button>
        <button className="video">
          <FaVideo size={20} /> Video
        </button>
       
        
        <button className="tag-friends">
          <FaTag size={20} /> Tag
        </button>
      
      </div>

      <button className={`bottom-post-button `} onClick={handlePost}>
        POST
      </button>
    </div>
  );
};

export default CreatePostPage;