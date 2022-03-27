import React from "react"

export default function Card(props) {
    return (
        <div className="card">
            <img className="card--img" src={process.env.PUBLIC_URL + `/images/${props.img}`} alt="katie"/>
            <div className="card--caption">
                <img className="card--star" src={process.env.PUBLIC_URL +  "/images/star.png"} alt="star"/>
                <span className="gray">{props.rating}</span>
                <span className="gray">({props.reviewCount}) • </span>
                <span>{props.country}</span>
            </div>
            <p>Life lessons with Katie Zaferes</p>
            <p> <b>From ${props.price}</b> / person </p>
        </div>
    )
}