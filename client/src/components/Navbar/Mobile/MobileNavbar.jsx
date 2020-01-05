import React, { useState } from 'react'
import {Link} from 'react-router-dom'
import MobileMenu from './MobileMenu'
import './mobile_navbar.scss'
import hamurger from '../images/hamburger.svg'
import person from '../images/person.svg'


const MobileNavbar = () =>{
    const [navToggle, setNavToggle] = useState("")

    const toggle = menuType => () => setNavToggle(navToggle ? "" : menuType)

    return(
        <>
            <header id="header">
                <h1 className="txt">Gamers Link</h1>
            </header>
            {navToggle && <MobileMenu off={() => setNavToggle("")} menuType={navToggle} />}
            <nav id="navbar">
                <div className="bttn" onClick={toggle("default")}>
                    <img className="bttn-img" src={hamurger} alt="menu button"/>
                </div>
                <div className="bttn" onClick={toggle("account")}>
                    <Link to="/account">
                        <img className="bttn-img" src={person} alt="account button"/>
                    </Link>
                </div>
            </nav>
        </>
    )
}

export default MobileNavbar