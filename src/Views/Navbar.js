import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import planet from '../Assets/Images/planet.png';

function Navbar() {
  const location = useLocation();

  return (
    <div className="navbar">
      <div className="logo">
        <img src={planet} alt="planet" />
        <h1>Space Travelers&apos; Hub</h1>
      </div>
      <div className="nav-links">
        <div className={location.pathname === '/' ? 'active' : ''}>
          <Link to="/">Rockets</Link>
        </div>
        <div className={location.pathname === '/missions' ? 'active' : ''}>
          <Link className="link-border" to="/missions">
            Missions
          </Link>
        </div>
        <div className={location.pathname === '/myprofile' ? 'active' : ''}>
          <Link to="/myprofile">My Profile</Link>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
