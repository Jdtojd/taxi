
import React, { useState } from "react";
import { Link } from "react-router-dom";
import { HashLink } from 'react-router-hash-link';
import "../Navbar.css"; // Import the CSS file

const Navbar = () => {
  const [isNavCollapsed, setIsNavCollapsed] = useState(true);

  const handleNavCollapse = () => setIsNavCollapsed(!isNavCollapsed);

  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="container">
        <Link className="navbar-brand" to="/">
          Taxi Rental
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded={!isNavCollapsed ? true : false}
          aria-label="Toggle navigation"
          onClick={handleNavCollapse}
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className={`collapse navbar-collapse ${isNavCollapsed ? "" : "show"}`} id="navbarNav">
          <ul className="navbar-nav ml-auto">
          <li className="nav-item">
            <HashLink smooth to='/about-us/#home' > Home </HashLink>
            </li>
            <li className="nav-item">
            <HashLink smooth to='/about-us/#about' > About </HashLink>
            </li>
            <li className="nav-item">
            <HashLink smooth to='/about-us/#services' > Services </HashLink>
            </li>
            <li className="nav-item">
            <HashLink smooth to='/about-us/#contact' > Contact </HashLink>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

