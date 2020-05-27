import React, {useState} from 'react'
import useForm from './useForm'
import validate from '../validate'
import axios from 'axios'

const NewPost = () =>{
    let include = []
    const submit = () => axios.post("/post/Newpost", values)
        .then(res => console.log(res.data))
        .catch(() => console.log("err"))
    
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
    console.log(values)
    return(
        <form onSubmit={ handleSubmit }>
            {input("subject", "Subject")}
            {input("game", "What's the Game")}
            {input("details", "Details")}
            {input("postOwner", "postOwner")}
            <div>
                <input type="submit" value="Post"/>
            </div>
        </form>
    )
}

export default NewPost