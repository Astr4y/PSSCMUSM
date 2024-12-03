import React from "react";
import { NavLink } from "react-router-dom";

const handleLogin = (e) => {
    e.preventDefault(); // Prevent page refresh
    const email = e.target.email.value;
    const password = e.target.password.value;
    console.log("Login with:", { email, password });
    // Add authentication logic here
  };
  
  <form className="login-form" onSubmit={handleLogin}/>
  
const Login = () => {
  return (
    <section className="login-container">
      <h2>Login</h2>
      <form className="login-form">
        <div className="input-group">
          <label htmlFor="email">Email</label>
          <input type="email" id="email" placeholder="Enter your email" />
        </div>
        <div className="input-group">
          <label htmlFor="password">Password</label>
          <input type="password" id="password" placeholder="Enter your password" />
        </div>
        <button type="submit" className="btn">Login</button>
        <p>
          Don't have an account? <NavLink to="/register">Register here</NavLink>
        </p>
      </form>
    </section>
  );
};

export default Login;
