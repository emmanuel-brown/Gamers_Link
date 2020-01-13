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
                    <Login noSwitch={true}/>
                </div>
                <div className="right">
                    <SignUp noSwitch={true} />
                </div>
            </div>
        </main>
    )
}

export default Tablet