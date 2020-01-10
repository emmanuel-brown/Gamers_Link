import React, {useState} from 'react'
import Mobile from './mobile'
import Tablet from './tablet'

const Account = () =>{
    const [ vpWidth, setVpWidth ] = useState(window.innerWidth)

    const display = () => {
        // if(vpWidth >= 1000) return <DesktopNavbar />
        if(vpWidth > 900) return <Tablet />
        if(vpWidth <= 900) return <Mobile />
    }

    const check = () => setVpWidth(window.innerWidth)

    setInterval(check, 1000);
    
    return(
        <>
            {display()}
        </>
    )
}

export default Account