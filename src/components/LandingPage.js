// src/components/LandingPage.js

import React from 'react';
import logo from '../assets/logo.svg';
import background from '../assets/background.png';
import './LandingPage.css'; // We will create this CSS file in the next step

function LandingPage() {
  return (
    <div className="landing-container" style={{ backgroundImage: `url(${background})` }}>
      <div className="header">
        <img src={logo} alt="My Vegan Diet Logo" className="logo" />
      </div>
      <div className="content">
        {/* Add your content here */}
      </div>
    </div>
  );
}

export default LandingPage;
