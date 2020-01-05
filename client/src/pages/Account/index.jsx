import React, {useState} from 'react'
import './account.scss'
import SignUp from './SignUp'
import Login from './Login'

const Account = () =>{
    const [ type, setType ] = useState("")
    
    return(
        <div>
            {type === "" &&
                <div id="choose">
                    <div className="location">
                        <h1 className="location-txt">User?</h1>
                    </div>
                    <div className="select">
                        <button className="select-bttn" onClick={ () => setType("signUp") }>
                            <p className="select-bttn-txt">Sign Up</p>
                        </button>
                        <button className="select-bttn" onClick={ () => setType("login") }>
                            <p className="select-bttn-txt">Login</p>
                        </button>
                    </div>
                </div>
            }
            { type === "signUp" && <SignUp change={ () => setType("login") } /> }
            { type === "login" && <Login change={ () => setType("signUp") }/> }
        </div>
    )
}

export default Account