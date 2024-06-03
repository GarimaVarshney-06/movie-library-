// Navbar.js
import React from 'react';

import { Link, useNavigate } from 'react-router-dom';

const Navbar = () => {
    const navigate = useNavigate();
    const token = localStorage.getItem('token');

    const handleFavoritesClick = () => {
        if (token) {
          navigate('/fav');
        } else {
          navigate('/login');
        }
      };
      const handleLogout = () => {
        localStorage.removeItem('token');
        navigate('/login');
      };
  return (
    <nav className="navbar ">
      <div className="navbar-left">
      <h1 className="font-bold text-center py-3" style={{ color: '#3bb19b', fontSize: '4rem' }}>MOVIE_LIBRARY</h1>



        
      </div>
      <div className="navbar-right">
        <a  onClick={handleFavoritesClick}>Favorites</a>
        {!token ? (
          <Link to="/login" className="navbar-link">Login</Link>
        ) : (
          <Link to ="/" onClick={handleLogout} className="navbar-link">Logout</Link>
        )}      </div>
    </nav>
  );
};

export default Navbar;
