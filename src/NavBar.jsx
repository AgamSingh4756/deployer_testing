import React from 'react';
import './NavBar.css'; 

function NavBar() {
  return (
    <nav className="navbar">
      <ul className="nav-list">
        <li className="nav-item">
          <a><b>DEV@Deakin</b></a>
        </li>
      </ul>
      <div className="search-bar-container">
        <input type="text" placeholder="Search" className="search-bar" />
      </div>
      <div className="nav-buttons">
        <button className="post-button">Post</button>
        <button className="login-button">Login</button>
      </div>
    </nav>
  );
}

export default NavBar;