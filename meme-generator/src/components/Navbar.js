import React from "react"

function Nav() {
    return (
        <nav>
            <img src={process.env.PUBLIC_URL + `/images/trollface.png`} className="nav--logo" alt="logo" />
            <h1 className="nav--title">Meme Generator</h1>
            <p className="nav--caption">React Course - Project 3</p>
        </nav>
    )
}

export default Nav;