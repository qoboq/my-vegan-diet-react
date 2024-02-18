// src/MainPage.js

import React from 'react';
import './styles.css';
import logo from '../assets/logo.svg'; // Update the path accordingly

const MainPage = () => {
  return (
    <div className="main-bg">
      <img src={logo} alt="My Vegan Diet Logo" className="logo" />
      <div className="content">
        {/* Your content and form here */}
      </div>
    </div>
  );
}
const handleEmailSubmit = (event) => {
    event.preventDefault();
    // Logic to send email
  };
  
  return (
    <div className="main-bg">
      <img src={logo} alt="My Vegan Diet Logo" className="logo" />
      <div className="content">
        <h1 className="green-text">Are you ready to go VEGAN?</h1>
        <form onSubmit={handleEmailSubmit}>
          <input type="email" placeholder="Enter your e-mail" />
          <button type="submit" className="green-text">Start now</button>
        </form>
        <p className="dark-text">Sign-up for a 7-day vegan meal plan ABSOLUTELY FOR FREE</p>
        {/* Other content */}
      </div>
    </div>
  );

export default MainPage;
