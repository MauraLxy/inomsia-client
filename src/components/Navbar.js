import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Navbar.css';
import logo from '../assets/inom.png';

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [worksHover, setWorksHover] = useState(false);
  const navigate = useNavigate();

  const handleDiaryClick = () => {
    window.open('/write-diary', '_blank');
  };

  const handleLogoClick = () => {
    navigate('/')
  }
  return (
    <nav className="navbar">
      <div className='navbar-content'>
        <div className="logo" onClick={handleLogoClick}>
          <img src={logo} alt="inomsia logo" />
        </div>

        <ul className={`nav-links ${menuOpen ? 'open' : ''}`}>
          <li 
            className="nav-item works-wrapper"
            onMouseEnter={() => setWorksHover(true)}
            onMouseLeave={() => setWorksHover(false)}
          >
            <span className="nav-item-title">works</span>
            {worksHover && (
              <ul className="dropdown">
                <li onClick={handleDiaryClick}>Post New Diary</li>
                <li>Post New Story</li>
                <li>My Diaries</li>
                <li>My Stories</li>
              </ul>
            )}
          </li>

          <li>wishlist</li>
          <li>sanctum</li>
          <li>user</li>
        </ul>

        <button 
          className="menu-button" 
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          Menu
        </button>
      </div>
    </nav>
  );
}
