import React from 'react'
import {Link} from 'react-router-dom'
import './desktop.scss'
import consoles from '../../images/console.svg'
import computer from '../../images/computer.svg'

const Desktop = () =>(
    <main id="Home-Desktop">
        <section className="hero">
            <div className="hero-container">
                <div className="hero-container-left">
                    <h1 className="hero-container-left-txt">Always Be the first to know</h1>
                    <Link to='/account'><button className="hero-container-left-bttn">Sign Up</button></Link>
                </div>
                <div className="hero-container-right">
                    <img className="hero-container-right-image-1" src={consoles} alt="Console"/>
                    <img className="hero-container-right-image-2" src={computer} alt="computer"/>
                </div>
            </div>
        </section>
        <section className="partners">
            <p className="partners-txt">Rocket League</p>
            <p className="partners-txt">Advance Warfare</p>
            <p className="partners-txt">Grand Theft Auto</p>
            <p className="partners-txt">Cyber Punk</p>
            <p className="partners-txt">MineCraft</p>
        </section>
    </main>
)


export default Desktop