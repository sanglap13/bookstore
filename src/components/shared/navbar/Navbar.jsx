import React, { useState } from "react";
import { Link } from "react-router-dom";
import logo from "../../../assets/logo.png";
import { HiOutlineMenuAlt3 } from "react-icons/hi";

import "./navbar.css";

const Navbar = () => {
  const [toggleMenu, setToggleMenu] = useState(false);
  const handleNavbar = () => setToggleMenu(!toggleMenu);

  return (
    <div className="navbar">
      <div className="navbar-content-container">
        <div className="navbar-content-brand">
          <Link to="/" className="brand-logo">
            <img src={logo} alt="logo" />
            <span className="brand-name">Readers</span>
          </Link>
          <button
            type="button"
            className="navbar-menu-toggle-button"
            onClick={handleNavbar}
          >
            <HiOutlineMenuAlt3
              size={35}
              style={{
                color: `${toggleMenu ? "#fff" : "#010101"}`,
              }}
            />
          </button>
        </div>

        <div
          className={
            toggleMenu
              ? "navbar-menu-collapse show-navbar-menu-collapse"
              : "navbar-menu-collapse"
          }
        >
          <ul className="navbar-items">
            <li className="navbar-item">
              <Link to="book" className="navbar-link">
                Home
              </Link>
            </li>
            <li className="navbar-item">
              <Link to="about" className="navbar-link">
                About
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
