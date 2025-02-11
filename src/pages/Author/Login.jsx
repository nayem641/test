import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import "../../SCSS/Login.scss";
import axios from "axios";
import { toast } from "react-toastify";
import { FaGoogle } from 'react-icons/fa'; // Import the Google icon

const Login = () => {
  const navigate = useNavigate();
  const [isVisible, setIsVisible] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [submitted, setSubmitted] = useState(true);

  useEffect(() => {
    setTimeout(() => setIsVisible(true), 100); // Form loads with animation
  }, []);

  const handleLogin = async (e) => {
    setSubmitted(false);
    e.preventDefault();
    console.log("Login function triggered");

    if (!email || !password) {
      console.log("Missing credentials");
      toast.error("Please enter your credentials", {
        position: "top-right",
        autoClose: 1000,
        hideProgressBar: true,
        closeOnClick: true,
        pauseOnHover: false,
        draggable: true,
      });
      return;
    }

    try {
      console.log("Sending request to backend");
      const response = await axios.post("http://localhost:3000/users/login", {
        email,
        password,
      });
      const userId = response.data.user._id;
      navigate("/profile", { state: userId });
      setSubmitted(true);
    } catch (error) {
      setSubmitted(true);
      toast.error(
        error.response?.data?.message || "Login failed. Please try again."
      );
    }
  };

  return (
    <div className="app-container">
      <div className={`login-box ${isVisible ? "visible" : ""}`}>
        <h1 className="title">Sign In</h1>
        <form>
          <div className="input-group">
            <i className="icon user-icon"></i>
            <input
              type="text"
              placeholder="Enter your email"
              onChange={(e) => setEmail(e.target.value)}
              value={email}
            />
          </div>
          <div className="input-group">
            <i className="icon lock-icon"></i>
            <input
              type="password"
              placeholder="Enter your password"
              onChange={(e) => setPassword(e.target.value)}
              value={password}
            />
          </div>
          <button type="submit" className="btn-primary" onClick={handleLogin}>
            {submitted ? "Submit" : "Submitting..."}
          </button>
        </form>
        <p className="divider">-----Or login with-----</p>
        <div className="social-buttons">
          <button className="btn-social google" style={{display: "flex", alignItems: "center",justifyContent:"center"}}>
            <FaGoogle style={{ marginRight: "10px", color: "white" }} /> 
            Google
          </button>
        </div>
        <p className="create-account">
          Don’t have an account? <Link to={"/signup"}>Create one</Link>
        </p>
      </div>
    </div>
  );
};

export default Login;
