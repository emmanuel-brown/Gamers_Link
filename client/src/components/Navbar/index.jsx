import React, {useState} from 'react'
import MobileNavbar from './Mobile/MobileNavbar'
import TabletNavbar from './tablet/tablet_navbar'
import DesktopNavbar from './desktop/desktop_navbar'

const Main = () =>{
    const [ vpWidth, setVpWidth ] = useState(window.innerWidth)

    const display = () => {
        if(vpWidth >= 1000) return <DesktopNavbar />
        if(vpWidth > 600) return <TabletNavbar />
        if(vpWidth <= 600) return <MobileNavbar />
    }

    const check = () => setVpWidth(window.innerWidth)

    setInterval(check, 1000);

    return(
        <>
            {display()}
        </>
    )
}

export default Main