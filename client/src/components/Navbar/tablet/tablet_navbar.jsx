import React, {useState} from 'react'
import './tablet_navbar.scss'
import hamburger from '../images/hamburger.svg'

const Navbar = () =>{
    const [toggle, setToggle] = useState(false)

    const move = {
        transform: `translateY(${toggle ? 0 : "-100%"})`,
        transition: "1s ease all"
    }

    console.log("toggle", toggle)

    return(
        <nav id="navigation">
            <div className="view">
                <header className="header">
                    <span className="header-line"></span>
                    <h1 className="header-txt">Gamers Link</h1>
                    <span className="header-line"></span>
                </header>
                <div className="navigator" onClick={() => setToggle(!toggle)}>
                    <img src={hamburger} alt="Menu Button"/>
                </div>
            </div>
            <div className="dropdown" style={move}>
                <div className="dropdown-sections">
                    <div className="dropdown-sections-section">
                        <p className="section-txt">Home</p>
                        <p className="section-txt">About</p>
                        <p className="section-txt">Support</p>
                    </div>
                    <span className="dropdown-sections-border"></span>
                    <div className="dropdown-sections-section">
                        <p className="section-txt">Home</p>
                        <p className="section-txt">About</p>
                        <p className="section-txt">Support</p>
                    </div>
                </div>
            </div>
        </nav>
    )
}

export default Navbar