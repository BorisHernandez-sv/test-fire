import React from 'react'
import LogoSider from '../images/logo192.png'
import { GiToggles } from "react-icons/gi";

export const Sidebar = () => {
    return (

            
        <nav className="nav__menu">
            <ul className="nav__sidebar-ul-left">
            <li className="nav__item-logo">
                <a href="#">
                    {/* <img src = {LogoSider} className="nav__logo-sidebar" ></img> */}
                <h1>Revive</h1>
                </a>
            </li>
            </ul>
            <ul className="nav__sidebar-ul-right">
            <li className=" nav__item nav__item-toggle">
                <a >
                        <GiToggles 
                        size = "64px"
                        />
                </a>
            </li>
            <li className="nav__item nav__contact">
                <a href="#contact">Contáctenos</a>
            </li>
            <li className="nav__item nav__about">
                <a href="#about">Ayuda</a>
            </li>
            <li className="nav__item nav__item-btn">
                <a href="#home" ><button className="btn_home-outline">Comienza</button></a>
            </li>
            
            </ul>
        </nav>

    )
}
