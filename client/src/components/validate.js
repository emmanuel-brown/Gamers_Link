import v from 'validator'

export default function validation(values, include){
    let errors = {}
    let show = {}

    // user start
    if(!values.firstName){
        errors.firstName = "Please enter a first name"
    }
    if(!values.lastName){
        errors.lastName = "Please enter a last name"
    }
    if(!values.email){
        errors.email = "Please enter a email"
    } else if(!v.isEmail(values.email)){
        errors.email = "Please enter a valid email"
    }
    if(!values.password){
        errors.password = "Please enter a password"
    }
    // user end

    // post start
    if(!values.subject){
        errors.subject = "Please enter a subject"
    }
    if(!values.game){
        errors.game = "What's the game? Even if you make it up!"
    }
    // post end
    const includer = typeof include === "array" || include.length > 0
    includer && include.map(prop => errors[prop] ? show[prop] = errors[prop] : null)
    
    return includer ? show : errors
}