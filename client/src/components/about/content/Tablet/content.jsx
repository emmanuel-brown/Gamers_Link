import React from 'react'
import './main.scss'

const img1 = "https://images.unsplash.com/photo-1536104968055-4d61aa56f46a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1400&q=80"
const img2 = "https://images.unsplash.com/photo-1506919258185-6078bba55d2a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=3430&q=80"
const img3 = "https://images.unsplash.com/flagged/photo-1552725391-4ae757a7ff8c?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60"


const Main = () =>(
    <div id="sections">
        <section className="section-1 section">
        <img className="section-1-foot foot" src={img1} alt=""/>
            <h3 className="section-1-head head">Who Are We?</h3>
            <p className="section-1-body body">
                Have you ever had an idea that you ever wanted to be heard? 
                Well we're here to blue those lines between the developer and gamer.
            </p>
        </section>
        <section className="section-1 section">
            <img className="section-1-foot foot" src={img2} alt=""/>
            <h3 className="section-1-head head">Developer</h3>
            <p className="section-1-body body">
                Hello developers and game creator. Finally a go to dedicated platform to intake valuable data from your game. 
                Inform and get feedback for users users. *this text is not final
            </p>
        </section>
        <section className="section-1 section">
            <img className="section-1-foot foot" src={img3} alt=""/>
            <h3 className="section-1-head head">Gamers</h3>
            <p className="section-1-body body">
                Feel like game developers should add more easter eggs, POST IT! 
                Have a new amazing idea, POST IT! Had great breakfast, maybe don't post it.
            </p>
        </section>
    </div>
)

export default Main