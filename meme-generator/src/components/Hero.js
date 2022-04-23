import React from "react"
//import hero from "./images/airbnb-hero.png"
function Hero () {
    return (
        <div className = "hero">
            <img src={process.env.PUBLIC_URL + `/images/airbnb-hero.png`} className="hero--photo" alt="hero" />
            <h1 className="hero--header">Online Experiences</h1>
            <p className="hero--text">Join unique interactive activies led by one-of-a-kind hosts--all without leaving home.</p> 
        </div>
    )
}

export default Hero;