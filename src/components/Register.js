import React from "react";
import { NavLink } from "react-router-dom";

const handleRegister = (e) => {
    e.preventDefault(); // Prevent page refresh
    const name = e.target.name.value;
    const email = e.target.email.value;
    const password = e.target.password.value;
    const confirmPassword = e.target.confirmPassword.value;
  
    if (password !== confirmPassword) {
      alert("Passwords do not match");
      return;
    }
  
    console.log("Register with:", { name, email, password });
    // Add registration logic here
  };
  
  <form className="register-form" onSubmit={handleRegister}/>
  
const Register = () => {
  return (
    <section className="register-container">
      <h2>Register</h2>
      <form className="register-form">
        <div className="input-group">
          <label htmlFor="name">Full Name</label>
          <input type="text" id="name" placeholder="Enter your full name" />
        </div>
        <div className="input-group">
          <label htmlFor="email">Email</label>
          <input type="email" id="email" placeholder="Enter your email" />
        </div>
        <div className="input-group">
          <label htmlFor="password">Password</label>
          <input type="password" id="password" placeholder="Create a password" />
        </div>
        <div className="input-group">
          <label htmlFor="confirmPassword">Confirm Password</label>
          <input type="password" id="confirmPassword" placeholder="Confirm your password" />
        </div>
        <button type="submit" className="btn">Register</button>
        <p>
          Already have an account? <NavLink to="/login">Login here</NavLink>
        </p>
      </form>
    </section>
  );
};

export default Register;
