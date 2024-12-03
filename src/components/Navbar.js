import React from 'react';
import { NavLink } from 'react-router-dom'; // Import NavLink

const Navbar = () => {
  return (
    <header>
      <div className="logo">
        <img src="/psscmusm_logo.png" alt="PSSCMUSM Logo" />
        <h1>PSSCMUSM</h1>
      </div>
      <nav>
        <NavLink to="/" className="nav-button" activeClassName="active">
          Home
        </NavLink>
        <NavLink to="/events" className="nav-button" activeClassName="active">
          Events
        </NavLink>
        <NavLink to="/news" className="nav-button" activeClassName="active">
          News
        </NavLink>
        <NavLink to="/feedback" className="nav-button" activeClassName="active">
          Feedback
        </NavLink>
        <NavLink to="/login" className="nav-button" activeClassName="active">
          Login / Sign Up
        </NavLink>
      </nav>
    </header>
  );
};

export default Navbar;
