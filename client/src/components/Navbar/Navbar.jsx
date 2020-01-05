import React, {useState} from 'react'
import './navbar.scss'
import hamburger from './images/hamburger.svg'

const Navbar = () =>{
    
    return(
        <nav id="navigation">
            <div className="view">
                <header className="header">
                    <span className="header-line"></span>
                    <h1 className="header-txt">Gamer Link</h1>
                    <span className="header-line"></span>
                </header>
                <div className="navigator">
                    <img src={hamburger} alt="Menu Button"/>
                </div>
            </div>
            <div className="dropdown">
                <div className="section">
                    <p className="section-txt">Home</p>
                    <p className="section-txt">About</p>
                    <p className="section-txt">Support</p>
                </div>
                <div className="section"></div>
            </div>
        </nav>
    )
}

export default Navbar