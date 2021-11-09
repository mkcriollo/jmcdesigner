import "./nav.css";
import React from "react";
import { Link, useLocation } from "react-router-dom";
import Logo from "../../imgs/jmcdesignerlogo.png";
import LogoWhite from "../../imgs/jmcdesignerlogowhite.png";

function Nav() {
  const location = useLocation();

  function openMenuPhone() {
    let menuPhone = document.querySelector(".menu-phone");
    let button = document.querySelector(".fa-bars");
    const list = document.querySelector(".project-list-holder");

    if (list) {
      list.style.zIndex = "0";
    }
    menuPhone.style.display = "flex";
  }

  function closePhoneMenu() {
    let menuPhone = document.querySelector(".menu-phone");
    let button = document.querySelector(".fa-times");
    const list = document.querySelector(".project-list-holder");

    if (list) {
      list.style.zIndex = "3";
    }
    menuPhone.style.display = "none";
  }

  return (
    <nav className="navbar">
      <div className="left-nav">
        <Link to="/">
          <img
            src={location.pathname === "/" ? LogoWhite : Logo}
            className="logo"
          ></img>
        </Link>
        <ul className="nav-links">
          <Link to="/collections">
            <li className="linkColor">COLLECTIONS</li>
          </Link>
          <Link to="/projects">
            <li className="linkColor">PROJECTS</li>
          </Link>
          <Link to="/about">
            <li className="linkColor">ABOUT</li>
          </Link>
          <Link to="/location">
            <li className="linkColor">LOCATION</li>
          </Link>
        </ul>
      </div>
      <div className="right-nav">
        <Link to="/contact">
          <button className="contact-btn">CONTACT</button>
        </Link>
        <i className="fas fa-bars" onClick={() => openMenuPhone()}></i>
        <div className="menu-phone">
          <i class="fas fa-times" onClick={() => closePhoneMenu()}></i>
          <Link to="/collections" onClick={() => closePhoneMenu()}>
            <li>COLLECTIONS</li>
          </Link>
          <Link to="/projects" onClick={() => closePhoneMenu()}>
            <li>PROJECTS</li>
          </Link>
          <Link to="/about" onClick={() => closePhoneMenu()}>
            <li>ABOUT</li>
          </Link>
          <Link to="/contact" onClick={() => closePhoneMenu()}>
            <li>CONTACT</li>
          </Link>
        </div>
      </div>
    </nav>
  );
}

export default Nav;
