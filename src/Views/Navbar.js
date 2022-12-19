import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => (
  <div>
    <Link to="/">Rockets</Link>
    <Link to="/missions">Missions</Link>
    <Link to="/myprofile">My Profile</Link>
  </div>
);

export default Navbar;
