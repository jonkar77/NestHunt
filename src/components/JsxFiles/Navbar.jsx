import React, { useState, useEffect } from 'react';
import '../../CssFiles/NavBar.css';

const Navbar = () => {
  const [scrollPosition, setScrollPosition] = useState(0);
  const [lastScrollPosition, setLastScrollPosition] = useState(0);
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      const currentPosition = window.scrollY;
      setScrollPosition(currentPosition);

      if (currentPosition > lastScrollPosition && isVisible) {
        setIsVisible(false);
      } else if (currentPosition < lastScrollPosition && !isVisible) {
        setIsVisible(true);
      }

      setLastScrollPosition(currentPosition);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [isVisible, lastScrollPosition]);

  const navColor = scrollPosition > 0 ? '#a86dc0' : '#0dddce';
  const linkColor = scrollPosition > 0 ? '#000' : '#fff';

  return (
    <div className={`navbar ${isVisible ? 'visible' : 'hidden'}`} style={{ backgroundColor: navColor }}>
      <div className='navbar-container'>
        <div className='nav-links-container'>
          <ul className='nav-links'>
            <li className='nav-link'>
              <a href='#buy' style={{ color: linkColor }}>Home</a>
            </li>
            <li className='nav-link'>
              <a href='#sell' style={{ color: linkColor }}>Services</a>
            </li>
            <li className='nav-link'>
              <a href='#rent' style={{ color: linkColor }}>About</a>
            </li>
            <li className='nav-link'>
              <a href='#help' style={{ color: linkColor }}>Listings</a>
            </li>
          </ul>
        </div>
        <div className='logo-container'>
          <img src='/logo.png' alt='Logo' className='logo' />
        </div>
    
        <div className='actions-container'>
        <button className='hit'>
            <a href='#login'>Model</a>
          </button>
          <button className='btn-1'>
            <a href='#login' style={{ color: linkColor }}>Login</a>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
