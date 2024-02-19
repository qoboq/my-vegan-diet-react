// src/MainPage.js

import React, { useState } from 'react';
import './styles.css';
import logo from '../assets/logo.png';

const MainPage = () => {
  // State to hold the email value
  const [email, setEmail] = useState('');

  // Function to handle the form submission
  const handleEmailSubmit = (event) => {
    event.preventDefault();
    // Logic to send the email
    console.log(email); // For testing purposes, you would replace this with your email sending logic
  };

  // Function to handle email input changes
  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  return (
    <div className="main-bg">
      <header className="header">
        <img src={logo} alt="My Vegan Diet Logo" className="logo" />
      </header>
      <div className="landing-container">
        <h1 className="green-text">Are you ready to go VEGAN?</h1>
        <form onSubmit={handleEmailSubmit} className="content">
          <input 
            type="email" 
            placeholder="Enter your e-mail" 
            value={email} 
            onChange={handleEmailChange} 
            className="email-input" // Add a class for styling
            required // Makes sure the email field is not empty
          />
          <button type="submit" className="subscribe-button green-text">Start now</button>
        </form>
        <p className="dark-text">Sign-up for a 7-day vegan meal plan ABSOLUTELY FOR FREE</p>
      </div>
    </div>
  );
}

export default MainPage;
