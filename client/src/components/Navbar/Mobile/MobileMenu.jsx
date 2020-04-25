import React from 'react'
import {Link} from 'react-router-dom'

const MobileMenu = props =>{
    const { off, menuType } = props
    const link = (to, name) => (
        <Link to={to} className="link" onClick={off}>
            {name}
        </Link>
    )
    const display = () =>{
        switch (menuType) {
            case "default":
                return(
                    <div id="MobileMenu">
                        {link("/", "Home")}
                        {link("/about", "About")}
                        {link("/support", "Suport")}
                    </div>
                )
            case "account":
                return(
                    <div id="MobileMenu">
                        {link("/account", "Profile")}
                        {link("/likes", "Like/Dislikes")}
                        {link("/friends", "Friends")}
                    </div>
                )
            default:
                break;
        }
    }
    return(
        <>
            {display()}
        </>
    )
}

export default MobileMenu