import { useState, useEffect } from 'react'

const useForm = (callback, validate, include) =>{
    const [ values, setValues ] = useState({
        firstName: "",
        lastName: "",
        email: "",
        password: ""
    })

    const [errors, setErrors ] = useState({})
    const [ isSubmit, setIsSubmit ] = useState(false)

    const handleChange = e =>{
        e.preventDefault()
        const { name, value } = e.target
        setValues({ ...values, [name]: value })
    }

    const handleSubmit = e =>{
        e.preventDefault()
        setErrors(validate(values, include))
        setIsSubmit(true)
    }

    useEffect(() =>{
        if(Object.keys(errors).length === 0 && isSubmit){
            callback()
        }
    }, [errors])

    return{
        handleChange,
        handleSubmit,
        values,
        errors
    }
}

export default useForm