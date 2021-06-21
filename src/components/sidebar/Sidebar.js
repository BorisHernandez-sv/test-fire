import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import LogoSider from '../images/logo192.png'
import { GiToggles } from "react-icons/gi";

export const Sidebar = () => {

    const [click, setClick] = useState(false);
    const handleClick = () => setClick(!click);
    return (


        <>
        <nav className="navbar">
          <div className="nav-container">
            <NavLink exact to="/" className="nav-logo">
              Revive
              <i className="fas fa-code"></i>
            </NavLink>
  
            <ul className={click ? "nav-menu active" : "nav-menu"}>
              <li className="nav-item">
                <NavLink
                  exact
                  to="/"
                  activeClassName="active"
                  className="nav-links"
                  onClick={handleClick}
                >
                  Home
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink
                  exact
                  to="/review"
                  activeClassName="active"
                  className="nav-links"
                  onClick={handleClick}
                >
                  Review
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink
                  exact
                  to="/checkout"
                  activeClassName="active"
                  className="nav-links"
                  onClick={handleClick}
                >
                  Checkout
                </NavLink>
              </li>
              
            </ul>
            <div className="nav-icon" onClick={handleClick}>
              <i className={click ? "fas fa-times" : "fas fa-bars"}></i>
            </div>
          </div>
        </nav>
      </>

    )
}
