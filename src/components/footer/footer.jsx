import React from "react";
import { useLocation } from "react-router";
import "./footer.css";
import Logo from "../../imgs/jmcdesignerlogowhite.png";

function Footer() {
  const location = useLocation();

  return (
    <div
      className={
        location.pathname === "/contact"
          ? "full-footer-holder-contact"
          : "full-footer-holder"
      }
    >
      <div className="center-footer">
        <div className="logo-footer">
          <div className="lines-footer"></div>
          <div className="name-footer-logo">
            {/* <h2>JMC</h2>
            <p>DESIGNER</p> */}
            <img src={Logo} alt="" />
          </div>
          <div className="lines-footer"></div>
        </div>
        <div className="navigation-footer">
          <div className="nav-footer-home">
            <a href="../collections/collections.jsx">COLLECTIONS</a>
            <a href="../projects/project.jsx">PROJECTS</a>
          </div>
          <div>
            <div className="social-icon-holder">
              <i class="fas fa-phone"></i>
              <a href="">
                <i class="fab fa-instagram"></i>
              </a>
              <i class="far fa-envelope"></i>
            </div>
            {/* <i class="fas fa-grip-lines-vertical"></i> */}
          </div>
          <div className="nav-footer-home">
            <a href="../about/about.js">ABOUT</a>
            <a href="../location/location.jsx">LOCATION</a>
          </div>
        </div>
        <div className="contact-box-footer">
          <h2>CONTACT INFORMATION</h2>
          <div>JSCMONTERO31@GMAIL.COM</div>
          <div>3475284047</div>
        </div>
        <div className="copyright">
          <i class="far fa-copyright"></i>
          <p>2021 JMC DESIGNER</p>
        </div>
      </div>
    </div>
  );
}

export default Footer;
