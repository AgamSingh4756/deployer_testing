import React from "react";
import "./NavBar.css";
import { Link } from "react-router-dom";

function NavBar() {
  return (
    <nav className="navbar">
      <ul className="nav-list">
        <li className="nav-item">
          <Link to="/"><b>DEV@Deakin</b></Link>
        </li>
      </ul>
      <div className="search-bar-container">
        <input type="text" placeholder="Search" className="search-bar" />
      </div>
      <div className="nav-buttons">
        <button className="post-button">Post</button>
        <Link to="/signin">
          <button className="login-button">Login</button>
        </Link>
      </div>
    </nav>
  );
}

export default NavBar;
