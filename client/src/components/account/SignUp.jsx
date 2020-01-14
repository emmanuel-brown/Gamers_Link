import React from 'react'
import axios from 'axios'
import useForm from '../useForm'
import validate from '../validate'

const SignUp = props =>{
    const submit = () => {
        axios.post('/user/newUser', values)
            .then(res => console.log(res.data))
            .catch(() => console.log("err"))
    }
    let include = []
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
                <h1 className="header-txt">Sign Up</h1>
            </header>
            <form onSubmit={ handleSubmit } className="form">
                {input("firstName", "First Name:")}
                {input("lastName", "Last Name:")}
                {input("email", "Email:")}
                {input("password", "Password:")}
                <div className="form-bttns">
                    <input className="form-bttns-bttn" type="submit" value="Sign Up"/>
                    <input style={noSwitch} className="form-bttns-bttn" type="button" value="Login" onClick={props.change}/>
                </div>
            </form>
        </main>
    )
}

export default SignUp