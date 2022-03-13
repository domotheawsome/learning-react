import React from "react"
import hero from "../images/airbnb-hero.png"
function Hero () {
    return (
        <div className = "hero--div">
            <img src={hero} className="hero--img" alt="hero" />
            <h1 className="hero--title">Online Experiences</h1>
            <p className="hero--text">Join unique interactive activies led by one-of-a-kind hosts--all without leaving home.</p> 
        </div>
    )
}

export default Hero;