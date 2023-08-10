import React, { useState } from "react";
import "./App.css";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

function Form() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    email: "",
    password: "",
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

    try {
      const response = await axios.post(
        "https://ismmart-dd9fd21491a7.herokuapp.com/login",
        {
          email: formData.email,
          password: formData.password,
        }
      );

      console.log("Login successful:", response.data);
      navigate("/dashboard");
      alert("Login successful");
      // Redirect or perform other actions on successful login
    } catch (error) {
      console.error("Login error:", error);
      alert("Invalid Credidentals!");
    }
  };
  return (
    <div>
      <h1>Login</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <input
            type="email"
            id="email"
            name="email"
            placeholder="enter Email..."
            required
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
            required
            value={formData.password}
            onChange={handleChange}
          />
        </div>
        <button type="submit" className="my-btn">
          Login
        </button>
        <button
          type="submit"
          className="my-btn"
          onClick={() => navigate("/register")}
        >
          Register
        </button>
      </form>
    </div>
  );
}

export default Form;
