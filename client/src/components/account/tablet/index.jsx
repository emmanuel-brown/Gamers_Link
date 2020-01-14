import React, {useState} from 'react'
import './tablet.scss'
import Login from '../Login'
import SignUp from '../SignUp'



const Tablet = () =>{
    const [ type, setType ] = useState("signUp")
    const [ vpWidth, setVpWidth ] = useState(window.innerWidth)

    const check = () => setVpWidth(window.innerWidth)

    setInterval(check, 1000);

    return(
        <main id="desktop">
            <div className="form-box">
                <div className="left" style={{display: vpWidth > 1207 ? "block" : type === "login" ? "block" : "none"}}>
                    <Login noSwitch={vpWidth > 1207} change={ () => setType("signUp") } />
                </div>
                <div className="right" style={{display: vpWidth > 1207 ? "block" : type === "signUp" ? "block" : "none"}}>
                    <SignUp noSwitch={vpWidth > 1207} change={ () => setType("login") } />
                </div>
            </div>
        </main>
    )
}

export default Tablet