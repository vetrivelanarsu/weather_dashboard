import './Rightnav.css';
import React, { useState } from 'react';
import { FaEllipsisH } from 'react-icons/fa';
import Image from '../assets/image1.png';

export default function Rightnav() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleClick = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleMenuItemClick = (action) => {
    // Perform an action based on the selected menu item
    switch (action) {
      case 'logout':
        // Perform logout action
        console.log('Logged out');
        break;
      case 'login':
        // Perform login action
        console.log('Logged in');
        break;
      case 'settings':
        // Perform settings action
        console.log('Settings');
        break;
      default:
        break;
    }

    setIsMenuOpen(false);
  };

  return (
    <div className='rightnav'>
      <div className='iconic'>
        <div className="meatball-icon" onClick={handleClick}>
          <FaEllipsisH className="meatball-icon" />
        </div>
        {isMenuOpen && (
          <ul className="menu">
            <li onClick={() => handleMenuItemClick('logout')}>Logout</li>
            <li onClick={() => handleMenuItemClick('login')}>Login</li>
            <li onClick={() => handleMenuItemClick('settings')}>Settings</li>
          </ul>
        )}
      </div>
      <div className='rightnavimg'>
        <img src={Image} alt='' />
      </div>
    </div>
  );
}
