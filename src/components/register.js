import React, { useState } from "react";
import "./App.css";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

function Register() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (formData.password !== formData.confirmPassword) {
      alert("Passwords do not match");
      return;
    }

    try {
      const response = await axios.post(
        "https://ismmart-dd9fd21491a7.herokuapp.com/signup",
        {
          name: formData.name,
          email: formData.email,
          password: formData.password,
          confirmPassword: formData.confirmPassword,
        }
      );

      console.log("Registration successful:", response.data);
      alert("Registration successful");
      navigate("/login");
    } catch (error) {
      console.error("Registration error:", error);
      alert("Registration not successfull");
    }
  };

  return (
    <div className="flex flex-col items-center">
      <h1>Register</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <input
            type="text"
            id="name"
            name="name"
            placeholder="enter name..."
            value={formData.name}
            onChange={handleChange}
          />
        </div>

        <div>
          <input
            type="email"
            id="email"
            name="email"
            placeholder="enter Email..."
            value={formData.email}
            onChange={handleChange}
          />
        </div>
        <div>
          <input
            type="password"
            id="password"
            name="password"
            placeholder="enter password..."
            value={formData.password}
            onChange={handleChange}
          />
        </div>
        <div>
          <input
            type="password"
            id="confirmPassword"
            name="confirmPassword"
            placeholder="confirm password..."
            value={formData.confirmPassword}
            onChange={handleChange}
          />
        </div>
        <Link to="/login">
          <h3>Already have an account</h3>
        </Link>
        <button className="my-btn">Register</button>
      </form>
    </div>
  );
}

export default Register;
