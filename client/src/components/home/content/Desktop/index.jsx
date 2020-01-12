import React from 'react'
import './content.scss'
import bg1 from '../images/Bg1.svg'

const Content = () =>(
    <section className="sections">
        <section className="sections-1">
            <div className="sections-1-left">
                <img className="sections-1-left-img" src="https://images.unsplash.com/photo-1506919258185-6078bba55d2a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=3430&q=80" alt="developer"/>
            </div>
            <div className="sections-1-right">
                <h3 className="sections-1-right-header header">Who Are We?</h3>
                <p className="sections-1-right-text text">Have you have had gaming idea that you ever wanted to be heard? Well we're here to blur those lines between the developer and gamer.</p>
            </div>
        </section>
        <section className="sections-2"></section>
        <section className="sections-3"></section>
    </section>
)

export default Content