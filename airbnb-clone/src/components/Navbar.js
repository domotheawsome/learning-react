import React from "react"

function Nav() {
    return (
        <nav>
            <img src={process.env.PUBLIC_URL + `/images/airbnb-logo.png`} className="nav--logo" alt="logo" />
        </nav>
    )
}

export default Nav;