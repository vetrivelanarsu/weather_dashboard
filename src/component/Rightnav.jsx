import './Rightnav.css';
import React, { useContext, useState } from 'react';
import { FaEllipsisH } from 'react-icons/fa';
import Image from '../assets/image1.png';
import AuthContextProvider, { AuthContext } from '../Context/AuthContextProvider';

export default function Rightnav() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { isAuth, login, logout } = useContext(AuthContext);

  const handleClick = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleMenuItemClick = (action) => {
    switch (action) {
      case 'logout':
        
        logout();
        console.log('Logged out');
        break;
      case 'login':
       
        login();
        console.log('Logged in');
        break;
      case 'settings':
        
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
            <li onClick={() => handleMenuItemClick('logout')} disabled={isAuth}>Logout</li>
            <li onClick={() => handleMenuItemClick('login')} disabled={!isAuth}>Login</li>
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
