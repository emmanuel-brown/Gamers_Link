import React, {useState} from 'react'
import './tablet.scss'
import Login from '../Login'
import SignUp from '../SignUp'



const Tablet = () =>{
    const [ type, setType ] = useState("signUp")

    return(
        <main id="desktop">
            <div className="form-box">
                <div className="left">
                    
                </div>
                <div className="right">
                    { type === "signUp" && <SignUp change={ () => setType("login") } /> }
                    { type === "login" && <Login change={ () => setType("signUp") }/> }
                </div>
            </div>
        </main>
    )
}

export default Tablet