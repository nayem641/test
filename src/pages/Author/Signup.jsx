import React, { useState } from "react";
import axios from "axios";
import "../../SCSS/Signup.scss";
import { FaUser, FaEnvelope, FaLock } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";
import { IoIosRemoveCircle } from "react-icons/io";
import { toast } from "react-toastify";
import { FaGoogle } from 'react-icons/fa'; // Import Google Icon




const Signup = () => {
  const navigate = useNavigate();
  
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const nextStep = () => {
    if (step < 2) setStep(step + 1);
  };

  const prevStep = () => {
    if (step > 1) setStep(step - 1);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post("http://localhost:3000/users/signup", {
        fullName: formData.fullName,
        email: formData.email,
        password: formData.password,
      });
      const userId = response.data.user._id;
      navigate("/profile", { state: userId });

      toast.success(response.data.message, {
        position: "top-right",
        autoClose: 1000,
        hideProgressBar: true,
        closeOnClick: true,
        pauseOnHover: false,
        draggable: true,
      });
    } catch (error) {
      if (error.response) {
        toast.error(error.response.data.message);
      } else if (error.request) {
        console.error("Request error:", error.request);
      } else {
        console.error("Setup error:", error.message);
      }
    }
  };

  return (
    <div className="signup-container">
      <form className={`signup-form step-${step}`}>
        <h1
          style={{
            position: "absolute",
            top: "-1%",
            left: "1%",
            color: "coral",
          }}
        >
      
        </h1>
        <h2>Sign Up</h2>

        {step === 1 && (
          <div className="form-group slide-in">
            <div className="input-wrapper">
              <FaUser className="icon" />
              <input
                type="text"
                name="fullName"
                placeholder="Full Name"
                value={formData.fullName}
                onChange={handleChange}
                required
              />
            </div>
            <div className="input-wrapper">
              <FaEnvelope className="icon" />
              <input
                type="email"
                name="email"
                placeholder="E-mail"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </div>
          </div>
        )}

        {step === 2 && (
          <div className="form-group slide-in">
            <div className="input-wrapper">
              <FaLock className="icon" />
              <input
                type="password"
                name="password"
                placeholder="Password"
                value={formData.password}
                onChange={handleChange}
                required
              />
            </div>
            <div className="input-wrapper">
              <FaLock className="icon" />
              <input
                type="password"
                name="confirmPassword"
                placeholder="Confirm Password"
                value={formData.confirmPassword}
                onChange={handleChange}
                required
              />
            </div>
          </div>
        )}

        {step === 1 && (
          <div className="social-login">
            <p>-----Or Sign up with-----</p>
            <div className="social-icons">
              <button type="button" className="google">
                {/* <FaGoogle className="google-icon" /> */}
                 Google
              </button>
            </div>
          </div>
        )}

        <div className="buttons">
          {step > 1 && (
            <button type="button" onClick={prevStep} className="prev-btn">
              Previous
            </button>
          )}
          {step < 2 ? (
            <button type="button" onClick={nextStep} className="next-btn">
              Next
            </button>
          ) : (
            <button type="button" onClick={handleSubmit} className="submit-btn">
              Submit
            </button>
          )}
        </div>

        <p style={{ color: "#aaa", textAlign: "center", margin: "5px 0" }}>
          Have an account? Click
          <Link
            style={{ color: "blue" }}
            onClick={() => {
              navigate("/login");
            }}
          >
            Login
          </Link>
        </p>
      </form>
    </div>
  );
};

export default Signup;
