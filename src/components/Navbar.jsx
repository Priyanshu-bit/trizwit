import React from "react";

const Navbar = () => {
  return (
    <div className="navbar">
      <div className="logo">Logo</div>
      <div className="nav-r">
        <button className="get-in-touch">Get In Touch</button>

        <div className="menu-container">
          <div className="menu">
            <div class="bar"></div>
            <div class="bar"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
