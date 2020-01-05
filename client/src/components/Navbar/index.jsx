import React, {useState} from 'react'
import MobileNavbar from './Mobile/MobileNavbar'
import NormalNavbar from './Navbar'

const Main = () =>{
    const [ vpWidth, setVpWidth ] = useState(window.innerWidth)

    const display = () => vpWidth <= 600 ? <MobileNavbar /> : <NormalNavbar />

    const check = () => setVpWidth(window.innerWidth)

    setInterval(check, 1000);

    return(
        <>
            {display()}
        </>
    )
}

export default Main