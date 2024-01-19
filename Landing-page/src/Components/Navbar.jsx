import { useState } from "react";

const Navbar = () => {
  return (
    <>
      <nav>
        <div className="logo">
          <img src="/Images/brand_logo.png" alt="logo" />
        </div>
        <div className="tabs">
          <ul>
            <li href="#">HOME</li>
            <li href="#">ABOUT</li>
            <li href="#">LOCATION</li>
            <li href="#">CONTACT</li>
          </ul>
        </div>
        <div className="nav-btn">
          <button>Login</button>
        </div>
       
      </nav>
    </>
  );
};

export default Navbar;
