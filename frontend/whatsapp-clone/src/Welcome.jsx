import React from 'react';
import { Link } from 'react-router-dom';
import './components/welcome/Welcome.module.css'
function Welcome() {
  return (
    <>
      <h1 className="welcome-title">Welcome To My Chat App</h1>
      <div className="button-container">
        <Link to="/signup" className="nav-link">
          <button className="button-style">Sign Up</button>
        </Link>
        <Link to="/signin" className="nav-link">
          <button className="button-style">Sign In</button>
        </Link>
      </div>
      <footer>Made by Ahsan And Faizan</footer>
    </>
  );
}

export default Welcome;
