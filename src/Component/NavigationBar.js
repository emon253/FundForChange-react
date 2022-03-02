import { NavLink } from "react-router-dom";
import { useState } from "react";
import "../styles/navbar.css";
import { GiHamburgerMenu } from "react-icons/gi";

export default function NavigationBar() {
  const [showMediaIcons, setShowMediaIcons] = useState(false);

  return (
    <>
      {/* Top Nav */}
      {/* <div className="nav1">
        <div className="login-menu">
          <ul>
            <li>
              <NavLink to="/login">Login</NavLink>
              <NavLink to="/admin">Admin</NavLink>
            </li>
          </ul>
        </div>
      </div> */}
      {/* Top Nav */}
      <nav className="main-nav">
        <div className="logo">
          <h2>
            <span>F</span>und For Change
          </h2>
        </div>
        {/* Main menues start */}
        <div
          className={
            showMediaIcons ? "menu-link mobile-menu-link" : "menu-link"
          }
        >
          <ul>
            <li>
              <NavLink className="link" to="/">Home</NavLink>
            </li>
            <li>
              <NavLink className="link" to="/event">Events</NavLink>
            </li>

            <li>
              <NavLink className="link" to="/contact">Contact</NavLink>
            </li>
            <li>
              <NavLink className="link" to="/services">Service</NavLink>
            </li>
            <div className="navc2"></div>
          </ul>
        </div>

        {/* Hamburger icon */}
        <div className="social-media">
          <ul className="social-media-desktop">
            <li>
              <NavLink className="link" to="/login">Login</NavLink>
            </li>
          </ul>
          <div
            onClick={() => setShowMediaIcons(!showMediaIcons)}
            className="hamburger-menu"
          >
            <GiHamburgerMenu />
          </div>
        </div>
      </nav>
    </>
  );
}
