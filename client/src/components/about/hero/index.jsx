import React, {useState} from 'react'
import Desktop from './Desktop'

const Hero = () =>{

    const [ vpWidth, setVpWidth ] = useState(window.innerWidth)

    const display = () => {
        if(vpWidth >= 1000) return <Desktop />
        // if(vpWidth > 900) return <Tablet />
        // if(vpWidth <= 900) return <Mobile />
    }

    const check = () => setVpWidth(window.innerWidth)

    setInterval(check, 1000);
    return(
        display()
    )
}

export default Hero