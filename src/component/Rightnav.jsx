import './Rightnav.css';
import React, { useContext, useState } from 'react';
import { FaBars, FaEllipsisH } from 'react-icons/fa';
import Image from '../assets/image1.png';
import AuthContextProvider, { AuthContext } from '../Context/AuthContextProvider';

export default function Rightnav() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { isAuth, login, logout } = useContext(AuthContext);
  const screenWidth = window.innerWidth;

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

  const renderMenuItems = () => {
    return (
      <ul className="menu">
        <li onClick={() => handleMenuItemClick('logout')} disabled={isAuth}>
          Logout
        </li>
        <li onClick={() => handleMenuItemClick('login')} disabled={!isAuth}>
          Login
        </li>
        <li onClick={() => handleMenuItemClick('settings')}>Settings</li>
      </ul>
    );
  };

  return (
    <div className="rightnav">
      {screenWidth < 600 ? (
        <>
          <div className="burger-icon" onClick={handleClick}>
            <FaBars className="burger-icon" />
          </div>
          {isMenuOpen && renderMenuItems()}
        </>
      ) : (
        <>
          <div className="iconic">
            <div className="meatball-icon" onClick={handleClick}>
              <FaEllipsisH className="meatball-icon" />
            </div>
            {isMenuOpen && renderMenuItems()}
          </div>
          <div className="rightnavimg">
            <img src={Image} alt="" />
          </div>
        </>
      )}
    </div>
  );
}
