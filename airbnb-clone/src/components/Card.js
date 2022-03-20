import React from "react"
import katie from "../images/katie.png"
import star from "../images/star.png"

export default function Card() {
    return (
        <div className="card">
            <img className="card--img" src={katie} alt="katie"/>
            <div className="card--caption">
                <img className="card--star" src={star} alt="star"/>
                <span className="gray">5.0</span>
                <span className="gray">(6) * </span>
                <span>USA</span>
            </div>
            <p>Life lessons with Katie Zaferes</p>
            <p> <b>From $136</b> / person </p>
        </div>
    )
}