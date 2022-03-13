import React from "react"
import logo from "../images/airbnb-logo.png"

function Nav() {
    return (
        <nav>
            <img src={logo} className="nav--img" alt="logo" />
        </nav>
    )
}

export default Nav;