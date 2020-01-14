import React, { useState } from 'react'
import axios from 'axios'
import useForm from '../../components/useForm'
import validate from '../../components/validate'

const Login = props =>{
    const [errMessage, setErrMessage] = useState("")
    let include = []
    const submit = () => {
        const info = {}
        include.map(input => info[input] = values[input])
        axios.post('/user/login', info)
            .then(user => console.log(user.data))
            .catch(() => setErrMessage("Login failed please trying again later"))
    }
    
    const { handleChange, handleSubmit, values, errors } = useForm(submit, validate, include)
    
    const input = (name, labelName) =>{
        include.push(name)
        return(
            <div className="form-field">
                <label className="form-field-label" htmlFor={name}>{labelName}</label>
                <input className="form-field-text" type="text" name={name} value={values[name]} onChange={handleChange} />
                <p className="form-field-error">{errors[name]}</p>
            </div>
        )
    }

    const noSwitch = {
        display: props.noSwitch ? "none" : "block"
    }

    return(
        <main id="content">
            <header className="header">
                <h1 className="header-txt">Login</h1>
            </header>
            { errMessage && <p>{errMessage}</p> }
            <form onSubmit={ handleSubmit } className="form">
                {input("email", "Email:")}
                {input("password", "Password:")}
                <div className="form-bttns">
                    <input className="form-bttns-bttn" type="submit" value="Login"/>
                    <input style={noSwitch}className="form-bttns-bttn" type="button" value="Sign Up" onClick={props.change}/>
                </div>
            </form>
        </main>
    )
}

export default Login