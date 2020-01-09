import React from 'react'
import { Link } from 'react-router-dom'
import './desktop_navbar.scss'

const Navbar = () =>{

    return(
        <nav id="nav">
            <div className="navigation">
                <div className="view">
                    <header className="header">
                        <span className="header-line"></span>
                        <h1 className="header-txt">Gamers Link</h1>
                        <span className="header-line"></span>
                    </header>
                </div>
                <div className="links">
                    <div className="links-link">
                        <Link to="/">
                            <p className="links-link-txt">Home</p>
                        </Link>
                    </div>
                    <div className="links-link">
                        <Link to="/account">
                            <p className="links-link-txt">Discover</p>
                        </Link>
                    </div>
                    <div className="links-link">
                        <Link to="/account">
                            <p className="links-link-txt">Support Us</p>
                        </Link>
                    </div>
                    <div className="links-link">
                        <Link to="/account">
                            <p className="links-link-txt">About</p>
                        </Link>
                    </div>
                    <div className="links-link">
                        <Link to="/account">
                            <p className="links-link-txt">Login/Sign Up</p>
                        </Link>
                    </div>
                </div>
            </div>
        </nav>
    )
}

export default Navbar