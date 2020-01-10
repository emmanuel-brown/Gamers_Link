import React from 'react'
import {Link} from 'react-router-dom'
import './home.scss'
import consoles from '../images/console.svg'
import computer from '../images/computer.svg'

const Desktop = () =>{

    return(
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

        </main>
    )
}

export default Desktop