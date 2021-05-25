import React from 'react'
import LogoSider from '../images/logo192.png'

export const Sidebar = () => {
    return (

            
        <nav className="home__sidebar">
            <ul className="home_sidebar-ul-left">
            <a href="#Icon">
                <img src = {LogoSider} className="LogoSider" ></img>
            </a>
            </ul>
            <ul className="home_sidebar-ul-right">
            <a href="#home" >
                <button className="btn_home-outline">Comieza</button>
                </a>
            <a href="#contact">Contact</a>
            <a href="#about">About</a>
            </ul>
        </nav>

    )
}
