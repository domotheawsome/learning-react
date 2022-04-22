import React from "react"

export default function Navbar() {
    return(
        <nav>
            <img className="navbar--img" src={process.env.PUBLIC_URL + `/images/globe.png`} alt="globe" />
            <h1 className="navbar--text">my travel journal.</h1>
        </nav>
    )

}