import React from 'react';
import { Link } from 'react-router-dom';
import planet from '../Assets/Images/planet.png';

const Navbar = () => (
  <div className="navbar">
    <div className="logo">
      <img src={planet} alt="planet" />
      <h1>Space Travelers&apos; Hub</h1>
    </div>
    <div className="nav-links">
      <Link to="/">Rockets</Link>
      <Link className="link-border" to="/missions">Missions</Link>
      <Link to="/myprofile">My Profile</Link>
    </div>
  </div>
);

export default Navbar;
