import React from 'react'
import './content.scss'

const Content = () =>(
    <section className="sections">
        <div className="part-one">
            <section className="sections-1 section">
                <div className="sections-1-left">
                    <img className="sections-1-left-img" src="https://images.unsplash.com/photo-1536104968055-4d61aa56f46a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1400&q=80" alt="developer"/>
                </div>
                <div className="sections-1-right">
                    <h3 className="sections-1-right-header header">Who Are We?</h3>
                    <p className="sections-1-right-text text">Have you have had gaming idea that you ever wanted to be heard? Well we're here to blur those lines between the developer and gamer.</p>
                </div>
            </section>
            <section className="sections-2 section">
                <div className="sections-2-left">
                    <img className="sections-2-left-img" src="https://images.unsplash.com/photo-1506919258185-6078bba55d2a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=3430&q=80" alt="developer"/>
                </div>
                <div className="sections-2-right">
                    <h3 className="sections-2-right-header header">Developers</h3>
                    <p className="text sections-2-right-text">Hello developers and game creator. Finally a go to dedicated platform to intake valuable data from your game. Inform and get feedback for users users. *this text is not final</p>
                </div>
            </section>
            <section className="sections-3 section">
                <section className="sections-3 section">
                    <div className="sections-3-left">
                        <img className="sections-3-left-img" src="https://images.unsplash.com/flagged/photo-1552725391-4ae757a7ff8c?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60" alt="developer"/>
                    </div>
                    <div className="sections-3-right">
                        <h3 className="sections-3-right-header header">Gamers</h3>
                        <p className="text sections-3-right-text">Feel like game developers should add more easter eggs, POST IT! Have a new amazing idea, POST IT! Had great breakfast, maybe don't post it.</p>
                    </div>
                    </section>
            </section>
        </div>
    </section>
)

export default Content